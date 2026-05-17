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
  const clusterPayload = clusters.map(c => ({
    x: c.centroid.x, y: c.centroid.y, z: c.centroid.z, mass: c.totalMass,
  }));
  synth.updateClusters(clusterPayload, flock.getWorldRadius());
  synth.setClusterCount(clusters.length);
  synth.setMyceliumLinks(flock.getMyceliumLinkCount());

  // Audio influence → flock trail length
  // (approximate the C++ getAudioInfluenceForTail: average of normalized synth params)
  // For now just use audio energy as proxy
  flock.setAudioInfluence(audioE);

  // Collisions → synth event triggers
  for (const ev of flock.getCollisionsThisFrame()) {
    synth.triggerCollision({
      pos: { x: ev.pos.x, y: ev.pos.y, z: ev.pos.z },
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
