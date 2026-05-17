/**
 * Synchresis — Battey Fluid AV Counterpoint
 * - syncStrength: Gaussian cadence pulse rises and falls
 * - per-side nudges + counterpoint convergence force
 */

export interface SynchresisParams {
  enabled: boolean;
  syncPeriod: number;     // s
  syncDuration: number;   // s
  syncPower: number;
  driftTolerance: number;
  counterpointEnabled: boolean;
  convergenceAmount: number;
}

// Defaults from C++ synchresis_settings.xml
export const DEFAULT_SYNCHRESIS_PARAMS: SynchresisParams = {
  enabled: true,
  syncPeriod: 8.6, syncDuration: 3.1,
  syncPower: 1.315, driftTolerance: 0.163,
  counterpointEnabled: false, convergenceAmount: 0.85,
};

export class Synchresis {
  p: SynchresisParams = { ...DEFAULT_SYNCHRESIS_PARAMS };
  private cadenceTimer = 0;
  private syncStrength_ = 0;
  private audioNudge_ = 0;
  private visualNudge_ = 0;

  HIST_SIZE = 600;
  targetHist = new Array(this.HIST_SIZE).fill(0.5);
  audioHist = new Array(this.HIST_SIZE).fill(0);
  visualHist = new Array(this.HIST_SIZE).fill(0);
  syncHist = new Array(this.HIST_SIZE).fill(0);
  histIdx = 0;

  computePulse(pos: number): number {
    const dur = this.p.syncDuration;
    const period = Math.max(0.001, this.p.syncPeriod);
    let sigma = (dur / period) * 0.4;
    if (sigma < 0.001) sigma = 0.001;
    const dx = pos - 0.5;
    return Math.exp(-(dx * dx) / (2 * sigma * sigma));
  }

  triggerCadence() {
    this.cadenceTimer = this.p.syncPeriod * 0.5;
  }

  update(dt: number, target: number, audioE: number, visualE: number) {
    this.targetHist[this.histIdx] = target;
    this.audioHist[this.histIdx] = audioE;
    this.visualHist[this.histIdx] = visualE;
    if (!this.p.enabled) {
      this.syncStrength_ = 0; this.audioNudge_ = 0; this.visualNudge_ = 0;
      this.syncHist[this.histIdx] = 0;
      this.histIdx = (this.histIdx + 1) % this.HIST_SIZE;
      return;
    }
    const period = Math.max(0.001, this.p.syncPeriod);
    this.cadenceTimer += dt;
    while (this.cadenceTimer >= period) this.cadenceTimer -= period;
    const pulsePos = this.cadenceTimer / period;
    this.syncStrength_ = this.computePulse(pulsePos);

    let audioErr = target - audioE;
    let visualErr = target - visualE;
    const tol = this.p.driftTolerance;
    if (Math.abs(audioErr) < tol) audioErr = 0;
    if (Math.abs(visualErr) < tol) visualErr = 0;
    const gain = this.syncStrength_ * this.p.syncPower;
    this.audioNudge_ = gain * audioErr;
    this.visualNudge_ = gain * visualErr;

    this.syncHist[this.histIdx] = this.syncStrength_;
    this.histIdx = (this.histIdx + 1) % this.HIST_SIZE;
  }

  syncStrength(): number { return this.syncStrength_; }
  audioCorrection(): number { return this.audioNudge_; }
  visualCorrection(): number { return this.visualNudge_; }
  convergenceForce(): number {
    return this.p.counterpointEnabled ? this.syncStrength_ * this.p.convergenceAmount : 0;
  }
}
