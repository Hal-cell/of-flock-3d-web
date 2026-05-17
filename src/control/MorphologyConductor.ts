/**
 * MorphologyConductor — direct port of C++ MorphologyConductor
 * 5 modes (Smalley 1997 motion typology) × 4 curve shapes
 */

import { clamp, smoothstep, TWO_PI } from '../utils/math';

export enum CondMode {
  FREE = 0, ASCENT, DESCENT, OSCILLATION, ASCENT_OSC, DESCENT_OSC,
}
export enum CondCurve { LINEAR = 0, EXPONENTIAL, LOGARITHMIC, SIGMOID }

export interface ConductorParams {
  mode: number;
  curveShape: number;
  phaseDuration: number;
  oscRate: number;
  oscDepth: number;
  autoLoop: boolean;
}

export const DEFAULT_CONDUCTOR_PARAMS: ConductorParams = {
  mode: 0, curveShape: 3,
  phaseDuration: 8, oscRate: 0.5, oscDepth: 0.25,
  autoLoop: false,
};

const BRIDGE_DECAY = 0.92;

export class MorphologyConductor {
  p: ConductorParams = { ...DEFAULT_CONDUCTOR_PARAMS };
  private elapsed = 0;
  private value_ = 0.5;
  private phase_ = 0;
  private oscAccumPhase = 0;
  private lastMode = -1;
  private lastCurve = -1;
  private bridgeOffset = 0;

  history: number[] = new Array(240).fill(0.5);
  historyIdx = 0;

  applyCurve(t: number): number {
    switch (this.p.curveShape) {
      case CondCurve.LINEAR: return t;
      case CondCurve.EXPONENTIAL: return t * t;
      case CondCurve.LOGARITHMIC: return Math.sqrt(t);
      case CondCurve.SIGMOID: return smoothstep(0, 1, t);
    }
    return t;
  }

  computeRawValue(): number {
    const m = this.p.mode | 0;
    const phase = clamp(this.elapsed / Math.max(0.001, this.p.phaseDuration), 0, 1);
    this.phase_ = phase;
    const curved = this.applyCurve(phase);
    let raw = 0.5;
    switch (m) {
      case CondMode.FREE: raw = 0.5; break;
      case CondMode.ASCENT: raw = curved; break;
      case CondMode.DESCENT: raw = 1 - curved; break;
      case CondMode.OSCILLATION:
        raw = 0.5 + Math.sin(this.oscAccumPhase) * this.p.oscDepth;
        break;
      case CondMode.ASCENT_OSC:
        raw = curved + Math.sin(this.oscAccumPhase) * this.p.oscDepth;
        break;
      case CondMode.DESCENT_OSC:
        raw = (1 - curved) + Math.sin(this.oscAccumPhase) * this.p.oscDepth;
        break;
    }
    return clamp(raw, 0, 1);
  }

  trigger() { this.elapsed = 0; this.bridgeOffset = 0; this.oscAccumPhase = 0; }
  softRestart() { this.elapsed = 0; }

  update(dt: number) {
    if (this.lastMode !== this.p.mode || this.lastCurve !== this.p.curveShape) {
      if (this.lastMode >= 0) {
        const newRaw = this.computeRawValue();
        this.bridgeOffset = this.value_ - newRaw;
      }
      this.lastMode = this.p.mode;
      this.lastCurve = this.p.curveShape;
    }
    this.elapsed += dt;
    if (this.p.autoLoop && this.elapsed >= this.p.phaseDuration) {
      this.elapsed = 0;
    }
    this.oscAccumPhase += TWO_PI * this.p.oscRate * dt;
    if (this.oscAccumPhase > TWO_PI * 1000) this.oscAccumPhase -= TWO_PI * 1000;

    const raw = this.computeRawValue();
    this.value_ = clamp(raw + this.bridgeOffset, 0, 1);
    this.bridgeOffset *= BRIDGE_DECAY;

    this.history[this.historyIdx] = this.value_;
    this.historyIdx = (this.historyIdx + 1) % this.history.length;
  }

  value(): number { return this.value_; }
  phaseProgress(): number { return this.phase_; }
  getModeName(): string {
    const names = ['FREE', 'ASCENT', 'DESCENT', 'OSCILLATION', 'ASCENT_OSC', 'DESCENT_OSC'];
    return names[this.p.mode | 0] || '?';
  }
}
