/**
 * synth-worklet.js — AudioWorkletProcessor
 * ──────────────────────────────────────────────
 * P0: outputs silence. Pipeline proof only.
 *
 * Runs in the AudioWorkletGlobalScope (separate thread from main JS).
 * Web Audio calls process() every 128 samples (~2.9ms @ 44.1kHz).
 *
 * P2+ will house the full DSP graph (drone / event FM / wind / granular /
 * click pulsar / hall reverb), mirroring the C++ Synth::audioOut per-sample
 * pipeline.
 *
 * Message protocol (main → worklet):
 *   { type: 'param', name: string, value: number }   — single param update
 *   { type: 'config', payload: { ... } }             — bulk config
 *   { type: 'trigger', name: string, data: any }     — discrete event
 */

class SynthProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.sampleRate = sampleRate;   // global in worklet scope
    this.port.onmessage = (e) => this._onMessage(e.data);
    // P0: nothing to initialise
  }

  _onMessage(msg) {
    // P0 stub
    // console.log('[worklet] msg', msg);
  }

  process(_inputs, outputs, _params) {
    const out = outputs[0];   // [L, R] Float32Arrays of length 128
    const L = out[0];
    const R = out[1];
    const n = L.length;

    // P0 silent output
    for (let i = 0; i < n; i++) {
      L[i] = 0;
      R[i] = 0;
    }

    return true;   // keep processor alive
  }
}

registerProcessor('synth-processor', SynthProcessor);
