/**
 * of-flock-3d (web port) — main entry
 * ──────────────────────────────────────────────
 * Mirrors C++ ofApp::setup + update + draw flow:
 *   Flock3D + Synth (worklet) + MorphologyConductor × 2 + Synchresis + Score
 * Audio gate (browser user-gesture requirement) before any DSP starts.
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Flock3D } from './visual/Flock3D';
import { SynthBridge } from './audio/SynthBridge';
import { MorphologyConductor, DEFAULT_VISUAL_CONDUCTOR_PARAMS } from './control/MorphologyConductor';
import { Synchresis } from './control/Synchresis';
import { ScorePlayer } from './control/ScorePlayer';
import { buildGui } from './ui/Gui';
import { loadSettings, saveSettings, applySaved } from './utils/persistence';

// ─── Three.js setup ───
const appEl = document.getElementById('app')!;
const hudEl = document.getElementById('hud')!;

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  powerPreference: 'high-performance',
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x06080c, 1);
appEl.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 10000);
camera.position.set(0, 0, 700);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.rotateSpeed = 0.6;
controls.autoRotate = false;   // we'll drive rotation via Flock.autoRotate

// ─── Modules ───
const flock = new Flock3D(scene, camera);
const synth = new SynthBridge();
const audioConductor = new MorphologyConductor();
const visualConductor = new MorphologyConductor();
// Visual conductor gets its own defaults (C++ morphology_visual_settings.xml)
visualConductor.p = { ...DEFAULT_VISUAL_CONDUCTOR_PARAMS };
const synchresis = new Synchresis();
const scorePlayer = new ScorePlayer();

// ─── Load persisted settings (before GUI build → controllers see saved values) ───
const saved = loadSettings();
if (saved) {
  applySaved(flock.p, saved.flock);
  applySaved(audioConductor.p, saved.audioConductor);
  applySaved(visualConductor.p, saved.visualConductor);
  applySaved(synchresis.p, saved.synchresis);
  if (flock.p.particleCount !== flock.pool.N) flock.resizeIfNeeded();
  console.log('[main] restored settings from', new Date(saved.savedAt || 0).toLocaleString());
}

// GUI built once worklet is up (so initial synth params flush works)
let gui: any = null;
let synthParamsRef: any = null;
let saveTimer: number | null = null;

// ─── Audio gate ───
const gate = document.getElementById('audio-gate')!;
async function bootAudio() {
  await synth.init();
  const built = buildGui({
    flock, synth,
    audioConductor, visualConductor,
    synchresis, scorePlayer,
    savedSynthParams: saved?.synth,
  });
  gui = built.gui;
  synthParamsRef = built.synthParams;

  // Auto-save every 2s + on tab visibility change + on unload
  const doSave = () => {
    saveSettings({
      flock: { ...flock.p },
      audioConductor: { ...audioConductor.p },
      visualConductor: { ...visualConductor.p },
      synchresis: { ...synchresis.p },
      synth: { ...synthParamsRef },
    });
  };
  saveTimer = window.setInterval(doSave, 2000);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) doSave();
  });
  window.addEventListener('beforeunload', doSave);

  gate.classList.add('hidden');
}
gate.addEventListener('click', bootAudio, { once: true });

// ─── Drag-and-drop WAV → granular source ───
window.addEventListener('dragover', (e) => { e.preventDefault(); });
window.addEventListener('drop', async (e) => {
  e.preventDefault();
  if (!e.dataTransfer || !e.dataTransfer.files.length) return;
  for (const f of Array.from(e.dataTransfer.files)) {
    if (/\.(wav|aif|aiff|flac|mp3)$/i.test(f.name)) {
      try { await synth.loadWavFromFile(f); } catch (err) { console.warn('drop load failed', err); }
      break;
    }
  }
});

// ─── Resize ───
window.addEventListener('resize', () => {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
});

// ─── Keyboard ───
window.addEventListener('keydown', (e) => {
  if (e.key === ' ') { flock.reset(); synth.reset(); }
  if (e.key === 'f') {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
  }
});

// ─── Main loop ───
let lastT = performance.now();
let fpsAccum = 0, fpsFrames = 0, fpsLastReport = lastT;

// Event-audio rate cap (hardcoded 2000/sec)：
// 视觉碰撞闪烁保持原样不变，但 audio event trigger 通过 token bucket 限速
// → 粒子激烈聚集时视觉密度不缩水，音频不被几千次/秒的触发轰塌
const MAX_AUDIO_EVENTS_PER_SEC = 2000;
let audioEventTokens = MAX_AUDIO_EVENTS_PER_SEC;

// 空间+时间去重：cluster 里同位置同时间的碰撞 → 听觉等价于一个事件
// 60ms 窗内 + 距离 < DEDUPE_DIST 视为重复，只送第一个 audio trigger
// 这是 "看见乱、听见齐" 的核心：避免 33 个同 pitch voice 在一帧内互相 steal 锁死
const DEDUPE_DIST = 30;
const DEDUPE_DIST_SQ = DEDUPE_DIST * DEDUPE_DIST;
const DEDUPE_WINDOW_MS = 60;
const recentAudioTriggers: { x: number; y: number; z: number; t: number }[] = [];

function tick(now: number) {
  let dt = (now - lastT) / 1000;
  if (dt > 0.1) dt = 0.1;
  lastT = now;

  // Score → may overwrite conductor params
  scorePlayer.update(dt, audioConductor);

  // Conductors
  audioConductor.update(dt);
  visualConductor.update(dt);
  const audioCurve = audioConductor.value();
  const visualCurve = synchresis.p.counterpointEnabled ? visualConductor.value() : audioCurve;

  // Synchresis
  const audioE = synth.audioEnergyMeasured;
  const visualE = 0.5;   // TODO P9: real visual energy measurement
  synchresis.update(dt, audioCurve, audioE, visualE);

  const convForce = synchresis.convergenceForce();
  const visualBlended = visualCurve + (audioCurve - visualCurve) * convForce;
  const audioTarget = Math.max(0, Math.min(1, audioCurve + synchresis.audioCorrection()));
  const visualTarget = Math.max(0, Math.min(1, visualBlended + synchresis.visualCorrection()));

  synth.setConductorValue(audioTarget);
  flock.setConductorValue(visualTarget);

  // Flock physics + draw
  flock.update(dt);
  flock.draw();

  // Push cross-coupling state to synth
  synth.setFieldAmpTotal(flock.getFieldAmpTotal());
  synth.setTailInfluence(flock.getCurrentTailNormalized());

  // Cluster info → drone voice池
  const clusters = flock.getClusters(4);
  // Guard NaN/Inf — 即使粒子崩了也不污染 audio
  const safe = (v: number) => (isFinite(v) ? v : 0);
  const clusterPayload = clusters
    .map(c => ({
      x: safe(c.centroid.x), y: safe(c.centroid.y), z: safe(c.centroid.z),
      mass: safe(c.totalMass),
    }))
    .filter(c => c.mass > 0);
  synth.updateClusters(clusterPayload, flock.getWorldRadius());
  synth.setClusterCount(clusters.length);
  synth.setMyceliumLinks(flock.getMyceliumLinkCount());

  // Audio influence → flock trail length
  // (approximate the C++ getAudioInfluenceForTail: average of normalized synth params)
  // For now just use audio energy as proxy
  flock.setAudioInfluence(audioE);

  // Collisions → synth event triggers
  // 1) refill token bucket（2000/sec 上限）
  audioEventTokens = Math.min(
    MAX_AUDIO_EVENTS_PER_SEC,
    audioEventTokens + MAX_AUDIO_EVENTS_PER_SEC * dt
  );
  // 2) prune 过期的 dedupe 记录
  const nowMs = now;
  while (recentAudioTriggers.length > 0 && nowMs - recentAudioTriggers[0].t > DEDUPE_WINDOW_MS) {
    recentAudioTriggers.shift();
  }
  const rawCollisions = flock.getCollisionsThisFrame();
  // 按 mass 降序：tokens 不够时优先保留"分量重"的合并
  const sortedCollisions = rawCollisions.length > 1
    ? [...rawCollisions].sort((a, b) => b.newMass - a.newMass)
    : rawCollisions;
  for (const ev of sortedCollisions) {
    if (audioEventTokens < 1) break;
    // 空间+时间去重：60ms 内 + 距离 < 30 → 听觉视为重复事件
    let isDup = false;
    const ex = ev.pos.x, ey = ev.pos.y, ez = ev.pos.z;
    for (let i = 0; i < recentAudioTriggers.length; i++) {
      const rt = recentAudioTriggers[i];
      const dx = ex - rt.x, dy = ey - rt.y, dz = ez - rt.z;
      if (dx*dx + dy*dy + dz*dz < DEDUPE_DIST_SQ) { isDup = true; break; }
    }
    if (isDup) continue;   // 视觉照样 flash 了，只是 audio 这次不响

    audioEventTokens -= 1;
    recentAudioTriggers.push({ x: ex, y: ey, z: ez, t: nowMs });
    synth.triggerCollision({
      pos: { x: ex, y: ey, z: ez },
      mass: ev.newMass,
      brightness: (ev.color.r + ev.color.g + ev.color.b) / 3,
      isAccent: ev.isAccent,
    });
  }

  // Camera auto-rotate (matches Flock3D.draw rotation in C++)
  if (flock.p.autoRotate) {
    const c = camera.position;
    const a = dt * 0.3;
    const cos = Math.cos(a), sin = Math.sin(a);
    const nx = c.x * cos - c.z * sin;
    const nz = c.x * sin + c.z * cos;
    camera.position.set(nx, c.y, nz);
    camera.lookAt(0, 0, 0);
    controls.update();
  } else {
    controls.update();
  }

  renderer.render(scene, camera);

  // Live readouts → GUI
  if (gui) {
    for (const f of gui.folders) {
      const cr = (f as any).__condReadout;
      if (cr) cr.value = audioConductor.value();
      const ss = (f as any).__scoreState;
      if (ss) ss.status = scorePlayer.isPlaying()
        ? `▶ ${scorePlayer.currentScoreName()}  ${scorePlayer.elapsed().toFixed(1)}s`
        : 'idle';
    }
  }

  // HUD
  fpsAccum += dt; fpsFrames++;
  if (now - fpsLastReport > 500) {
    const fps = fpsFrames / fpsAccum;
    hudEl.textContent =
      `fps ${fps.toFixed(0)}` +
      `   morph: ${audioConductor.getModeName()} ${audioConductor.value().toFixed(2)}` +
      `   sync: ${synchresis.syncStrength().toFixed(2)}` +
      `   clusters: ${clusters.length}` +
      `   links: ${flock.getMyceliumLinkCount()}` +
      `   ae: ${audioE.toFixed(2)}`;
    fpsAccum = 0; fpsFrames = 0; fpsLastReport = now;
  }

  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);
console.log('[main] of-flock-3d web port booted');
