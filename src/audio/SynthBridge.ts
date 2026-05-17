/**
 * SynthBridge — main-thread interface to the AudioWorklet
 * ─────────────────────────────────────────────────────────
 * Mirrors C++ Synth public API. Forwards param changes, triggers, and
 * cross-coupling values via postMessage. Receives audio-energy reports.
 */

export interface CollisionEvent {
  pos: { x: number; y: number; z: number };
  mass: number;
  brightness: number;
  isAccent: boolean;
}

export interface Cluster {
  x: number; y: number; z: number;
  mass: number;
}

export class SynthBridge {
  private ctx: AudioContext | null = null;
  private node: AudioWorkletNode | null = null;
  private ready = false;
  private audioEnergy = 0;
  private params: Record<string, number | boolean> = {};

  async init(): Promise<void> {
    if (this.ctx) return;
    this.ctx = new AudioContext({ latencyHint: 'interactive', sampleRate: 44100 });
    await this.ctx.audioWorklet.addModule('/synth-worklet.js');
    this.node = new AudioWorkletNode(this.ctx, 'synth-processor', {
      numberOfInputs: 0,
      numberOfOutputs: 1,
      outputChannelCount: [2],
    });
    this.node.port.onmessage = (e) => this._onMessage(e.data);
    this.node.connect(this.ctx.destination);
    this.ready = true;
    // Flush any params set before init
    if (Object.keys(this.params).length) {
      this.node.port.postMessage({ type: 'params', payload: this.params });
    }
    // Load default sample
    await this.loadDefaultSample();
  }

  get sampleRate(): number { return this.ctx?.sampleRate ?? 44100; }
  get audioEnergyMeasured(): number { return this.audioEnergy; }
  get isReady(): boolean { return this.ready; }

  private _onMessage(msg: any) {
    if (msg.type === 'audioEnergy') this.audioEnergy = msg.value;
  }

  setParams(patch: Record<string, number | boolean>) {
    Object.assign(this.params, patch);
    if (this.node) this.node.port.postMessage({ type: 'params', payload: patch });
  }
  setParam(key: string, value: number | boolean) {
    this.params[key] = value;
    if (this.node) this.node.port.postMessage({ type: 'params', payload: { [key]: value } });
  }
  setConductorValue(v: number) {
    this.node?.port.postMessage({ type: 'conductorValue', value: v });
  }
  setTailInfluence(v: number) {
    this.node?.port.postMessage({ type: 'tailInfluence', value: v });
  }
  setFieldAmpTotal(v: number) {
    this.node?.port.postMessage({ type: 'fieldAmpTotal', value: v });
  }
  setClusterCount(n: number) {
    this.node?.port.postMessage({ type: 'clusterCount', count: n });
  }
  setMyceliumLinks(n: number) {
    this.node?.port.postMessage({ type: 'myceliumLinks', count: n });
  }
  updateClusters(clusters: Cluster[], worldRadius: number) {
    this.node?.port.postMessage({ type: 'cluster', clusters, worldRadius });
  }
  triggerCollision(ev: CollisionEvent) {
    this.node?.port.postMessage({ type: 'trigger', kind: 'collision', data: ev });
  }
  reset() {
    this.node?.port.postMessage({ type: 'reset' });
  }

  /** Send a Float32Array mono sample to worklet (transferable for perf) */
  setGranularSample(samples: Float32Array, name = 'unknown') {
    if (!this.node) return;
    // structured-clone with transfer
    const copy = new Float32Array(samples);
    this.node.port.postMessage(
      { type: 'wavSource', samples: copy, sampleRate: this.sampleRate, name },
      [copy.buffer]
    );
  }

  /** Decode a wav file (drag-drop) and send to worklet */
  async loadWavFromFile(file: File) {
    const ab = await file.arrayBuffer();
    await this.decodeAndSend(ab, file.name);
  }

  /** Decode the bundled ChurchBells sample on startup */
  async loadDefaultSample() {
    try {
      const res = await fetch('/samples/Tremblay-CF-ChurchBells.wav');
      if (!res.ok) throw new Error('sample not bundled');
      const ab = await res.arrayBuffer();
      await this.decodeAndSend(ab, 'Tremblay-CF-ChurchBells.wav');
    } catch (e) {
      console.warn('[audio] default sample not loaded, granular will be silent:', e);
    }
  }

  private async decodeAndSend(ab: ArrayBuffer, name: string) {
    if (!this.ctx) return;
    const buf = await this.ctx.decodeAudioData(ab.slice(0));
    // mono mix + cap to 30s
    const nFrames = Math.min(buf.length, Math.floor(30 * buf.sampleRate));
    const mono = new Float32Array(nFrames);
    const numCh = buf.numberOfChannels;
    for (let c = 0; c < numCh; c++) {
      const ch = buf.getChannelData(c);
      for (let i = 0; i < nFrames; i++) mono[i] += ch[i];
    }
    for (let i = 0; i < nFrames; i++) mono[i] /= numCh;

    // resample to ctx.sampleRate if needed (linear interp — fine for granular)
    let final: Float32Array;
    if (buf.sampleRate !== this.ctx.sampleRate) {
      const ratio = this.ctx.sampleRate / buf.sampleRate;
      const newLen = Math.floor(nFrames * ratio);
      final = new Float32Array(newLen);
      for (let i = 0; i < newLen; i++) {
        const src = i / ratio;
        const idx = Math.floor(src);
        const frac = src - idx;
        final[i] = idx >= nFrames - 1
          ? mono[nFrames - 1]
          : mono[idx] * (1 - frac) + mono[idx + 1] * frac;
      }
    } else {
      final = mono;
    }

    // peak normalize 0.7
    let peak = 0;
    for (let i = 0; i < final.length; i++) {
      const a = Math.abs(final[i]); if (a > peak) peak = a;
    }
    if (peak > 0.001) {
      const g = 0.7 / peak;
      for (let i = 0; i < final.length; i++) final[i] *= g;
    }

    this.setGranularSample(final, name);
    console.log(`[audio] granular source ← ${name} (${final.length} samples)`);
  }
}
