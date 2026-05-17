/**
 * EnergyStage — 跟 C++ EnergyStage.h 行为一致
 * 把 [0..1] energy 通过 stage (lo, hi) + curve 转成 [0..1] 输出
 */
import { clamp, smoothstep } from './math';

export type CurveType = 0 | 1 | 2 | 3;
// 0 = linear, 1 = exp (t²), 2 = log (sqrt), 3 = sigmoid (smoothstep)

export class EnergyStage {
  constructor(
    public lo: number,
    public hi: number,
    public curve: CurveType
  ) {}

  /** Raw 0..1 transition based on lo/hi window */
  stageOf(energy: number): number {
    const span = this.hi - this.lo;
    if (span < 1e-6) return energy < this.lo ? 0 : 1;
    const t = clamp((energy - this.lo) / span, 0, 1);
    switch (this.curve) {
      case 0: return t;
      case 1: return t * t;
      case 2: return Math.sqrt(t);
      case 3: return smoothstep(0, 1, t);
    }
  }

  /** Blend baseline value (when energy<lo or ca=0) → userValue (when energy>=hi) */
  blend(energy: number, userValue: number, conductorAmount: number): number {
    const stage = this.stageOf(energy);
    return userValue * (1 - conductorAmount * (1 - stage));
  }

  /** Blend between two given ranges */
  blendRange(
    energy: number,
    minValue: number,
    maxValue: number,
    conductorAmount: number
  ): number {
    const stage = this.stageOf(energy);
    const eff = minValue + (maxValue - minValue) * stage;
    return maxValue * (1 - conductorAmount) + eff * conductorAmount;
  }
}
