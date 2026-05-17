/**
 * synth-worklet.js — full audio DSP, ported from C++ Synth::audioOut
 * ───────────────────────────────────────────────────────────────────
 * Layers (in per-sample order, mirrors C++):
 *   A. Cluster Drone — 4 voice × 3 detuned saws → SVF lowpass → wave folder
 *   B. Event Voices — 32 voice 2-op FM with bell envelope
 *   C. Wind — stereo filtered white noise, LFO-modulated cutoff
 *   C2. Granular — 16 grain pool, WAV source (set via postMessage)
 *   D. Hall Reverb — 4-tap FDN + HF damping + pre-delay
 *   E. Click (Pulsar) — 64 voice, Hann × sine carrier (POST-reverb dry)
 *
 * Message protocol (main → worklet):
 *   { type: 'params', payload: { ...flat keys } }
 *   { type: 'trigger', kind: 'collision', data: {...} }
 *   { type: 'cluster', count: N, voices: [{pos, mass, color}...] }
 *   { type: 'wavSource', samples: Float32Array, sampleRate, name }
 *   { type: 'reset' }
 *
 * From worklet → main:
 *   { type: 'audioEnergy', value }   每帧推一次 RMS-based 测量
 */

const NUM_DRONE_VOICES = 4;
const NUM_EVENT_VOICES = 32;
const NUM_GRAINS = 16;
const NUM_CLICKS = 64;
const NUM_REVERB_DELAYS = 4;
const RING_SIZE = 256;   // collision event ring

// EnergyStage — embedded copy (worklet can't import easily)
class EnergyStage {
  constructor(lo, hi, curve) { this.lo = lo; this.hi = hi; this.curve = curve; }
  stageOf(e) {
    const span = this.hi - this.lo;
    if (span < 1e-6) return e < this.lo ? 0 : 1;
    let t = (e - this.lo) / span;
    if (t < 0) t = 0; else if (t > 1) t = 1;
    switch (this.curve) {
      case 0: return t;
      case 1: return t * t;
      case 2: return Math.sqrt(t);
      case 3: return t * t * (3 - 2 * t);
      default: return t;
    }
  }
  blend(e, userValue, ca) { return userValue * (1 - ca * (1 - this.stageOf(e))); }
  blendRange(e, lo, hi, ca) {
    const stage = this.stageOf(e);
    const eff = lo + (hi - lo) * stage;
    return hi * (1 - ca) + eff * ca;
  }
}

const STAGE_WIND    = new EnergyStage(0.0, 0.5, 3);
const STAGE_DRONE_V = new EnergyStage(0.3, 0.7, 3);
const STAGE_CUTOFF  = new EnergyStage(0.2, 0.9, 2);
const STAGE_FOLD    = new EnergyStage(0.5, 1.0, 1);
const STAGE_EVT_VOL = new EnergyStage(0.0, 1.0, 3);
const STAGE_FM      = new EnergyStage(0.0, 1.0, 3);
const STAGE_CLICK   = new EnergyStage(0.0, 1.0, 3);

const PI = Math.PI;
const TWO_PI = PI * 2;
const HALF_PI = PI * 0.5;

// XorShift32 PRNG (avoid Math.random in hot path)
class FastRng {
  constructor(seed) { this.s = (seed >>> 0) || 0xdeadbeef; }
  next() { let x = this.s; x ^= x << 13; x ^= x >>> 17; x ^= x << 5; this.s = x >>> 0; return this.s; }
  float() { return this.next() / 4294967296; }
  signed() { return this.next() / 2147483648 - 1; }
}

// Scale tables matching Synth::quantizeToScale
const SCALES = [
  [0, 3, 5, 7, 10],          // penta min
  [0, 2, 4, 7, 9],           // penta maj
  [0, 2, 4, 5, 7, 9, 11],    // major
  [0, 2, 3, 5, 7, 8, 10],    // minor nat
  [0, 2, 3, 5, 7, 9, 10],    // dorian
  [0, 2, 4, 5, 7, 9, 10],    // mixolydian
  [0, 1, 3, 5, 7, 8, 10],    // phrygian
  [0, 2, 4, 6, 7, 9, 11],    // lydian
  [0, 3, 5, 6, 7, 10],       // blues
  [0, 2, 3, 7, 8],           // hirajoshi
  [0, 2, 4, 6, 8, 10],       // whole tone
  [0, 12, 19, 24, 28, 31],   // harmonic
];

class SynthProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.sr = sampleRate;
    this.rng = new FastRng(0x1337);

    // ─── Default param values (mirror C++ Synth::buildGui defaults) ───
    this.p = {
      audioEnabled: true,
      masterVol: 0.5,
      eventVol: 0.6, eventDecayMs: 50.0, eventAttackMs: 2.0,
      eventGainPerHit: 0.5, minMassToFire: 0.0, eventQuantize: true,
      reverbAmt: 0.55, reverbSize: 0.85, reverbDamp: 0.5, reverbPreDelayMs: 20.0,
      rootFreq: 110.0, scaleType: 0, droneGlideMs: 600.0,
      audioEnergyGain: 1.0,
      // FM
      fmRatio: 2.0, fmIndex: 3.0, fmIndexDecayMs: 40.0,
      tailToIdxDecayDepth: 0.5, eventFoldAmount: 0.0,
      // Cluster Drone
      clusterDroneVol: 0.5, clusterAttackMs: 800.0, clusterReleaseMs: 1500.0,
      clusterDetune: 0.008, clusterProximity: 80.0,
      clusterCutoff: 600.0, clusterResonance: 0.3, clusterDroneFold: 0.0,
      // Wind
      windVol: 0.4, windCutoff: 800.0, windResonance: 0.2,
      windAmpToCutoff: 1.0, windLfoRate: 0.4, windLfoDepth: 0.4,
      // Granular
      granVol: 0.3, grainSizeMs: 35.0, grainBaseRate: 8.0,
      granClusterInfluence: 6.0, grainPitchOffset: 0.0, grainPitchSpread: 5.0,
      grainPanSpread: 0.6, grainAttackFrac: 0.08,
      // Conductor coupling
      conductorAmount: 0.0,
      // Click pulsar
      clickEnabled: true, clickVol: 1.0, clickBaseRate: 8.0,
      clickDensityBoost: 60.0, clickConductorAmount: 0.0,
      clickLengthMs: 3.0, clickFormantHz: 4000.0,
    };

    // ─── Cluster Drone voices ───
    this.droneVoices = [];
    for (let i = 0; i < NUM_DRONE_VOICES; i++) {
      this.droneVoices.push({
        active: false,
        targetVol: 0, targetFreq: 110, targetPan: 0.5,
        currentVol: 0, currentFreq: 110, currentPan: 0.5,
        phase: [0, 0.333, 0.666],
        svfLow: 0, svfBand: 0,
        // tracking (mirrors DroneTracking)
        semitone: 0,
        trackedX: 0, trackedY: 0, trackedZ: 0,
        fadeoutSec: 0,
      });
    }

    // ─── Event voices ───
    this.eventVoices = [];
    for (let i = 0; i < NUM_EVENT_VOICES; i++) {
      this.eventVoices.push({
        active: false, age: 0, attackCounter: 0, attackSamples: 0,
        panL: 0.7, panR: 0.7,
        carrierFreq: 220, carrierPhase: 0, carrierAmp: 0, carrierDecay: 0.999,
        modFreq: 220, modPhase: 0, modIndex: 0, modIndexDecay: 0.999,
      });
    }

    // ─── Event ring buffer (collision triggers) ───
    this.eventRing = new Array(RING_SIZE);
    this.ringRead = 0;
    this.ringWrite = 0;

    // ─── Wind state ───
    this.windSvfLowL = 0; this.windSvfBandL = 0;
    this.windSvfLowR = 0; this.windSvfBandR = 0;
    this.windLfoPhase = 0;

    // ─── per-sample smoothing state ───
    this.windVolSmooth = 0.4;
    this.cdrVolSmooth = 0.5;
    this.evtVolSmooth = 0.6;
    this.svfFcSmooth = 0.05;
    this.foldDriveSmooth = 1.0;
    this.granVolSmooth = 0.3;

    // ─── Granular state ───
    this.grainSource = new Float32Array(0);
    this.grainSourceLen = 0;
    this.grains = [];
    for (let i = 0; i < NUM_GRAINS; i++) {
      this.grains.push({
        active: false, readPos: 0, age: 0, length: 0,
        pitch: 1, panL: 0.7, panR: 0.7,
      });
    }
    this.grainSchedAccum = 0;

    // ─── Hall reverb (FDN) ───
    const delayMs = [152.0, 191.0, 234.0, 283.0];
    this.delayBuf = []; this.delayLen = []; this.delayWrite = [];
    this.dampLpState = new Float32Array(NUM_REVERB_DELAYS);
    for (let i = 0; i < NUM_REVERB_DELAYS; i++) {
      const n = Math.max(1, Math.floor(delayMs[i] * 0.001 * this.sr));
      this.delayLen.push(n);
      this.delayBuf.push(new Float32Array(n));
      this.delayWrite.push(0);
    }
    this.preDelayBufLen = Math.floor(0.25 * this.sr);
    this.preDelayBuf = new Float32Array(this.preDelayBufLen);
    this.preDelayWrite = 0;

    // ─── Click pulsar ───
    this.clicks = [];
    for (let i = 0; i < NUM_CLICKS; i++) {
      this.clicks.push({
        active: false, age: 0, length: 0, amp: 0,
        panL: 0.5, panR: 0.5, formantFreq: 0, formantPhase: 0,
      });
    }
    this.clickAccum = 0;

    // ─── Cross-coupling input from main thread ───
    this.conductorValue = 0.5;
    this.tailInfluence = 0.0;
    this.fieldAmpTotal = 0.0;
    this.clusterCount = 0;
    this.myceliumLinks = 0;
    this.audioEnergyMeasured = 0;
    this.audioEnergyReportAccum = 0;

    // ─── Worldradius (for pan calc) ───
    this.worldRadius = 250.0;
    this.lastScaleType = -1;

    this.port.onmessage = (e) => this._onMessage(e.data);
    this.port.postMessage({ type: 'ready' });
  }

  // ─────────────────────────────────────────────────────
  // Main thread → worklet
  // ─────────────────────────────────────────────────────
  _onMessage(msg) {
    if (!msg) return;
    switch (msg.type) {
      case 'params':
        Object.assign(this.p, msg.payload);
        break;
      case 'conductorValue':
        this.conductorValue = msg.value;
        break;
      case 'tailInfluence':
        this.tailInfluence = msg.value;
        break;
      case 'fieldAmpTotal':
        this.fieldAmpTotal = msg.value;
        break;
      case 'clusterCount':
        this.clusterCount = msg.count|0;
        break;
      case 'myceliumLinks':
        this.myceliumLinks = msg.count|0;
        break;
      case 'cluster':
        this._updateClusterVoices(msg.clusters, msg.worldRadius);
        break;
      case 'trigger':
        if (msg.kind === 'collision') this._pushCollision(msg.data);
        break;
      case 'wavSource':
        this.grainSource = msg.samples;
        this.grainSourceLen = msg.samples.length;
        for (let g of this.grains) g.active = false;
        break;
      case 'reset':
        for (let v of this.droneVoices) v.active = false;
        for (let v of this.eventVoices) v.active = false;
        for (let g of this.grains) g.active = false;
        for (let c of this.clicks) c.active = false;
        break;
    }
  }

  // ─────────────────────────────────────────────────────
  // Helpers: scale quantize + cluster voice allocation
  // ─────────────────────────────────────────────────────
  _quantize(freq) {
    const sIdx = Math.max(0, Math.min(SCALES.length - 1, this.p.scaleType|0));
    const scale = SCALES[sIdx];
    const root = this.p.rootFreq;
    const semis = 12 * Math.log2(freq / root);
    const oct = Math.floor(semis / 12);
    const inOct = semis - oct * 12;
    let bestStep = scale[0], bestD = 100;
    for (let s of scale) { const d = Math.abs(s - inOct); if (d < bestD) { bestD = d; bestStep = s; } }
    return root * Math.pow(2, (oct * 12 + bestStep) / 12);
  }

  _massToFreq(mass) {
    const l = Math.log10(Math.max(mass, 1));
    let t = (l - 0.5) / 2; if (t < 0) t = 0; else if (t > 1) t = 1;
    t = 1 - t;
    const raw = this.p.rootFreq * Math.pow(2, t * 3);
    return this._quantize(raw);
  }

  _pickFreshSemitone() {
    const priority = [
      0, 12, 7, 24, 19,
      4, 16, 3, 15,
      11, 23, 10, 22,
      9, 21, 2, 14,
      -12, -5, 5, 17,
      36, -24,
    ];
    const used = [];
    for (let v of this.droneVoices) if (v.active) used.push(v.semitone);
    for (let k = 0; k < priority.length; k++) {
      const cand = priority[k];
      const candFreq = this.p.rootFreq * Math.pow(2, cand / 12);
      const quantFreq = this._quantize(candFreq);
      const semi = Math.round(12 * Math.log2(quantFreq / this.p.rootFreq));
      let isUsed = false;
      for (let u of used) if (u === semi) { isUsed = true; break; }
      if (!isUsed) return semi;
    }
    let maxU = -100; for (let u of used) if (u > maxU) maxU = u;
    return maxU + 12;
  }

  _updateClusterVoices(clusters, worldRadius) {
    this.worldRadius = worldRadius || 250;

    // Scale change check
    const curScale = this.p.scaleType|0;
    if (curScale !== this.lastScaleType) {
      this.lastScaleType = curScale;
      for (let v of this.droneVoices) {
        if (!v.active) continue;
        const candFreq = this.p.rootFreq * Math.pow(2, v.semitone / 12);
        const newFreq = this._quantize(candFreq);
        const newSemi = Math.round(12 * Math.log2(newFreq / this.p.rootFreq));
        v.semitone = newSemi;
        v.targetFreq = newFreq;
      }
    }

    const matched = [false, false, false, false];
    const proximity = this.p.clusterProximity;
    const proxSq = proximity * proximity;

    // Pass 1: match clusters to voices
    for (const c of clusters) {
      let bestIdx = -1, bestDsq = proxSq;
      for (let i = 0; i < NUM_DRONE_VOICES; i++) {
        const v = this.droneVoices[i];
        if (matched[i] || !v.active) continue;
        const dx = v.trackedX - c.x, dy = v.trackedY - c.y, dz = v.trackedZ - c.z;
        const d2 = dx*dx + dy*dy + dz*dz;
        if (d2 < bestDsq) { bestDsq = d2; bestIdx = i; }
      }
      let isNew = false;
      if (bestIdx < 0) {
        for (let i = 0; i < NUM_DRONE_VOICES; i++) {
          if (!matched[i] && !this.droneVoices[i].active) { bestIdx = i; isNew = true; break; }
        }
      }
      if (bestIdx < 0) continue;
      const v = this.droneVoices[bestIdx];
      if (isNew) {
        v.active = true;
        const semi = this._pickFreshSemitone();
        v.semitone = semi;
        const freq = this.p.rootFreq * Math.pow(2, semi / 12);
        v.currentVol = 0; v.currentFreq = freq; v.currentPan = 0.5;
        v.phase[0] = 0; v.phase[1] = 0.333; v.phase[2] = 0.666;
        v.svfLow = 0; v.svfBand = 0;
        v.targetFreq = freq;
      }
      v.trackedX = c.x; v.trackedY = c.y; v.trackedZ = c.z;
      v.fadeoutSec = 0;
      v.targetVol = 1;
      const pan = Math.max(0, Math.min(1, c.x / (this.worldRadius * 2) + 0.5));
      v.targetPan = pan;
      matched[bestIdx] = true;
    }

    // Pass 2: unmatched active voices → fadeout
    const releaseSec = this.p.clusterReleaseMs * 0.001;
    const releaseWithMargin = releaseSec * 1.05;
    const dt = 1 / 60;   // approx frame dt from main
    for (let i = 0; i < NUM_DRONE_VOICES; i++) {
      if (matched[i]) continue;
      const v = this.droneVoices[i];
      if (!v.active) continue;
      if (v.fadeoutSec <= 0) {
        v.targetVol = 0;
        v.fadeoutSec = releaseWithMargin;
      } else {
        v.fadeoutSec -= dt;
        if (v.fadeoutSec <= 0) v.active = false;
      }
    }
  }

  _pushCollision(ev) {
    // ev: { pos:{x,y,z}, mass, color, isAccent, brightness }
    if (ev.mass < this.p.minMassToFire) return;
    const wr = this.worldRadius;

    let freq;
    if (this.p.eventQuantize) {
      freq = this._massToFreq(ev.mass);
    } else {
      const l = Math.log10(Math.max(ev.mass, 1));
      let t = (l - 0.5) / 2; if (t < 0) t = 0; else if (t > 1) t = 1;
      t = 1 - t;
      freq = this.p.rootFreq * Math.pow(2, t * 3);
    }

    let gain = this.p.eventGainPerHit;
    if (ev.isAccent) { freq *= 2; gain *= 1.3; }

    const panPos = Math.max(0, Math.min(1, ev.pos.x / (wr * 2) + 0.5));
    const panL = Math.cos(panPos * HALF_PI);
    const panR = Math.sin(panPos * HALF_PI);

    const decaySamples = this.p.eventDecayMs * 0.001 * this.sr;
    const baseDecay = Math.exp(-1 / Math.max(decaySamples, 1));

    const brightness = Math.max(0, Math.min(1, ev.brightness || 0.5));
    const attackSamples = Math.max(1, Math.floor(this.p.eventAttackMs * 0.001 * this.sr));

    const nyquist = this.sr * 0.45;
    const rawRatio = this.p.fmRatio;
    let snappedRatio = Math.round(rawRatio * 2) / 2;
    if (snappedRatio < 0.5) snappedRatio = 0.5;
    const carrierFreq = Math.min(freq, nyquist);
    const modFreq = Math.min(freq * snappedRatio, nyquist);

    const modIndexScale = 0.3 + brightness * 0.7;
    let modIndexInit = this.p.fmIndex * modIndexScale;
    if (ev.isAccent) modIndexInit *= 1.5;

    // FM staging
    {
      const ca = this.p.conductorAmount;
      const cv = this.conductorValue;
      const energy = 0.5 * (1 - ca) + cv * ca;
      modIndexInit = STAGE_FM.blendRange(energy, modIndexInit * 0.5, modIndexInit, ca);
    }

    const idxDecayMod = this.tailInfluence * this.p.tailToIdxDecayDepth * 400;
    const effIdxDecayMs = this.p.fmIndexDecayMs + idxDecayMod;
    const modIdxDecaySamples = effIdxDecayMs * 0.001 * this.sr;
    const modIndexDecay = Math.exp(-1 / Math.max(modIdxDecaySamples, 1));

    const next = (this.ringWrite + 1) & (RING_SIZE - 1);
    if (next === this.ringRead) return;
    this.eventRing[this.ringWrite] = {
      carrierFreq, modFreq, carrierAmp: gain, carrierDecay: baseDecay,
      modIndex: modIndexInit, modIndexDecay, panL, panR, attackSamples,
    };
    this.ringWrite = next;
  }

  // ─────────────────────────────────────────────────────
  // Audio thread — process()
  // ─────────────────────────────────────────────────────
  process(_in, outputs) {
    const out = outputs[0];
    const L = out[0]; const R = out[1];
    const n = L.length;

    if (!this.p.audioEnabled) {
      for (let i = 0; i < n; i++) { L[i] = 0; R[i] = 0; }
      return true;
    }

    const p = this.p;
    const sr = this.sr;
    const master = p.masterVol;
    const verbAmt = p.reverbAmt;

    // Drain event ring → allocate to event voices
    // Voice steal cooldown: voices < 20ms old (~880 samples @ 44.1k) 不被偷
    // → 防止 cluster 爆触发时 voice churn 导致每个 voice 没机会响完就被替换
    // → 池满 + 全部年轻时丢弃新 trigger（自然 rate limiter）
    const stealGuardSamples = (0.020 * sr) | 0;
    let r = this.ringRead;
    const wEnd = this.ringWrite;
    while (r !== wEnd) {
      const te = this.eventRing[r];
      // find slot：先找 inactive，否则找最老的（age 最大）且过了 cooldown 的
      let tgt = -1; let oldestAge = -1;
      for (let i = 0; i < NUM_EVENT_VOICES; i++) {
        if (!this.eventVoices[i].active) { tgt = i; break; }
        if (this.eventVoices[i].age < stealGuardSamples) continue;   // protected
        if (this.eventVoices[i].age > oldestAge) {
          oldestAge = this.eventVoices[i].age; tgt = i;
        }
      }
      if (tgt >= 0) {
        const v = this.eventVoices[tgt];
        v.active = true; v.age = 0;
        v.attackCounter = 0; v.attackSamples = te.attackSamples;
        v.panL = te.panL; v.panR = te.panR;
        v.carrierFreq = te.carrierFreq; v.carrierPhase = 0;
        v.carrierAmp = te.carrierAmp; v.carrierDecay = te.carrierDecay;
        v.modFreq = te.modFreq; v.modPhase = 0.123;
        v.modIndex = te.modIndex; v.modIndexDecay = te.modIndexDecay;
      }
      // tgt < 0 → 所有 voice 都在 cooldown → 这次 trigger 被丢弃（不入队、不阻塞）
      r = (r + 1) & (RING_SIZE - 1);
    }
    this.ringRead = r;

    // EnergyStage per-buffer
    const ca = p.conductorAmount;
    const cv = this.conductorValue;
    const energy = 0.5 * (1 - ca) + cv * ca;
    const condAmt = ca;

    const evtVolStaged = STAGE_EVT_VOL.blendRange(energy, p.eventVol * 0.6, p.eventVol, condAmt);

    const baseCutoff = Math.max(20, Math.min(p.clusterCutoff, sr * 0.4));
    let cutoff = STAGE_CUTOFF.blendRange(energy, 200, baseCutoff, condAmt);
    cutoff = Math.max(20, Math.min(cutoff, sr * 0.4));
    let svfFc = 2 * Math.sin(PI * cutoff / sr);
    if (svfFc > 0.99) svfFc = 0.99;
    let svfQ = 1 - Math.max(0, Math.min(0.95, p.clusterResonance));
    if (svfQ < 0.05) svfQ = 0.05;

    const attackPerSample = 1 / Math.max(1, p.clusterAttackMs * 0.001 * sr);
    const releasePerSample = 1 / Math.max(1, p.clusterReleaseMs * 0.001 * sr);
    const detune = p.clusterDetune;
    const detuneRatios = [1, 1 + detune, 1 - detune];

    const glideMs = Math.max(1, Math.min(10000, p.droneGlideMs));
    const glideSamples = glideMs * 0.001 * sr;
    let glideCoef = 3 / Math.max(1, glideSamples);
    if (glideCoef > 1) glideCoef = 1;

    const baseFold = p.clusterDroneFold;
    const effFold = STAGE_FOLD.blend(energy, baseFold, condAmt);
    const foldDrive = 1 + effFold * 5;
    const foldActive = effFold > 0.001;

    const baseEventFold = p.eventFoldAmount;
    const effEventFold = STAGE_FOLD.blend(energy, baseEventFold, condAmt);
    const eventFoldDrive = 1 + effEventFold * 5;
    const eventFoldActive = effEventFold > 0.001;

    // Wind per-buffer
    const wndVol = STAGE_WIND.blend(energy, p.windVol, condAmt);
    const wndCutoffBase = Math.max(50, Math.min(p.windCutoff, sr * 0.4));
    let wndQ = 1 - Math.max(0, Math.min(0.95, p.windResonance));
    if (wndQ < 0.05) wndQ = 0.05;
    const wndAmpCutoffShift = this.fieldAmpTotal * p.windAmpToCutoff * 4000;
    const wndLfoIncr = Math.max(0, Math.min(10, p.windLfoRate)) / sr;
    const wndLfoD = p.windLfoDepth;

    // Smoothing targets
    const cdrVolTarget = STAGE_DRONE_V.blend(energy, p.clusterDroneVol, condAmt);
    const granVolTarget = STAGE_DRONE_V.blend(energy, p.granVol, condAmt);
    const evtVolTarget = evtVolStaged;
    const wndVolTarget = wndVol;
    const svfFcTarget = svfFc;
    const foldDriveTarget = foldDrive;

    // Granular per-buffer
    const curClusters = this.clusterCount;
    let effGrainRate = p.grainBaseRate + curClusters * p.granClusterInfluence;
    if (effGrainRate < 0.01) effGrainRate = 0.01;
    const samplesPerGrain = sr / effGrainRate;
    let grainAttackF = p.grainAttackFrac;
    if (grainAttackF < 0.02) grainAttackF = 0.02;
    else if (grainAttackF > 0.5) grainAttackF = 0.5;
    const invAttackF = 1 / grainAttackF;
    const invDecayF = 1 / (1 - grainAttackF);

    // Click per-buffer
    const densNorm = Math.min(1, this.myceliumLinks / 2000);
    let clkRate = p.clickBaseRate + densNorm * p.clickDensityBoost;
    {
      const cca = Math.max(0, Math.min(1, p.clickConductorAmount));
      clkRate = STAGE_CLICK.blendRange(energy, clkRate * 0.3, clkRate * 1.5, cca);
    }
    const clkOn = clkRate >= 0.5 && p.clickEnabled;
    const samplesPerClick = clkOn ? (sr / clkRate) : 1e9;
    const clkVol = clkOn ? p.clickVol : 0;

    // ─── per-sample loop ───
    const SMOOTH = 0.0003;
    let sumSq = 0;
    for (let i = 0; i < n; i++) {
      let left = 0, right = 0;

      this.cdrVolSmooth    += (cdrVolTarget    - this.cdrVolSmooth)    * SMOOTH;
      this.svfFcSmooth     += (svfFcTarget     - this.svfFcSmooth)     * SMOOTH;
      this.foldDriveSmooth += (foldDriveTarget - this.foldDriveSmooth) * SMOOTH;
      this.windVolSmooth   += (wndVolTarget    - this.windVolSmooth)   * SMOOTH;
      this.evtVolSmooth    += (evtVolTarget    - this.evtVolSmooth)    * SMOOTH;
      this.granVolSmooth   += (granVolTarget   - this.granVolSmooth)   * SMOOTH;

      // A. Cluster drone
      {
        const cdrVol = this.cdrVolSmooth;
        let cdrL = 0, cdrR = 0;
        for (let vi = 0; vi < NUM_DRONE_VOICES; vi++) {
          const dv = this.droneVoices[vi];
          if (!dv.active) continue;
          const tVol = dv.targetVol, tFreq = dv.targetFreq, tPan = dv.targetPan;
          if (tVol > dv.currentVol) {
            dv.currentVol += attackPerSample;
            if (dv.currentVol > tVol) dv.currentVol = tVol;
          } else if (tVol < dv.currentVol) {
            dv.currentVol -= releasePerSample;
            if (dv.currentVol < tVol) dv.currentVol = tVol;
          }
          dv.currentFreq += (tFreq - dv.currentFreq) * glideCoef;
          dv.currentPan  += (tPan  - dv.currentPan)  * 0.001;
          if (dv.currentVol <= 0 && tVol <= 0) continue;

          // 3 detuned saws (simple saw, no PolyBLEP — small fidelity tradeoff for perf)
          let raw = 0;
          for (let s = 0; s < 3; s++) {
            let f = dv.currentFreq * detuneRatios[s];
            if (f > sr * 0.45) f = sr * 0.45;
            const dtt = f / sr;
            raw += 2 * dv.phase[s] - 1;
            dv.phase[s] += dtt;
            if (dv.phase[s] >= 1) dv.phase[s] -= 1;
          }
          raw *= 1 / 3;

          // SVF lowpass
          dv.svfLow += this.svfFcSmooth * dv.svfBand;
          const svfHigh = raw - dv.svfLow - svfQ * dv.svfBand;
          dv.svfBand += this.svfFcSmooth * svfHigh;
          const filt = dv.svfLow;

          const sample = filt * dv.currentVol;
          const pl = Math.cos(dv.currentPan * HALF_PI);
          const pr = Math.sin(dv.currentPan * HALF_PI);
          cdrL += sample * pl;
          cdrR += sample * pr;
        }
        cdrL *= cdrVol * (2 / NUM_DRONE_VOICES);
        cdrR *= cdrVol * (2 / NUM_DRONE_VOICES);
        if (foldActive) {
          cdrL = Math.sin(cdrL * this.foldDriveSmooth);
          cdrR = Math.sin(cdrR * this.foldDriveSmooth);
        }
        left += cdrL; right += cdrR;
      }

      // B. Event voices (FM)
      {
        let eL = 0, eR = 0;
        for (let vi = 0; vi < NUM_EVENT_VOICES; vi++) {
          const vc = this.eventVoices[vi];
          if (!vc.active) continue;
          vc.age++;   // 用于 steal cooldown
          let envA = 1;
          if (vc.attackCounter < vc.attackSamples) {
            envA = vc.attackCounter / vc.attackSamples;
            vc.attackCounter++;
          }
          const modSample = Math.sin(vc.modPhase * TWO_PI) * vc.modIndex;
          vc.modPhase += vc.modFreq / sr; if (vc.modPhase >= 1) vc.modPhase -= 1;
          vc.modIndex *= vc.modIndexDecay;
          let s = Math.sin(vc.carrierPhase * TWO_PI + modSample) * vc.carrierAmp;
          vc.carrierPhase += vc.carrierFreq / sr; if (vc.carrierPhase >= 1) vc.carrierPhase -= 1;
          vc.carrierAmp *= vc.carrierDecay;
          if (vc.carrierAmp < 1e-5) { vc.active = false; continue; }
          s *= envA;
          eL += s * vc.panL; eR += s * vc.panR;
        }
        eL *= this.evtVolSmooth * (2 / NUM_EVENT_VOICES);
        eR *= this.evtVolSmooth * (2 / NUM_EVENT_VOICES);
        if (eventFoldActive) {
          eL = Math.sin(eL * eventFoldDrive);
          eR = Math.sin(eR * eventFoldDrive);
        }
        left += eL; right += eR;
      }

      // C. Wind
      if (wndVol > 0.001) {
        this.windLfoPhase += wndLfoIncr; if (this.windLfoPhase >= 1) this.windLfoPhase -= 1;
        const lfo = Math.sin(this.windLfoPhase * TWO_PI);
        let curCut = (wndCutoffBase + wndAmpCutoffShift) * (1 + lfo * wndLfoD * 0.6);
        if (curCut < 50) curCut = 50;
        if (curCut > sr * 0.4) curCut = sr * 0.4;
        let wndFc = 2 * Math.sin(PI * curCut / sr); if (wndFc > 0.99) wndFc = 0.99;
        const nL = this.rng.signed();
        const nR = this.rng.signed();
        this.windSvfLowL += wndFc * this.windSvfBandL;
        const hL = nL - this.windSvfLowL - wndQ * this.windSvfBandL;
        this.windSvfBandL += wndFc * hL;
        this.windSvfLowR += wndFc * this.windSvfBandR;
        const hR = nR - this.windSvfLowR - wndQ * this.windSvfBandR;
        this.windSvfBandR += wndFc * hR;
        left  += this.windSvfLowL * this.windVolSmooth;
        right += this.windSvfLowR * this.windVolSmooth;
      }

      // C2. Granular
      if (this.grainSourceLen > 0) {
        this.grainSchedAccum -= 1;
        if (this.grainSchedAccum <= 0) {
          for (let gi = 0; gi < NUM_GRAINS; gi++) {
            const g = this.grains[gi];
            if (g.active) continue;
            g.active = true; g.age = 0;
            g.length = Math.floor(p.grainSizeMs * 0.001 * sr);
            if (g.length < 1) g.length = 1;
            const offset = p.grainPitchOffset;
            const spread = p.grainPitchSpread;
            const jitter = this.rng.signed() * spread;
            const pitchSemi = offset + jitter;
            g.pitch = Math.pow(2, pitchSemi / 12);
            const marginMul = Math.max(2, Math.ceil(g.pitch + 1));
            let maxStart = this.grainSourceLen - g.length * marginMul;
            if (maxStart < 1) maxStart = 1;
            g.readPos = (this.rng.next() % maxStart);
            const pSpread = p.grainPanSpread;
            const panRand = (1 - pSpread) * 0.5 + this.rng.float() * pSpread;
            g.panL = Math.cos(panRand * HALF_PI);
            g.panR = Math.sin(panRand * HALF_PI);
            break;
          }
          this.grainSchedAccum += samplesPerGrain;
          if (this.grainSchedAccum < 1) this.grainSchedAccum = samplesPerGrain;
        }
        let gL = 0, gR = 0;
        for (let gi = 0; gi < NUM_GRAINS; gi++) {
          const g = this.grains[gi];
          if (!g.active) continue;
          const idx = Math.floor(g.readPos);
          if (idx >= this.grainSourceLen - 1) { g.active = false; continue; }
          const frac = g.readPos - idx;
          const s = this.grainSource[idx] * (1 - frac) + this.grainSource[idx + 1] * frac;
          const t = g.age / g.length;
          let env;
          if (t < grainAttackF) env = t * invAttackF;
          else env = (1 - t) * invDecayF;
          const ss = s * env;
          gL += ss * g.panL; gR += ss * g.panR;
          g.readPos += g.pitch; g.age++;
          if (g.age >= g.length) g.active = false;
        }
        // post-mix 归一化：16 grains 同时不再叠加成 8x，改为 ~1x 上限
        // 比之前小 4 倍 — 用户需要把 granVol 拉到 4 才能回到旧响度（slider max 3 已够用）
        gL *= this.granVolSmooth * (2 / NUM_GRAINS);
        gR *= this.granVolSmooth * (2 / NUM_GRAINS);
        left += gL; right += gR;
      }

      // D. Hall reverb (FDN)
      if (verbAmt > 0.001) {
        const inMix = (left + right) * 0.5;
        let preDelaySamples = Math.floor(p.reverbPreDelayMs * 0.001 * sr);
        if (preDelaySamples < 0) preDelaySamples = 0;
        if (preDelaySamples >= this.preDelayBufLen) preDelaySamples = this.preDelayBufLen - 1;
        this.preDelayBuf[this.preDelayWrite] = inMix;
        let preReadIdx = this.preDelayWrite - preDelaySamples;
        if (preReadIdx < 0) preReadIdx += this.preDelayBufLen;
        const reverbInput = this.preDelayBuf[preReadIdx];
        this.preDelayWrite = (this.preDelayWrite + 1) % this.preDelayBufLen;

        const d = [0, 0, 0, 0];
        for (let k = 0; k < NUM_REVERB_DELAYS; k++) {
          d[k] = this.delayBuf[k][this.delayWrite[k]];
        }
        let dampCoef = 1 - p.reverbDamp; if (dampCoef < 0.01) dampCoef = 0.01;
        const damped = [0, 0, 0, 0];
        for (let k = 0; k < NUM_REVERB_DELAYS; k++) {
          this.dampLpState[k] += dampCoef * (d[k] - this.dampLpState[k]);
          damped[k] = this.dampLpState[k];
        }
        const h = [
          (damped[0] + damped[1] + damped[2] + damped[3]) * 0.5,
          (damped[0] - damped[1] + damped[2] - damped[3]) * 0.5,
          (damped[0] + damped[1] - damped[2] - damped[3]) * 0.5,
          (damped[0] - damped[1] - damped[2] + damped[3]) * 0.5,
        ];
        let fb = p.reverbSize; if (fb > 0.97) fb = 0.97;
        for (let k = 0; k < NUM_REVERB_DELAYS; k++) {
          this.delayBuf[k][this.delayWrite[k]] = reverbInput + h[k] * fb;
          this.delayWrite[k] = (this.delayWrite[k] + 1) % this.delayLen[k];
        }
        const verbL = (d[0] + d[2]) * 0.5;
        const verbR = (d[1] + d[3]) * 0.5;
        left  += verbL * verbAmt;
        right += verbR * verbAmt;
      }

      // E. Click (Pulsar) — post-reverb dry
      if (clkOn) {
        this.clickAccum -= 1;
        if (this.clickAccum <= 0) {
          this._triggerClick();
          this.clickAccum += samplesPerClick;
          if (this.clickAccum < 1) this.clickAccum = samplesPerClick;
        }
        let cL = 0, cR = 0;
        for (let ci = 0; ci < NUM_CLICKS; ci++) {
          const cl = this.clicks[ci];
          if (!cl.active) continue;
          const t = cl.age / cl.length;
          if (t >= 1) { cl.active = false; continue; }
          const window = Math.sin(t * PI);
          const carrier = Math.sin(cl.formantPhase * TWO_PI);
          cl.formantPhase += cl.formantFreq / sr;
          if (cl.formantPhase >= 1) cl.formantPhase -= 1;
          const s = window * carrier * cl.amp;
          cL += s * cl.panL; cR += s * cl.panR;
          cl.age++;
        }
        left  += cL * clkVol;
        right += cR * clkVol;
      }

      // Pre-master soft compressor (knee at ±0.8)：避免直接撞 tanh 硬限幅
      // 输入 1.0 → 输出 ~0.95；输入 5.0 → 输出 ~0.98；不会到 1.0
      // 这样多 layer 堆叠不会瞬间撞限幅器边界，余量给后续处理
      const knee = 0.8;
      const absL = left < 0 ? -left : left;
      if (absL > knee) {
        const over = absL - knee;
        const sign = left < 0 ? -1 : 1;
        left = sign * (knee + (1 - knee) * Math.tanh(over / (1 - knee)));
      }
      const absR = right < 0 ? -right : right;
      if (absR > knee) {
        const over = absR - knee;
        const sign = right < 0 ? -1 : 1;
        right = sign * (knee + (1 - knee) * Math.tanh(over / (1 - knee)));
      }

      // Master gain + final tanh safety limiter
      left  = Math.tanh(left * master);
      right = Math.tanh(right * master);

      // NaN/Inf 守卫 — 一旦出现立即归零，避免 NaN 锁死整条 audio node
      if (!isFinite(left)) left = 0;
      if (!isFinite(right)) right = 0;

      L[i] = left; R[i] = right;
      const mono = (left + right) * 0.5;
      sumSq += mono * mono;
    }

    // Stateful guards: SVF + smoothing accumulators 飞了就重置（防 NaN 永久污染）
    if (!isFinite(this.cdrVolSmooth)) this.cdrVolSmooth = 0;
    if (!isFinite(this.svfFcSmooth)) this.svfFcSmooth = 0.05;
    if (!isFinite(this.foldDriveSmooth)) this.foldDriveSmooth = 1;
    if (!isFinite(this.windVolSmooth)) this.windVolSmooth = 0;
    if (!isFinite(this.evtVolSmooth)) this.evtVolSmooth = 0;
    if (!isFinite(this.granVolSmooth)) this.granVolSmooth = 0;
    if (!isFinite(this.windSvfLowL) || Math.abs(this.windSvfLowL) > 1e4) { this.windSvfLowL = 0; this.windSvfBandL = 0; }
    if (!isFinite(this.windSvfLowR) || Math.abs(this.windSvfLowR) > 1e4) { this.windSvfLowR = 0; this.windSvfBandR = 0; }
    for (const dv of this.droneVoices) {
      if (!isFinite(dv.svfLow) || Math.abs(dv.svfLow) > 1e4) { dv.svfLow = 0; dv.svfBand = 0; }
      if (!isFinite(dv.currentVol)) dv.currentVol = 0;
      if (!isFinite(dv.currentFreq)) dv.currentFreq = 110;
    }
    // Reverb FDN delay buffers — NaN / 过大值检测，整体重置
    // FDN 在持续大输入下会聚合，加上 dampLpState 链式累加，一旦坏了所有 tap 都坏
    for (let k = 0; k < NUM_REVERB_DELAYS; k++) {
      if (!isFinite(this.dampLpState[k]) || Math.abs(this.dampLpState[k]) > 1e3) this.dampLpState[k] = 0;
      // sample 几个 tap 看有无 NaN（成本极低，每 buffer 一次）
      const buf = this.delayBuf[k];
      const probe = buf[this.delayWrite[k]];
      if (!isFinite(probe) || Math.abs(probe) > 1e4) {
        // 全清零（不损失太多，reverb 自然衰减回来）
        for (let j = 0; j < buf.length; j++) buf[j] = 0;
        this.dampLpState[k] = 0;
      }
    }

    // Audio energy → main (per buffer, rate-limited)
    const rms = Math.sqrt(sumSq / Math.max(1, n));
    let measuredE = (rms * p.audioEnergyGain) / 0.08;
    if (measuredE > 1) measuredE = 1; else if (measuredE < 0) measuredE = 0;
    this.audioEnergyMeasured = this.audioEnergyMeasured * 0.95 + measuredE * 0.05;

    this.audioEnergyReportAccum += n;
    if (this.audioEnergyReportAccum >= sr * 0.05) {   // ~20Hz reports
      this.audioEnergyReportAccum = 0;
      this.port.postMessage({ type: 'audioEnergy', value: this.audioEnergyMeasured });
    }
    return true;
  }

  _triggerClick() {
    let slot = -1;
    for (let i = 0; i < NUM_CLICKS; i++) {
      if (!this.clicks[i].active) { slot = i; break; }
    }
    if (slot < 0) {
      let oldest = -1;
      for (let i = 0; i < NUM_CLICKS; i++) {
        if (this.clicks[i].age > oldest) { oldest = this.clicks[i].age; slot = i; }
      }
      if (slot < 0) slot = 0;
    }
    const c = this.clicks[slot];
    c.active = true; c.age = 0;
    c.length = Math.max(2, Math.floor(this.p.clickLengthMs * 0.001 * this.sr));
    let baseF = this.p.clickFormantHz;
    if (baseF < 50) baseF = 50;
    if (baseF > this.sr * 0.45) baseF = this.sr * 0.45;
    const jit = (this.rng.float() - 0.5) * 0.2;
    c.formantFreq = baseF * (1 + jit);
    c.formantPhase = 0;
    const pos = this.rng.float();
    c.panL = Math.cos(pos * HALF_PI);
    c.panR = Math.sin(pos * HALF_PI);
    let amp = 1.0;
    if (this.rng.float() < 0.05) amp *= 2.5;
    c.amp = amp;
  }
}

registerProcessor('synth-processor', SynthProcessor);
