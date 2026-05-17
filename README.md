# of-flock-3d (web port)

Web port of [of-flock-3d](https://github.com/Hal-cell/of-flock-3d) — 3D particle flock + real-time spectromorphological synthesis. Faithful JS/TS rewrite of the openFrameworks C++ original.

## Stack
- **Vite + TypeScript** — build
- **Three.js** — WebGL2 rendering (custom shaders to match C++ GLSL)
- **Web Audio API + AudioWorklet** — per-sample DSP, mirrors `Synth::audioOut`
- **lil-gui** — control panel (P8)
- **IndexedDB** — settings persistence (P8)

## Phasing
| Phase | Status | Content |
|---|---|---|
| **P0** | ▸ in progress | Skeleton: Vite + Three.js scene + silent AudioWorklet |
| P1 | — | Flock: 20K boid + 6 force fields |
| P2 | — | Cluster drone + event FM |
| P3 | — | Trail / flash / accent / cluster detection — first deployable demo |
| P4 | — | Mycelium 4 modes + FBO bloom |
| P5 | — | Wind / granular (WAV drop) / hall reverb |
| P6 | — | Click pulsar + mycelium density coupling |
| P7 | — | Morphology Conductor (dual) + Synchresis counterpoint |
| P8 | — | Score player + GUI + persistence + visual polish |
| P9 | — | Perf / bugfix / bundle ChurchBells sample |

## Development
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static bundle into dist/
npm run preview  # preview prod build
```

## Structure
```
src/
├── main.ts             # entry: Three.js scene + audio bootstrap
├── visual/             # Flock3D port + shaders + mycelium (P1+)
├── audio/              # AudioWorklet messaging + Synth modules (P2+)
├── control/            # MorphologyConductor / Synchresis / Score (P7+)
├── utils/              # math, RNG (xorshift32), EnergyStage (P1+)
└── ui/                 # lil-gui panels (P8+)
public/
└── synth-worklet.js    # AudioWorkletProcessor (plain JS — bundled separately later)
```

## C++ reference
Tag tracking: web port aims to match feature set of `rp-50-size-smooth`
(C++ commit `5dcefa8`). Module / param names mirror C++ wherever possible.
