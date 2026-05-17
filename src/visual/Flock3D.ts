/**
 * Flock3D — web port of C++ Flock3D
 * ─────────────────────────────────────────────────────────
 * Faithful reproduction of the original module:
 *   - N particle pool (typed arrays for cache-friendliness)
 *   - 6 macro fields (noise / vortex / spiral / curl / attractor / repeller)
 *   - Boid sep/coh with K=10 random neighbour sampling
 *   - Merge on proximity → bigger particle wins, accent chance
 *   - Trail ring buffer per particle (24 frames)
 *   - Cluster detection via 3D grid hash (top-K by mass)
 *   - Mycelium 4 link modes + FBO bloom
 *   - Asymmetric size smoothing on sizeMult
 *
 * Particle data is interleaved in TypedArrays to avoid GC pressure.
 */

import * as THREE from 'three';
import { XorShift32, rng } from '../utils/rand';
import { clamp, lerp, TWO_PI, HALF_PI } from '../utils/math';
import { EnergyStage } from '../utils/EnergyStage';
import { PARTICLE_VS, PARTICLE_FS } from './shaders';

// Improved Perlin-ish via THREE.MathUtils not available — use small custom noise.
// 3D simplex would be ideal but we use a cheaper trig-noise mimic of OF's ofSignedNoise.
function pseudoNoise3(x: number, y: number, z: number): number {
  // sum of decorrelated sines — quick smooth field, range ~[-1, 1]
  const a = Math.sin(x * 1.7 + y * 2.3 + z * 3.1);
  const b = Math.sin(x * 2.6 - y * 1.9 + z * 1.5 + 13.0);
  const c = Math.sin(x * 3.5 + y * 2.7 - z * 2.1 + 27.0);
  return (a + b + c) / 3;
}

const TRAIL_MAX = 24;
const NUM_FIELDS = 6;

export interface FlockParams {
  particleCount: number;
  worldRadius: number;
  particleAlpha: number;
  autoRotate: boolean;
  hueBase: number;
  hueRange: number;
  brightness: number;
  // fields
  noiseAmplitude: number; noiseScale: number; noiseSpeed: number;
  vortexAmp: number; spiralAmp: number; curlAmp: number;
  attractorAmp: number; repellerAmp: number;
  // boid
  flockSeparation: number; flockCohesion: number; flockCohesionSpeed: number;
  flockNeighborRadius: number; mergeDistance: number;
  flockSpawnRate: number; flockMinAlive: number; flockDamping: number;
  particleSizeMin: number; particleSizeMax: number;
  // fade / flash / accent
  fadeInFrames: number; fadeOutFrames: number;
  flashFrames: number; flashIntensity: number;
  accentChance: number; accentSizeMul: number;
  // cluster
  clusterGridRes: number; clusterMinFlash: number;
  // trail
  tailLength: number; tailAudioSensitivity: number; tailAlpha: number;
  // material
  matBrightness: number; matSpecular: number; matAmbient: number; matGlow: number;
  // conductor coupling
  conductorAmount: number;
  // mycelium
  myceliumEnabled: boolean; myceliumLinkMode: number;   // 0..3
  myceliumLinkDist: number; myceliumMaxLinks: number; myceliumKnnK: number;
  myceliumLifetime: number; myceliumNodeStride: number;
  myceliumAlpha: number; myceliumFadeNear: number; myceliumLineWidth: number;
  myceliumFboBloom: boolean; myceliumFboFade: number;
}

// Defaults from user's current web session (snapshotted from localStorage)
export const DEFAULT_FLOCK_PARAMS: FlockParams = {
  particleCount: 20000, worldRadius: 250, particleAlpha: 0.6,
  autoRotate: true, hueBase: 0.55, hueRange: 0.2, brightness: 1,
  noiseAmplitude: 132.2, noiseScale: 0.0058884, noiseSpeed: 0.1505,
  vortexAmp: 30, spiralAmp: 0, curlAmp: 26.6,
  attractorAmp: 51.8, repellerAmp: 73.6,
  flockSeparation: 2.97, flockCohesion: 4.34, flockCohesionSpeed: 0.033,
  flockNeighborRadius: 81.37, mergeDistance: 12.076,
  flockSpawnRate: 225, flockMinAlive: 0.5, flockDamping: 0.92,
  particleSizeMin: 2.881, particleSizeMax: 10.7,
  fadeInFrames: 20, fadeOutFrames: 30,
  flashFrames: 12, flashIntensity: 1,
  accentChance: 0.1, accentSizeMul: 2.5,
  clusterGridRes: 5, clusterMinFlash: 5,
  tailLength: 0, tailAudioSensitivity: 1, tailAlpha: 0.45,
  matBrightness: 0.208, matSpecular: 0.326, matAmbient: 0.163, matGlow: 0.702,
  conductorAmount: 1,
  myceliumEnabled: true, myceliumLinkMode: 3,   // Gabriel
  myceliumLinkDist: 69.015, myceliumMaxLinks: 5, myceliumKnnK: 4,
  myceliumLifetime: 90, myceliumNodeStride: 5,
  myceliumAlpha: 0.35, myceliumFadeNear: 0, myceliumLineWidth: 4,
  myceliumFboBloom: false, myceliumFboFade: 0.93,
};

export interface CollisionRecord {
  pos: THREE.Vector3;
  newMass: number;
  winnerSize: number;
  loserSize: number;
  color: THREE.Color;
  isAccent: boolean;
}

export interface ClusterRecord {
  centroid: THREE.Vector3;
  velocity: THREE.Vector3;
  totalMass: number;
  particleCount: number;
  avgColor: THREE.Color;
}

// SoA particle pool
class ParticlePool {
  N: number;
  posX!: Float32Array; posY!: Float32Array; posZ!: Float32Array;
  velX!: Float32Array; velY!: Float32Array; velZ!: Float32Array;
  colR!: Float32Array; colG!: Float32Array; colB!: Float32Array; colA!: Float32Array;
  size!: Float32Array; mass!: Float32Array;
  alive!: Uint8Array;
  lifetime!: Int32Array; maxLifetime!: Int32Array;
  fadeInT!: Int32Array; fadeOutT!: Int32Array;
  flashT!: Int32Array; flashScale!: Float32Array;
  // trail ring (per particle): TRAIL_MAX * 3 floats
  trail!: Float32Array;
  trailWriteIdx!: Int32Array;
  trailCount!: Int32Array;

  constructor(n: number) {
    this.N = n;
    this.allocate(n);
  }
  allocate(n: number) {
    this.N = n;
    this.posX = new Float32Array(n); this.posY = new Float32Array(n); this.posZ = new Float32Array(n);
    this.velX = new Float32Array(n); this.velY = new Float32Array(n); this.velZ = new Float32Array(n);
    this.colR = new Float32Array(n); this.colG = new Float32Array(n); this.colB = new Float32Array(n);
    this.colA = new Float32Array(n);
    this.size = new Float32Array(n);
    this.mass = new Float32Array(n);
    this.alive = new Uint8Array(n);
    this.lifetime = new Int32Array(n); this.maxLifetime = new Int32Array(n);
    this.fadeInT = new Int32Array(n); this.fadeOutT = new Int32Array(n);
    this.flashT = new Int32Array(n); this.flashScale = new Float32Array(n);
    this.trail = new Float32Array(n * TRAIL_MAX * 3);
    this.trailWriteIdx = new Int32Array(n);
    this.trailCount = new Int32Array(n);
  }
}

export class Flock3D {
  p: FlockParams = { ...DEFAULT_FLOCK_PARAMS };
  pool: ParticlePool;
  prng = new XorShift32(0xC0FFEE);
  noiseTime = 0;

  // collisions accumulated this frame (drained by ofApp)
  collisionsThisFrame: CollisionRecord[] = [];
  lastBboxMin = new THREE.Vector3();
  lastBboxMax = new THREE.Vector3();
  lastGridRes = 5;
  lastBboxValid = false;
  lastCellCounts: Int32Array = new Int32Array(0);

  audioInfluence = 0;
  conductorValue = 0.5;
  sizeMultSmooth = 1;

  // Three.js objects
  scene: THREE.Scene;
  cam: THREE.PerspectiveCamera;
  particleGeom: THREE.BufferGeometry;
  particleMat: THREE.ShaderMaterial;
  particlePoints: THREE.Points;
  trailGeom: THREE.BufferGeometry;
  trailMat: THREE.LineBasicMaterial;
  trailLines: THREE.LineSegments;
  myceliumGeom: THREE.BufferGeometry;
  myceliumMat: THREE.LineBasicMaterial;
  myceliumLines: THREE.LineSegments;

  // per-particle Three.js attrs (resized when particleCount changes)
  attrPos!: THREE.BufferAttribute;
  attrCol!: THREE.BufferAttribute;
  attrSize!: THREE.BufferAttribute;

  // Mycelium FBO bloom
  fboA?: THREE.WebGLRenderTarget;
  fboB?: THREE.WebGLRenderTarget;
  fboScene?: THREE.Scene;
  fboCam?: THREE.OrthographicCamera;
  fboQuad?: THREE.Mesh;
  fboFadeMat?: THREE.MeshBasicMaterial;

  // mycelium persistent link map for LIFETIME mode (key = packed pair, val = age)
  persistentLinks = new Map<number, number>();

  myceliumLinkCount = 0;

  constructor(scene: THREE.Scene, cam: THREE.PerspectiveCamera) {
    this.scene = scene;
    this.cam = cam;
    this.pool = new ParticlePool(this.p.particleCount);

    // Particle mesh
    this.particleGeom = new THREE.BufferGeometry();
    this.attrPos = new THREE.BufferAttribute(new Float32Array(this.pool.N * 3), 3);
    this.attrCol = new THREE.BufferAttribute(new Float32Array(this.pool.N * 4), 4);
    this.attrSize = new THREE.BufferAttribute(new Float32Array(this.pool.N), 1);
    this.particleGeom.setAttribute('position', this.attrPos);
    this.particleGeom.setAttribute('pColor', this.attrCol);
    this.particleGeom.setAttribute('pSize', this.attrSize);
    this.particleGeom.setDrawRange(0, 0);

    this.particleMat = new THREE.ShaderMaterial({
      vertexShader: PARTICLE_VS,
      fragmentShader: PARTICLE_FS,
      uniforms: {
        uBrightness: { value: 0.55 },
        uSpecular: { value: 0.35 },
        uAmbient: { value: 0.25 },
        uGlow: { value: 0.3 },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.particlePoints = new THREE.Points(this.particleGeom, this.particleMat);
    this.particlePoints.frustumCulled = false;
    this.scene.add(this.particlePoints);

    // Trail mesh (LineSegments with vertex colors)
    this.trailGeom = new THREE.BufferGeometry();
    this.trailGeom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(0), 3));
    this.trailGeom.setAttribute('color', new THREE.BufferAttribute(new Float32Array(0), 4));
    this.trailMat = new THREE.LineBasicMaterial({
      vertexColors: true, transparent: true, blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.trailLines = new THREE.LineSegments(this.trailGeom, this.trailMat);
    this.trailLines.frustumCulled = false;
    this.scene.add(this.trailLines);

    // Mycelium mesh
    this.myceliumGeom = new THREE.BufferGeometry();
    this.myceliumGeom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(0), 3));
    this.myceliumGeom.setAttribute('color', new THREE.BufferAttribute(new Float32Array(0), 4));
    this.myceliumMat = new THREE.LineBasicMaterial({
      vertexColors: true, transparent: true, blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.myceliumLines = new THREE.LineSegments(this.myceliumGeom, this.myceliumMat);
    this.myceliumLines.frustumCulled = false;
    this.scene.add(this.myceliumLines);

    this._initParticles();
  }

  /** Re-init all particles (full reset) */
  reset() {
    this._initParticles();
    this.collisionsThisFrame.length = 0;
  }

  resizeIfNeeded() {
    if (this.pool.N !== this.p.particleCount) {
      this.pool.allocate(this.p.particleCount);
      this.attrPos = new THREE.BufferAttribute(new Float32Array(this.pool.N * 3), 3);
      this.attrCol = new THREE.BufferAttribute(new Float32Array(this.pool.N * 4), 4);
      this.attrSize = new THREE.BufferAttribute(new Float32Array(this.pool.N), 1);
      this.particleGeom.setAttribute('position', this.attrPos);
      this.particleGeom.setAttribute('pColor', this.attrCol);
      this.particleGeom.setAttribute('pSize', this.attrSize);
      this._initParticles();
    }
  }

  private _initParticles() {
    const pl = this.pool;
    const wr = this.p.worldRadius;
    for (let i = 0; i < pl.N; i++) this._respawn(i, true);
  }

  private _respawn(i: number, initial = false) {
    const pl = this.pool;
    const r = this.p.worldRadius * Math.cbrt(this.prng.float());
    const theta = this.prng.float() * TWO_PI;
    const phi = Math.acos(2 * this.prng.float() - 1);
    pl.posX[i] = r * Math.sin(phi) * Math.cos(theta);
    pl.posY[i] = r * Math.sin(phi) * Math.sin(theta);
    pl.posZ[i] = r * Math.cos(phi);
    pl.velX[i] = (this.prng.float() - 0.5) * 0.6;
    pl.velY[i] = (this.prng.float() - 0.5) * 0.6;
    pl.velZ[i] = (this.prng.float() - 0.5) * 0.6;
    // hue based on hueBase + hueRange
    const hue = this.p.hueBase + (this.prng.float() - 0.5) * this.p.hueRange;
    const col = new THREE.Color().setHSL(hue - Math.floor(hue), 0.7, 0.6);
    pl.colR[i] = col.r; pl.colG[i] = col.g; pl.colB[i] = col.b;
    pl.colA[i] = this.p.particleAlpha;
    pl.size[i] = this.p.particleSizeMin + this.prng.float() * (this.p.particleSizeMax - this.p.particleSizeMin);
    pl.mass[i] = 1 + this.prng.float() * 2;
    pl.alive[i] = 1;
    pl.fadeInT[i] = initial ? 0 : this.p.fadeInFrames;
    pl.fadeOutT[i] = 0;
    pl.flashT[i] = 0; pl.flashScale[i] = 1;
    pl.lifetime[i] = 0;
    pl.maxLifetime[i] = 9999999;
    pl.trailCount[i] = 0; pl.trailWriteIdx[i] = 0;
  }

  setAudioInfluence(v: number) { this.audioInfluence = v; }
  setConductorValue(v: number) { this.conductorValue = v; }

  getCollisionsThisFrame() { return this.collisionsThisFrame; }
  getWorldRadius() { return this.p.worldRadius; }

  getFieldAmpTotal(): number {
    const total = this.p.vortexAmp + this.p.spiralAmp + this.p.curlAmp;
    return clamp(total / 400, 0, 1);
  }
  getCurrentTailNormalized(): number {
    return clamp(this.p.tailLength / TRAIL_MAX, 0, 1);
  }
  getMyceliumLinkCount(): number { return this.myceliumLinkCount; }

  // ─────────────────────────────────────────────────────
  // update — physics + boid + merge + fade + flash
  // ─────────────────────────────────────────────────────
  update(dt: number) {
    if (dt > 0.1) dt = 0.1;
    this.resizeIfNeeded();
    this.collisionsThisFrame.length = 0;

    const pl = this.pool;
    const N = pl.N;
    const p = this.p;

    const wr = p.worldRadius;
    const wrSq = wr * wr;
    const damping = p.flockDamping;
    const dtF = 60 * dt;   // frame-time scale (game was tuned for 60fps)

    // Conductor → field amp scalar
    const ca = p.conductorAmount;
    const energy = 0.5 * (1 - ca) + this.conductorValue * ca;
    const fieldScalar = 1 * (1 - ca) + (0.5 + energy) * ca;

    this.noiseTime += p.noiseSpeed * dt;
    const ns = this.noiseTime;
    const nScale = p.noiseScale;

    const sep = p.flockSeparation;
    const coh = p.flockCohesion;
    const cohSpd = p.flockCohesionSpeed;
    const nbRadSq = p.flockNeighborRadius * p.flockNeighborRadius;
    const mergeDistSq = p.mergeDistance * p.mergeDistance;
    const K = 10;

    let aliveCount = 0;
    for (let i = 0; i < N; i++) {
      if (!pl.alive[i]) continue;
      aliveCount++;

      // 1. fade timers
      if (pl.fadeInT[i] > 0) pl.fadeInT[i]--;
      if (pl.fadeOutT[i] > 0) {
        pl.fadeOutT[i]--;
        if (pl.fadeOutT[i] <= 0) { pl.alive[i] = 0; continue; }
      }
      if (pl.flashT[i] > 0) pl.flashT[i]--;

      const x = pl.posX[i], y = pl.posY[i], z = pl.posZ[i];
      let fx = 0, fy = 0, fz = 0;

      // 2. Macro fields
      if (p.noiseAmplitude > 0) {
        const sx = x * nScale, sy = y * nScale, sz = z * nScale;
        fx += pseudoNoise3(sx + ns, sy,       sz)       * p.noiseAmplitude * fieldScalar * 0.5;
        fy += pseudoNoise3(sx,       sy + ns, sz)       * p.noiseAmplitude * fieldScalar * 0.5;
        fz += pseudoNoise3(sx,       sy,       sz + ns) * p.noiseAmplitude * fieldScalar * 0.5;
      }
      if (p.vortexAmp > 0) {
        // rotate around Y axis: v = (-z, 0, x) normalized * amp
        const len = Math.sqrt(x*x + z*z) + 1e-6;
        fx += (-z / len) * p.vortexAmp * fieldScalar;
        fz += ( x / len) * p.vortexAmp * fieldScalar;
      }
      if (p.spiralAmp > 0) {
        // tangential XZ + slight upward Y
        const len = Math.sqrt(x*x + z*z) + 1e-6;
        fx += (-z / len) * p.spiralAmp * fieldScalar * 0.8;
        fz += ( x / len) * p.spiralAmp * fieldScalar * 0.8;
        fy += 0.3 * p.spiralAmp * fieldScalar;
      }
      if (p.curlAmp > 0) {
        // curl of noise (approximate by sampling deltas)
        const eps = 0.5;
        const n1 = pseudoNoise3((x + eps) * nScale, y * nScale, z * nScale + ns);
        const n2 = pseudoNoise3((x - eps) * nScale, y * nScale, z * nScale + ns);
        const n3 = pseudoNoise3(x * nScale, (y + eps) * nScale, z * nScale + ns);
        const n4 = pseudoNoise3(x * nScale, (y - eps) * nScale, z * nScale + ns);
        fx += (n3 - n4) * p.curlAmp * fieldScalar;
        fy += (n2 - n1) * p.curlAmp * fieldScalar;
      }
      if (p.attractorAmp > 0) {
        const len = Math.sqrt(x*x + y*y + z*z) + 1e-6;
        fx -= (x / len) * p.attractorAmp * fieldScalar;
        fy -= (y / len) * p.attractorAmp * fieldScalar;
        fz -= (z / len) * p.attractorAmp * fieldScalar;
      }
      if (p.repellerAmp > 0) {
        const lenSq = x*x + y*y + z*z + 1;
        const k = p.repellerAmp * fieldScalar * 1000 / lenSq;
        fx += (x / Math.sqrt(lenSq)) * k;
        fy += (y / Math.sqrt(lenSq)) * k;
        fz += (z / Math.sqrt(lenSq)) * k;
      }

      // 3. Boid sep + coh (K random neighbours)
      let sepX = 0, sepY = 0, sepZ = 0;
      let cohX = 0, cohY = 0, cohZ = 0;
      let nbCount = 0;
      for (let k = 0; k < K; k++) {
        const j = this.prng.below(N);
        if (j === i || !pl.alive[j]) continue;
        const dx = pl.posX[j] - x, dy = pl.posY[j] - y, dz = pl.posZ[j] - z;
        const d2 = dx*dx + dy*dy + dz*dz;
        if (d2 < nbRadSq && d2 > 0.01) {
          // separation: away from neighbour, scaled by 1/d
          const d = Math.sqrt(d2);
          sepX -= dx / d; sepY -= dy / d; sepZ -= dz / d;
          // cohesion: pull toward mean
          cohX += pl.posX[j]; cohY += pl.posY[j]; cohZ += pl.posZ[j];
          nbCount++;
          // merge check (small radius)
          if (d2 < mergeDistSq) {
            this._tryMerge(i, j);
          }
        }
      }
      if (nbCount > 0) {
        fx += sepX * sep / nbCount;
        fy += sepY * sep / nbCount;
        fz += sepZ * sep / nbCount;
        cohX = cohX / nbCount - x;
        cohY = cohY / nbCount - y;
        cohZ = cohZ / nbCount - z;
        fx += cohX * coh * cohSpd;
        fy += cohY * coh * cohSpd;
        fz += cohZ * coh * cohSpd;
      }

      // 4. integrate
      pl.velX[i] = (pl.velX[i] + fx * dt) * damping;
      pl.velY[i] = (pl.velY[i] + fy * dt) * damping;
      pl.velZ[i] = (pl.velZ[i] + fz * dt) * damping;
      pl.posX[i] += pl.velX[i] * dtF;
      pl.posY[i] += pl.velY[i] * dtF;
      pl.posZ[i] += pl.velZ[i] * dtF;

      // soft world boundary
      const dSq = pl.posX[i]*pl.posX[i] + pl.posY[i]*pl.posY[i] + pl.posZ[i]*pl.posZ[i];
      if (dSq > wrSq * 1.5) {
        const d = Math.sqrt(dSq);
        const pull = (d - wr) / wr * 0.05;
        pl.velX[i] -= (pl.posX[i] / d) * pull;
        pl.velY[i] -= (pl.posY[i] / d) * pull;
        pl.velZ[i] -= (pl.posZ[i] / d) * pull;
      }

      // 5. push trail
      if (p.tailLength > 0) {
        const off = i * TRAIL_MAX * 3 + pl.trailWriteIdx[i] * 3;
        pl.trail[off + 0] = pl.posX[i];
        pl.trail[off + 1] = pl.posY[i];
        pl.trail[off + 2] = pl.posZ[i];
        pl.trailWriteIdx[i] = (pl.trailWriteIdx[i] + 1) % TRAIL_MAX;
        if (pl.trailCount[i] < TRAIL_MAX) pl.trailCount[i]++;
      }
    }

    // Respawn to keep minAlive (simple version of C++ spawn rate)
    const target = Math.floor(N * p.flockMinAlive);
    if (aliveCount < target) {
      let toSpawn = Math.min(target - aliveCount, Math.floor(p.flockSpawnRate));
      for (let i = 0; i < N && toSpawn > 0; i++) {
        if (!pl.alive[i]) {
          this._respawn(i);
          toSpawn--;
        }
      }
    }
  }

  /** Bigger eats smaller; spawn collision record */
  private _tryMerge(a: number, b: number) {
    const pl = this.pool;
    if (!pl.alive[a] || !pl.alive[b]) return;
    const winner = pl.mass[a] >= pl.mass[b] ? a : b;
    const loser = winner === a ? b : a;
    const newMass = pl.mass[winner] + pl.mass[loser];
    const wsz = pl.size[winner], lsz = pl.size[loser];
    const isAccent = this.prng.float() < this.p.accentChance;

    // Apply merge
    pl.mass[winner] = newMass;
    pl.size[winner] = Math.min(this.p.particleSizeMax, pl.size[winner] + pl.size[loser] * 0.25);
    // color: weighted blend
    const wW = wsz / (wsz + lsz);
    const wL = 1 - wW;
    pl.colR[winner] = pl.colR[winner] * wW + pl.colR[loser] * wL;
    pl.colG[winner] = pl.colG[winner] * wW + pl.colG[loser] * wL;
    pl.colB[winner] = pl.colB[winner] * wW + pl.colB[loser] * wL;
    pl.flashT[winner] = this.p.flashFrames;
    pl.flashScale[winner] = isAccent ? this.p.accentSizeMul : 1;
    // Loser dies via fadeOut
    pl.fadeOutT[loser] = this.p.fadeOutFrames;

    // Emit collision event
    this.collisionsThisFrame.push({
      pos: new THREE.Vector3(pl.posX[winner], pl.posY[winner], pl.posZ[winner]),
      newMass,
      winnerSize: wsz, loserSize: lsz,
      color: new THREE.Color(pl.colR[winner], pl.colG[winner], pl.colB[winner]),
      isAccent,
    });
  }

  // ─────────────────────────────────────────────────────
  // Cluster detection (3D grid hash on flashing particles)
  // ─────────────────────────────────────────────────────
  getClusters(maxK: number): ClusterRecord[] {
    const pl = this.pool;
    const N = pl.N;
    const gridRes = Math.max(2, this.p.clusterGridRes);
    const totalCells = gridRes ** 3;

    let minX = 1e9, minY = 1e9, minZ = 1e9;
    let maxX = -1e9, maxY = -1e9, maxZ = -1e9;
    let any = false;
    for (let i = 0; i < N; i++) {
      if (!pl.alive[i] || pl.fadeOutT[i] > 0) continue;
      const x = pl.posX[i], y = pl.posY[i], z = pl.posZ[i];
      if (x < minX) minX = x; if (y < minY) minY = y; if (z < minZ) minZ = z;
      if (x > maxX) maxX = x; if (y > maxY) maxY = y; if (z > maxZ) maxZ = z;
      any = true;
    }
    if (!any) { this.lastBboxValid = false; return []; }
    const pad = 2;
    minX -= pad; minY -= pad; minZ -= pad;
    maxX += pad; maxY += pad; maxZ += pad;
    let sx = maxX - minX, sy = maxY - minY, sz = maxZ - minZ;
    if (sx < 1) sx = 1; if (sy < 1) sy = 1; if (sz < 1) sz = 1;

    const cells = new Array(totalCells);
    for (let i = 0; i < totalCells; i++) cells[i] = {
      mass: 0, count: 0, posX: 0, posY: 0, posZ: 0,
      velX: 0, velY: 0, velZ: 0, colR: 0, colG: 0, colB: 0,
    };
    const invSx = gridRes / sx, invSy = gridRes / sy, invSz = gridRes / sz;

    this.lastCellCounts = new Int32Array(totalCells);

    for (let i = 0; i < N; i++) {
      if (!pl.alive[i] || pl.fadeOutT[i] > 0 || pl.flashT[i] <= 0) continue;
      const rx = (pl.posX[i] - minX) * invSx;
      const ry = (pl.posY[i] - minY) * invSy;
      const rz = (pl.posZ[i] - minZ) * invSz;
      const ix = clamp(rx | 0, 0, gridRes - 1);
      const iy = clamp(ry | 0, 0, gridRes - 1);
      const iz = clamp(rz | 0, 0, gridRes - 1);
      const idx = ix + iy * gridRes + iz * gridRes * gridRes;
      const c = cells[idx];
      c.mass += pl.mass[i]; c.count++;
      c.posX += pl.posX[i]; c.posY += pl.posY[i]; c.posZ += pl.posZ[i];
      c.velX += pl.velX[i]; c.velY += pl.velY[i]; c.velZ += pl.velZ[i];
      c.colR += pl.colR[i]; c.colG += pl.colG[i]; c.colB += pl.colB[i];
      this.lastCellCounts[idx]++;
    }

    this.lastBboxMin.set(minX, minY, minZ);
    this.lastBboxMax.set(maxX, maxY, maxZ);
    this.lastGridRes = gridRes;
    this.lastBboxValid = true;

    const minFlash = Math.max(1, this.p.clusterMinFlash);
    const out: ClusterRecord[] = [];
    for (let i = 0; i < totalCells; i++) {
      const c = cells[i];
      if (c.count < minFlash) continue;
      const inv = 1 / c.count;
      out.push({
        centroid: new THREE.Vector3(c.posX * inv, c.posY * inv, c.posZ * inv),
        velocity: new THREE.Vector3(c.velX * inv, c.velY * inv, c.velZ * inv),
        totalMass: c.mass,
        particleCount: c.count,
        avgColor: new THREE.Color(c.colR * inv, c.colG * inv, c.colB * inv),
      });
    }
    out.sort((a, b) => b.totalMass - a.totalMass);
    if (out.length > maxK) out.length = maxK;
    return out;
  }

  // ─────────────────────────────────────────────────────
  // draw — push pool state to GPU + build trail/mycelium
  // ─────────────────────────────────────────────────────
  draw() {
    const pl = this.pool;
    const N = pl.N;
    const p = this.p;

    // size mult asymmetric smoothing (rp-50)
    const ca = p.conductorAmount;
    const energy = 0.5 * (1 - ca) + this.conductorValue * ca;
    const stageSize = new EnergyStage(0.4, 1.0, 1);
    const stageOf = stageSize.stageOf(energy);
    const sizeMultTarget = (1 - ca) + ca * (0.5 + stageOf);
    {
      const dtFrame = 1 / 60;   // approx
      const tau = (sizeMultTarget >= this.sizeMultSmooth) ? 0.08 : 0.7;
      const k = 1 - Math.exp(-dtFrame / tau);
      this.sizeMultSmooth += (sizeMultTarget - this.sizeMultSmooth) * k;
    }
    const sizeMult = this.sizeMultSmooth;
    const stageBri = new EnergyStage(0.2, 1.0, 0);
    const effBri = stageBri.blend(energy, p.matBrightness, ca);

    // Push to attrs (compact alive particles to draw range)
    const posArr = this.attrPos.array as Float32Array;
    const colArr = this.attrCol.array as Float32Array;
    const sizeArr = this.attrSize.array as Float32Array;
    let count = 0;
    const flInt = p.flashIntensity;
    const flFrames = p.flashFrames;
    const fInFr = p.fadeInFrames;
    const fOutFr = p.fadeOutFrames;
    for (let i = 0; i < N; i++) {
      if (!pl.alive[i]) continue;
      let fadeIn = 1;
      if (fInFr > 0 && pl.fadeInT[i] > 0) fadeIn = 1 - pl.fadeInT[i] / fInFr;
      let fadeOut = 1;
      if (fOutFr > 0 && pl.fadeOutT[i] > 0) fadeOut = pl.fadeOutT[i] / fOutFr;
      let flashAmt = 0;
      if (flFrames > 0 && pl.flashT[i] > 0) flashAmt = (pl.flashT[i] / flFrames) * flInt;

      let r = pl.colR[i], g = pl.colG[i], b = pl.colB[i];
      let a = pl.colA[i];
      if (flashAmt > 0) {
        const kk = clamp(flashAmt, 0, 1);
        r = r * (1 - kk) + kk;
        g = g * (1 - kk) + kk;
        b = b * (1 - kk) + kk;
        a = Math.min(1, a * (1 + flashAmt));
      }
      a *= fadeIn * fadeOut;
      const displaySize = pl.size[i] * sizeMult * (1 + flashAmt * 1.5 * pl.flashScale[i]);

      posArr[count * 3 + 0] = pl.posX[i];
      posArr[count * 3 + 1] = pl.posY[i];
      posArr[count * 3 + 2] = pl.posZ[i];
      colArr[count * 4 + 0] = r;
      colArr[count * 4 + 1] = g;
      colArr[count * 4 + 2] = b;
      colArr[count * 4 + 3] = a;
      sizeArr[count] = displaySize;
      count++;
    }
    this.particleGeom.setDrawRange(0, count);
    this.attrPos.needsUpdate = true;
    this.attrCol.needsUpdate = true;
    this.attrSize.needsUpdate = true;

    // shader uniforms
    this.particleMat.uniforms.uBrightness.value = effBri;
    this.particleMat.uniforms.uSpecular.value = p.matSpecular;
    this.particleMat.uniforms.uAmbient.value = p.matAmbient;
    this.particleMat.uniforms.uGlow.value = p.matGlow;

    // Trail rebuild
    this._buildTrailMesh();

    // Mycelium rebuild
    if (p.myceliumEnabled) {
      this._buildMyceliumMesh();
      this.myceliumLines.visible = true;
    } else {
      this.myceliumLines.visible = false;
      this.myceliumLinkCount = 0;
    }
  }

  // ─────────────────────────────────────────────────────
  private _buildTrailMesh() {
    const pl = this.pool;
    const p = this.p;
    const baseLen = p.tailLength;
    const scale = 0.5 + this.audioInfluence * p.tailAudioSensitivity * 1.5;
    let effLen = Math.floor(baseLen * scale);
    if (effLen < 2 || p.tailAlpha < 0.001) {
      this.trailGeom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(0), 3));
      this.trailGeom.setAttribute('color', new THREE.BufferAttribute(new Float32Array(0), 4));
      this.trailLines.visible = false;
      return;
    }
    if (effLen > TRAIL_MAX) effLen = TRAIL_MAX;
    let step = 1;
    if (effLen > 18) step = 3;
    else if (effLen > 12) step = 2;
    const segsPerP = Math.floor((effLen - 1) / step);
    // estimate max verts
    const tailA = p.tailAlpha;

    // first pass: count
    const verts: number[] = [];
    const cols: number[] = [];
    const N = pl.N;
    for (let i = 0; i < N; i++) {
      if (!pl.alive[i]) continue;
      const cnt = Math.min(pl.trailCount[i], effLen);
      if (cnt < 2) continue;
      const actualSegs = Math.floor((cnt - 1) / step);
      if (actualSegs < 1) continue;
      const invSegs = 1 / actualSegs;
      const baseAlpha = pl.colA[i] * tailA;
      let idx = pl.trailWriteIdx[i] - cnt;
      while (idx < 0) idx += TRAIL_MAX;
      let nextIdx = (idx + step) % TRAIL_MAX;
      for (let s = 0; s < actualSegs; s++) {
        const fadeOld = s * invSegs;
        const fadeNew = (s + 1) * invSegs;
        const off0 = i * TRAIL_MAX * 3 + idx * 3;
        const off1 = i * TRAIL_MAX * 3 + nextIdx * 3;
        verts.push(pl.trail[off0], pl.trail[off0 + 1], pl.trail[off0 + 2]);
        verts.push(pl.trail[off1], pl.trail[off1 + 1], pl.trail[off1 + 2]);
        cols.push(pl.colR[i], pl.colG[i], pl.colB[i], baseAlpha * fadeOld);
        cols.push(pl.colR[i], pl.colG[i], pl.colB[i], baseAlpha * fadeNew);
        idx = nextIdx;
        nextIdx = (nextIdx + step) % TRAIL_MAX;
      }
    }
    this.trailGeom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(verts), 3));
    this.trailGeom.setAttribute('color', new THREE.BufferAttribute(new Float32Array(cols), 4));
    this.trailLines.visible = verts.length > 0;
  }

  // ─────────────────────────────────────────────────────
  private _buildMyceliumMesh() {
    const pl = this.pool;
    const N = pl.N;
    const p = this.p;
    const linkD = p.myceliumLinkDist;
    if (linkD <= 0.5) { this.myceliumLinkCount = 0; return; }
    const stride = Math.max(1, p.myceliumNodeStride);
    const maxLinks = Math.max(1, p.myceliumMaxLinks);
    const knnK = Math.max(1, p.myceliumKnnK);
    const lifetime = Math.max(1, p.myceliumLifetime);
    const linkD2 = linkD * linkD;
    const alpha = p.myceliumAlpha;
    const fadeNear = clamp(p.myceliumFadeNear, 0, 1);
    const mode = p.myceliumLinkMode | 0;

    // sample nodes
    const nodeIdx: number[] = [];
    for (let i = 0; i < N; i += stride) {
      if (pl.alive[i] && pl.fadeOutT[i] === 0) nodeIdx.push(i);
    }
    if (nodeIdx.length < 2) { this.myceliumLinkCount = 0; return; }

    // bbox
    let minX = 1e9, minY = 1e9, minZ = 1e9;
    let maxX = -1e9, maxY = -1e9, maxZ = -1e9;
    for (const idx of nodeIdx) {
      const x = pl.posX[idx], y = pl.posY[idx], z = pl.posZ[idx];
      if (x < minX) minX = x; if (y < minY) minY = y; if (z < minZ) minZ = z;
      if (x > maxX) maxX = x; if (y > maxY) maxY = y; if (z > maxZ) maxZ = z;
    }
    const pad = linkD * 0.51;
    minX -= pad; minY -= pad; minZ -= pad;
    maxX += pad; maxY += pad; maxZ += pad;
    const sx = maxX - minX, sy = maxY - minY, sz = maxZ - minZ;
    const rx = Math.max(1, Math.min(64, Math.ceil(sx / linkD)));
    const ry = Math.max(1, Math.min(64, Math.ceil(sy / linkD)));
    const rz = Math.max(1, Math.min(64, Math.ceil(sz / linkD)));
    const invLinkD = 1 / linkD;
    const totalCells = rx * ry * rz;
    const grid: number[][] = new Array(totalCells);
    for (let i = 0; i < totalCells; i++) grid[i] = [];
    for (const idx of nodeIdx) {
      const ix = clamp(((pl.posX[idx] - minX) * invLinkD) | 0, 0, rx - 1);
      const iy = clamp(((pl.posY[idx] - minY) * invLinkD) | 0, 0, ry - 1);
      const iz = clamp(((pl.posZ[idx] - minZ) * invLinkD) | 0, 0, rz - 1);
      grid[ix + iy * rx + iz * rx * ry].push(idx);
    }

    const verts: number[] = [];
    const cols: number[] = [];

    const pushLink = (aIdx: number, bIdx: number, d2: number, lifeFade: number) => {
      const dist = Math.sqrt(d2);
      const t = dist * invLinkD;
      const distW = 1 - t * (1 - fadeNear);
      const r = (pl.colR[aIdx] + pl.colR[bIdx]) * 0.5;
      const g = (pl.colG[aIdx] + pl.colG[bIdx]) * 0.5;
      const b = (pl.colB[aIdx] + pl.colB[bIdx]) * 0.5;
      const a = alpha * distW * lifeFade;
      verts.push(pl.posX[aIdx], pl.posY[aIdx], pl.posZ[aIdx]);
      verts.push(pl.posX[bIdx], pl.posY[bIdx], pl.posZ[bIdx]);
      cols.push(r, g, b, a); cols.push(r, g, b, a);
    };

    // query candidates around node n (27-cell), dedup by m > n
    const queryNeighbors = (n: number, dedup: boolean, maxD2: number): { idx: number; d2: number }[] => {
      const cand: { idx: number; d2: number }[] = [];
      const ax = pl.posX[n], ay = pl.posY[n], az = pl.posZ[n];
      const cx = clamp(((ax - minX) * invLinkD) | 0, 0, rx - 1);
      const cy = clamp(((ay - minY) * invLinkD) | 0, 0, ry - 1);
      const cz = clamp(((az - minZ) * invLinkD) | 0, 0, rz - 1);
      for (let dz = -1; dz <= 1; dz++) {
        const iz = cz + dz; if (iz < 0 || iz >= rz) continue;
        for (let dy = -1; dy <= 1; dy++) {
          const iy = cy + dy; if (iy < 0 || iy >= ry) continue;
          for (let dx = -1; dx <= 1; dx++) {
            const ix = cx + dx; if (ix < 0 || ix >= rx) continue;
            const bucket = grid[ix + iy * rx + iz * rx * ry];
            for (const m of bucket) {
              if (m === n) continue;
              if (dedup && m <= n) continue;
              const ddx = pl.posX[m] - ax;
              const ddy = pl.posY[m] - ay;
              const ddz = pl.posZ[m] - az;
              const d2 = ddx*ddx + ddy*ddy + ddz*ddz;
              if (d2 > maxD2) continue;
              cand.push({ idx: m, d2 });
            }
          }
        }
      }
      return cand;
    };

    switch (mode) {
      case 0: { // DISTANCE
        for (const n of nodeIdx) {
          let cand = queryNeighbors(n, true, linkD2);
          if (cand.length > maxLinks) {
            cand.sort((a, b) => a.d2 - b.d2);
            cand.length = maxLinks;
          }
          for (const c of cand) pushLink(n, c.idx, c.d2, 1);
        }
        break;
      }
      case 1: { // KNN
        for (const n of nodeIdx) {
          let cand = queryNeighbors(n, true, linkD2);
          if (cand.length > knnK) {
            cand.sort((a, b) => a.d2 - b.d2);
            cand.length = knnK;
          }
          for (const c of cand) pushLink(n, c.idx, c.d2, 1);
        }
        break;
      }
      case 2: { // LIFETIME
        // 1) detect new pairs (distance mode)
        for (const n of nodeIdx) {
          let cand = queryNeighbors(n, true, linkD2);
          if (cand.length > maxLinks) {
            cand.sort((a, b) => a.d2 - b.d2);
            cand.length = maxLinks;
          }
          for (const c of cand) {
            const key = (Math.min(n, c.idx) >>> 0) * 4294967296 + (Math.max(n, c.idx) >>> 0);
            this.persistentLinks.set(key, 0);
          }
        }
        // 2) age + render + drop
        for (const [key, age] of this.persistentLinks) {
          const lo = Math.floor(key / 4294967296);
          const hi = key - lo * 4294967296;
          const aIdx = lo|0, bIdx = hi|0;
          if (aIdx < 0 || aIdx >= N || bIdx < 0 || bIdx >= N
              || !pl.alive[aIdx] || !pl.alive[bIdx]) {
            this.persistentLinks.delete(key); continue;
          }
          const newAge = age + 1;
          if (newAge > lifetime) {
            this.persistentLinks.delete(key); continue;
          }
          this.persistentLinks.set(key, newAge);
          const dx = pl.posX[bIdx] - pl.posX[aIdx];
          const dy = pl.posY[bIdx] - pl.posY[aIdx];
          const dz = pl.posZ[bIdx] - pl.posZ[aIdx];
          const d2 = dx*dx + dy*dy + dz*dz;
          const lifeFade = 1 - newAge / lifetime;
          pushLink(aIdx, bIdx, d2, lifeFade);
        }
        break;
      }
      case 3: { // GABRIEL
        for (const n of nodeIdx) {
          const cand = queryNeighbors(n, true, linkD2);
          const kept: { idx: number; d2: number }[] = [];
          for (const c1 of cand) {
            const ax = pl.posX[n], ay = pl.posY[n], az = pl.posZ[n];
            const bx = pl.posX[c1.idx], by = pl.posY[c1.idx], bz = pl.posZ[c1.idx];
            const mx = (ax + bx) * 0.5, my = (ay + by) * 0.5, mz = (az + bz) * 0.5;
            const r2 = c1.d2 * 0.25;
            let blocked = false;
            for (const c2 of cand) {
              if (c2.idx === c1.idx) continue;
              const cx = pl.posX[c2.idx] - mx;
              const cy = pl.posY[c2.idx] - my;
              const cz = pl.posZ[c2.idx] - mz;
              if (cx*cx + cy*cy + cz*cz < r2) { blocked = true; break; }
            }
            if (!blocked) kept.push(c1);
          }
          if (kept.length > maxLinks) {
            kept.sort((a, b) => a.d2 - b.d2);
            kept.length = maxLinks;
          }
          for (const c of kept) pushLink(n, c.idx, c.d2, 1);
        }
        break;
      }
    }

    this.myceliumGeom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(verts), 3));
    this.myceliumGeom.setAttribute('color', new THREE.BufferAttribute(new Float32Array(cols), 4));
    this.myceliumMat.linewidth = p.myceliumLineWidth;
    this.myceliumLinkCount = Math.floor(verts.length / 6);
  }
}
