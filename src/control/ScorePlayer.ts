/**
 * ScorePlayer — minimal scripted timeline of conductor events
 * Simplified from C++ ScorePlayer; demo scores hardcoded.
 */
import { MorphologyConductor, CondMode, CondCurve } from './MorphologyConductor';

interface ScoreEvent {
  atSec: number;
  mode: number;
  curve: number;
  phaseDuration: number;
  oscRate?: number;
  oscDepth?: number;
}

interface Score {
  name: string;
  totalDuration: number;
  events: ScoreEvent[];
}

const DEMO_SCORES: Score[] = [
  {
    name: 'Figure 2 Arc (30s)',
    totalDuration: 30,
    events: [
      { atSec: 0,  mode: CondMode.ASCENT,  curve: CondCurve.SIGMOID,     phaseDuration: 10 },
      { atSec: 10, mode: CondMode.ASCENT_OSC, curve: CondCurve.LINEAR,   phaseDuration: 10, oscRate: 1.5, oscDepth: 0.25 },
      { atSec: 20, mode: CondMode.DESCENT, curve: CondCurve.EXPONENTIAL, phaseDuration: 10 },
    ],
  },
  {
    name: 'Storm Cycle (25s)',
    totalDuration: 25,
    events: [
      { atSec: 0,  mode: CondMode.OSCILLATION, curve: CondCurve.LINEAR, phaseDuration: 5, oscRate: 0.5, oscDepth: 0.4 },
      { atSec: 8,  mode: CondMode.ASCENT,      curve: CondCurve.EXPONENTIAL, phaseDuration: 7 },
      { atSec: 15, mode: CondMode.DESCENT_OSC, curve: CondCurve.SIGMOID, phaseDuration: 10, oscRate: 2, oscDepth: 0.3 },
    ],
  },
  {
    name: 'Quiet Breath (45s)',
    totalDuration: 45,
    events: [
      { atSec: 0,  mode: CondMode.OSCILLATION, curve: CondCurve.LINEAR, phaseDuration: 15, oscRate: 0.15, oscDepth: 0.15 },
      { atSec: 15, mode: CondMode.ASCENT,      curve: CondCurve.LOGARITHMIC, phaseDuration: 15 },
      { atSec: 30, mode: CondMode.DESCENT,     curve: CondCurve.LOGARITHMIC, phaseDuration: 15 },
    ],
  },
];

export class ScorePlayer {
  private playing = false;
  private elapsed_ = 0;
  private scoreIdx = 0;
  private nextEvent = 0;

  scores(): readonly Score[] { return DEMO_SCORES; }
  isPlaying() { return this.playing; }
  elapsed() { return this.elapsed_; }
  currentScoreName() {
    return this.playing ? DEMO_SCORES[this.scoreIdx].name : '';
  }

  play(idx: number, conductor: MorphologyConductor) {
    if (idx < 0 || idx >= DEMO_SCORES.length) return;
    this.scoreIdx = idx;
    this.elapsed_ = 0;
    this.nextEvent = 0;
    this.playing = true;
    this._applyEvent(DEMO_SCORES[idx].events[0], conductor);
    conductor.trigger();
  }

  stop() { this.playing = false; }

  update(dt: number, conductor: MorphologyConductor) {
    if (!this.playing) return;
    this.elapsed_ += dt;
    const s = DEMO_SCORES[this.scoreIdx];
    while (this.nextEvent + 1 < s.events.length
           && this.elapsed_ >= s.events[this.nextEvent + 1].atSec) {
      this.nextEvent++;
      this._applyEvent(s.events[this.nextEvent], conductor);
      conductor.softRestart();
    }
    if (this.elapsed_ >= s.totalDuration) this.stop();
  }

  private _applyEvent(e: ScoreEvent, c: MorphologyConductor) {
    c.p.mode = e.mode;
    c.p.curveShape = e.curve;
    c.p.phaseDuration = e.phaseDuration;
    if (e.oscRate !== undefined) c.p.oscRate = e.oscRate;
    if (e.oscDepth !== undefined) c.p.oscDepth = e.oscDepth;
  }
}
