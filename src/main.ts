/**
 * of-flock-3d (web port) · P0 entry
 * ──────────────────────────────────────────────
 * Minimal skeleton to prove the full pipeline runs:
 *   - Three.js WebGL2 renderer + perspective cam + orbit controls
 *   - Placeholder particle field (will become Flock3D in P1)
 *   - Web Audio API + AudioWorklet pipeline (silent for P0)
 *   - User-gesture audio gate (browser policy)
 *
 * Next milestone (P1): real boid behaviour + 6 force fields.
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// ────────────────────────────────────────────────
// Three.js setup
// ────────────────────────────────────────────────
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
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  10000
);
camera.position.set(0, 0, 600);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.rotateSpeed = 0.6;

// ────────────────────────────────────────────────
// P0 placeholder: 1000 spinning point sprites
// (P1 will replace with proper Flock3D module)
// ────────────────────────────────────────────────
const placeholderCount = 1000;
const positions = new Float32Array(placeholderCount * 3);
const colors = new Float32Array(placeholderCount * 3);
for (let i = 0; i < placeholderCount; i++) {
  const r = 250 * Math.cbrt(Math.random());
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(2 * Math.random() - 1);
  positions[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
  positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
  positions[i * 3 + 2] = r * Math.cos(phi);
  const hue = (i / placeholderCount) * 0.6 + 0.5;
  const col = new THREE.Color().setHSL(hue, 0.7, 0.6);
  colors[i * 3 + 0] = col.r;
  colors[i * 3 + 1] = col.g;
  colors[i * 3 + 2] = col.b;
}
const geom = new THREE.BufferGeometry();
geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));
const placeholderMat = new THREE.PointsMaterial({
  size: 4,
  sizeAttenuation: true,
  vertexColors: true,
  transparent: true,
  opacity: 0.85,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
});
const placeholderPoints = new THREE.Points(geom, placeholderMat);
scene.add(placeholderPoints);

// ────────────────────────────────────────────────
// Audio: AudioContext + AudioWorklet
// Silent in P0 — just proves the pipeline is wired.
// ────────────────────────────────────────────────
let audioCtx: AudioContext | null = null;
let workletNode: AudioWorkletNode | null = null;

async function startAudio() {
  if (audioCtx) return;
  audioCtx = new AudioContext({ latencyHint: 'interactive', sampleRate: 44100 });
  try {
    await audioCtx.audioWorklet.addModule('/synth-worklet.js');
  } catch (err) {
    console.error('[audio] failed to load worklet:', err);
    return;
  }
  workletNode = new AudioWorkletNode(audioCtx, 'synth-processor', {
    numberOfInputs: 0,
    numberOfOutputs: 1,
    outputChannelCount: [2],
  });
  workletNode.connect(audioCtx.destination);
  console.log('[audio] AudioWorklet running @', audioCtx.sampleRate, 'Hz');
}

const gate = document.getElementById('audio-gate')!;
gate.addEventListener(
  'click',
  async () => {
    await startAudio();
    gate.classList.add('hidden');
  },
  { once: true }
);

// ────────────────────────────────────────────────
// Resize
// ────────────────────────────────────────────────
window.addEventListener('resize', () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
});

// ────────────────────────────────────────────────
// Main loop
// ────────────────────────────────────────────────
let lastT = performance.now();
let fpsAccum = 0;
let fpsFrames = 0;
let fpsLastReport = lastT;

function tick(now: number) {
  const dt = (now - lastT) / 1000;
  lastT = now;

  // 简单旋转占位粒子，证明 GL 在动
  placeholderPoints.rotation.y += dt * 0.15;
  placeholderPoints.rotation.x += dt * 0.05;

  controls.update();
  renderer.render(scene, camera);

  // FPS HUD（每秒刷一次）
  fpsAccum += dt;
  fpsFrames++;
  if (now - fpsLastReport > 1000) {
    const fps = fpsFrames / fpsAccum;
    hudEl.textContent =
      `of-flock-3d · web port · P0   fps: ${fps.toFixed(1)}   audio: ${audioCtx ? 'on' : 'off'}`;
    fpsAccum = 0;
    fpsFrames = 0;
    fpsLastReport = now;
  }

  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

console.log('[main] of-flock-3d web port P0 booted');
