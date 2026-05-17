/**
 * GUI — lil-gui panels mirroring the C++ ImGui control panel
 */
import GUI from 'lil-gui';
import { Flock3D } from '../visual/Flock3D';
import { SynthBridge } from '../audio/SynthBridge';
import { MorphologyConductor } from '../control/MorphologyConductor';
import { Synchresis } from '../control/Synchresis';
import { ScorePlayer } from '../control/ScorePlayer';
import { applySaved, clearSettings } from '../utils/persistence';

const SCALE_NAMES = {
  'penta min': 0, 'penta maj': 1, 'major': 2, 'minor nat': 3,
  'dorian': 4, 'mixolydian': 5, 'phrygian': 6, 'lydian': 7,
  'blues': 8, 'hirajoshi': 9, 'whole tone': 10, 'harmonic': 11,
};

const MODE_NAMES = {
  'FREE': 0, 'ASCENT': 1, 'DESCENT': 2, 'OSCILLATION': 3,
  'ASCENT_OSC': 4, 'DESCENT_OSC': 5,
};

const CURVE_NAMES = {
  'LINEAR': 0, 'EXPONENTIAL': 1, 'LOGARITHMIC': 2, 'SIGMOID': 3,
};

const LINK_MODE_NAMES = {
  'Distance': 0, 'KNN': 1, 'Lifetime': 2, 'Gabriel': 3,
};

export function buildGui(opts: {
  flock: Flock3D;
  synth: SynthBridge;
  audioConductor: MorphologyConductor;
  visualConductor: MorphologyConductor;
  synchresis: Synchresis;
  scorePlayer: ScorePlayer;
  savedSynthParams?: any;
}) {
  const { flock, synth, audioConductor, visualConductor, synchresis, scorePlayer } = opts;
  const gui = new GUI({ title: 'of-flock-3d (web)', width: 320 });
  gui.close();   // start collapsed

  // Reset button at top — clear localStorage + reload
  const sysFolder = gui.addFolder('System');
  sysFolder.add({
    reset: () => {
      if (confirm('Reset all settings to defaults?')) {
        clearSettings();
        location.reload();
      }
    }
  }, 'reset').name('Reset all settings');

  // ─── Morphology ───
  const fMorph = gui.addFolder('Morphology (Audio)');
  fMorph.add(audioConductor.p, 'mode', MODE_NAMES);
  fMorph.add(audioConductor.p, 'curveShape', CURVE_NAMES).name('curve');
  fMorph.add(audioConductor.p, 'phaseDuration', 1, 60).name('duration (s)');
  fMorph.add(audioConductor.p, 'oscRate', 0.05, 4).name('osc rate (Hz)');
  fMorph.add(audioConductor.p, 'oscDepth', 0, 0.5);
  fMorph.add(audioConductor.p, 'autoLoop');
  fMorph.add({ trigger: () => audioConductor.trigger() }, 'trigger').name('▶ trigger');

  const fMorphV = gui.addFolder('Morphology (Visual)');
  fMorphV.add(visualConductor.p, 'mode', MODE_NAMES);
  fMorphV.add(visualConductor.p, 'curveShape', CURVE_NAMES).name('curve');
  fMorphV.add(visualConductor.p, 'phaseDuration', 1, 60).name('duration (s)');
  fMorphV.add(visualConductor.p, 'oscRate', 0.05, 4).name('osc rate (Hz)');
  fMorphV.add(visualConductor.p, 'oscDepth', 0, 0.5);
  fMorphV.add(visualConductor.p, 'autoLoop');

  // ─── Synchresis ───
  const fSync = gui.addFolder('Synchresis');
  fSync.add(synchresis.p, 'enabled');
  fSync.add(synchresis.p, 'syncPeriod', 3, 120).name('period (s)');
  fSync.add(synchresis.p, 'syncDuration', 0.5, 30).name('pulse (s)');
  fSync.add(synchresis.p, 'syncPower', 0, 1.5);
  fSync.add(synchresis.p, 'driftTolerance', 0, 0.5).name('tolerance');
  fSync.add(synchresis.p, 'counterpointEnabled').name('counterpoint');
  fSync.add(synchresis.p, 'convergenceAmount', 0, 1).name('convergence');
  fSync.add({ trigger: () => synchresis.triggerCadence() }, 'trigger').name('Trigger cadence');

  // ─── Score ───
  const fScore = gui.addFolder('Score');
  const scoreState = { name: 'Figure 2 Arc (30s)' };
  const scoreOptions: Record<string, string> = {};
  scorePlayer.scores().forEach(s => scoreOptions[s.name] = s.name);
  fScore.add(scoreState, 'name', scoreOptions).name('score');
  fScore.add({ play: () => {
    const idx = scorePlayer.scores().findIndex(s => s.name === scoreState.name);
    if (idx >= 0) scorePlayer.play(idx, audioConductor);
  }}, 'play').name('▶ Play Score');
  fScore.add({ stop: () => scorePlayer.stop() }, 'stop').name('■ Stop');

  // ─── Visual / Flock ───
  const fFlock = gui.addFolder('Flock');
  fFlock.add(flock.p, 'particleCount', 1000, 40000, 1000)
    .name('particles').onFinishChange(() => flock.resizeIfNeeded());
  fFlock.add(flock.p, 'worldRadius', 50, 600);
  fFlock.add(flock.p, 'particleAlpha', 0.05, 1);
  fFlock.add(flock.p, 'hueBase', 0, 1);
  fFlock.add(flock.p, 'hueRange', 0, 1);

  const fFields = gui.addFolder('Force Fields');
  fFields.add(flock.p, 'noiseAmplitude', 0, 200).name('noise amp');
  fFields.add(flock.p, 'noiseScale', 0.0001, 0.05);
  fFields.add(flock.p, 'noiseSpeed', 0, 0.5);
  fFields.add(flock.p, 'vortexAmp', 0, 200);
  fFields.add(flock.p, 'spiralAmp', 0, 200);
  fFields.add(flock.p, 'curlAmp', 0, 200);
  fFields.add(flock.p, 'attractorAmp', 0, 200);
  fFields.add(flock.p, 'repellerAmp', 0, 200);

  const fBoid = gui.addFolder('Boid / Merge');
  fBoid.add(flock.p, 'flockSeparation', 0, 5);
  fBoid.add(flock.p, 'flockCohesion', 0, 20);
  fBoid.add(flock.p, 'flockCohesionSpeed', 0, 0.5);
  fBoid.add(flock.p, 'flockNeighborRadius', 10, 400);
  fBoid.add(flock.p, 'mergeDistance', 1, 40);
  fBoid.add(flock.p, 'flockSpawnRate', 0, 1000);
  fBoid.add(flock.p, 'flockMinAlive', 0, 1);
  fBoid.add(flock.p, 'flockDamping', 0.5, 1);
  fBoid.add(flock.p, 'particleSizeMin', 1, 20);
  fBoid.add(flock.p, 'particleSizeMax', 2, 60);

  const fFlash = gui.addFolder('Flash / Accent');
  fFlash.add(flock.p, 'flashFrames', 0, 60, 1);
  fFlash.add(flock.p, 'flashIntensity', 0, 2);
  fFlash.add(flock.p, 'accentChance', 0, 1);
  fFlash.add(flock.p, 'accentSizeMul', 1, 5);

  const fCluster = gui.addFolder('Cluster Detection');
  fCluster.add(flock.p, 'clusterGridRes', 3, 10, 1);
  fCluster.add(flock.p, 'clusterMinFlash', 1, 100, 1);

  const fTrail = gui.addFolder('Trail');
  fTrail.add(flock.p, 'tailLength', 0, 24, 1);
  fTrail.add(flock.p, 'tailAudioSensitivity', 0, 2);
  fTrail.add(flock.p, 'tailAlpha', 0, 1);

  const fMat = gui.addFolder('Material');
  fMat.add(flock.p, 'matBrightness', 0, 1);
  fMat.add(flock.p, 'matSpecular', 0, 1);
  fMat.add(flock.p, 'matAmbient', 0, 0.5);
  fMat.add(flock.p, 'matGlow', 0, 1.5);

  fFlock.add(flock.p, 'conductorAmount', 0, 1).name('conductor amount');

  const fMyc = gui.addFolder('Mycelium');
  fMyc.add(flock.p, 'myceliumEnabled').name('enabled');
  fMyc.add(flock.p, 'myceliumLinkMode', LINK_MODE_NAMES).name('link mode');
  fMyc.add(flock.p, 'myceliumLinkDist', 5, 300).name('link dist');
  fMyc.add(flock.p, 'myceliumMaxLinks', 1, 16, 1).name('max links');
  fMyc.add(flock.p, 'myceliumKnnK', 1, 16, 1).name('KNN K');
  fMyc.add(flock.p, 'myceliumLifetime', 5, 600, 1).name('lifetime');
  fMyc.add(flock.p, 'myceliumNodeStride', 1, 50, 1).name('node stride');
  fMyc.add(flock.p, 'myceliumAlpha', 0, 1);
  fMyc.add(flock.p, 'myceliumFadeNear', 0, 1).name('far fade');
  fMyc.add(flock.p, 'myceliumLineWidth', 0.5, 4);

  // ─── Synth ───
  const synthParams = {
    audioEnabled: true, masterVol: 0.5,
    eventVol: 0.6, eventDecayMs: 50, eventAttackMs: 2, eventGainPerHit: 0.5,
    minMassToFire: 0.0, eventQuantize: true,
    reverbAmt: 0.55, reverbSize: 0.85, reverbDamp: 0.5, reverbPreDelayMs: 20,
    rootFreq: 110, scaleType: 0, droneGlideMs: 600, audioEnergyGain: 1,
    fmRatio: 2, fmIndex: 3, fmIndexDecayMs: 40, tailToIdxDecayDepth: 0.5, eventFoldAmount: 0,
    clusterDroneVol: 0.5, clusterAttackMs: 800, clusterReleaseMs: 1500,
    clusterDetune: 0.008, clusterProximity: 80,
    clusterCutoff: 600, clusterResonance: 0.3, clusterDroneFold: 0,
    windVol: 0.4, windCutoff: 800, windResonance: 0.2, windAmpToCutoff: 1,
    windLfoRate: 0.4, windLfoDepth: 0.4,
    granVol: 0.3, grainSizeMs: 35, grainBaseRate: 8, granClusterInfluence: 6,
    grainPitchOffset: 0, grainPitchSpread: 5, grainPanSpread: 0.6, grainAttackFrac: 0.08,
    conductorAmount: 0,
    clickEnabled: true, clickVol: 1, clickBaseRate: 8, clickDensityBoost: 60,
    clickConductorAmount: 0, clickLengthMs: 3, clickFormantHz: 4000,
  };

  // Apply saved synth params (overwrites defaults for keys present in saved)
  if (opts.savedSynthParams) applySaved(synthParams, opts.savedSynthParams);

  function pushAll() { synth.setParams(synthParams); }
  pushAll();   // initial flush after worklet ready

  const fMaster = gui.addFolder('Synth · Master');
  fMaster.add(synthParams, 'audioEnabled').onChange(v => synth.setParam('audioEnabled', v));
  fMaster.add(synthParams, 'masterVol', 0, 1).onChange(v => synth.setParam('masterVol', v));
  fMaster.add(synthParams, 'rootFreq', 55, 440).name('rootFreq (Hz)').onChange(v => synth.setParam('rootFreq', v));
  fMaster.add(synthParams, 'scaleType', SCALE_NAMES).name('scale').onChange(v => synth.setParam('scaleType', v));
  fMaster.add(synthParams, 'droneGlideMs', 5, 4000).name('drone glide (ms)').onChange(v => synth.setParam('droneGlideMs', v));

  const fEvent = gui.addFolder('Synth · Event');
  fEvent.add(synthParams, 'eventVol', 0, 1).onChange(v => synth.setParam('eventVol', v));
  fEvent.add(synthParams, 'eventDecayMs', 5, 500).name('decay (ms)').onChange(v => synth.setParam('eventDecayMs', v));
  fEvent.add(synthParams, 'eventAttackMs', 0.1, 50).name('attack (ms)').onChange(v => synth.setParam('eventAttackMs', v));
  fEvent.add(synthParams, 'eventGainPerHit', 0.05, 1.5).name('hit gain').onChange(v => synth.setParam('eventGainPerHit', v));
  fEvent.add(synthParams, 'minMassToFire', 0, 50).onChange(v => synth.setParam('minMassToFire', v));
  fEvent.add(synthParams, 'eventQuantize').onChange(v => synth.setParam('eventQuantize', v));

  const fFM = gui.addFolder('Synth · FM');
  fFM.add(synthParams, 'fmRatio', 0.5, 8).onChange(v => synth.setParam('fmRatio', v));
  fFM.add(synthParams, 'fmIndex', 0, 12).onChange(v => synth.setParam('fmIndex', v));
  fFM.add(synthParams, 'fmIndexDecayMs', 1, 500).name('FM idxDecay (ms)').onChange(v => synth.setParam('fmIndexDecayMs', v));
  fFM.add(synthParams, 'tailToIdxDecayDepth', 0, 1).onChange(v => synth.setParam('tailToIdxDecayDepth', v));
  fFM.add(synthParams, 'eventFoldAmount', 0, 1).name('event fold').onChange(v => synth.setParam('eventFoldAmount', v));

  const fCD = gui.addFolder('Synth · Cluster Drone');
  fCD.add(synthParams, 'clusterDroneVol', 0, 1).name('vol').onChange(v => synth.setParam('clusterDroneVol', v));
  fCD.add(synthParams, 'clusterAttackMs', 50, 4000).name('attack (ms)').onChange(v => synth.setParam('clusterAttackMs', v));
  fCD.add(synthParams, 'clusterReleaseMs', 50, 6000).name('release (ms)').onChange(v => synth.setParam('clusterReleaseMs', v));
  fCD.add(synthParams, 'clusterDetune', 0, 0.03).onChange(v => synth.setParam('clusterDetune', v));
  fCD.add(synthParams, 'clusterProximity', 10, 400).onChange(v => synth.setParam('clusterProximity', v));
  fCD.add(synthParams, 'clusterCutoff', 80, 8000).onChange(v => synth.setParam('clusterCutoff', v));
  fCD.add(synthParams, 'clusterResonance', 0, 0.95).onChange(v => synth.setParam('clusterResonance', v));
  fCD.add(synthParams, 'clusterDroneFold', 0, 1).name('fold').onChange(v => synth.setParam('clusterDroneFold', v));

  const fWind = gui.addFolder('Synth · Wind');
  fWind.add(synthParams, 'windVol', 0, 1).name('vol').onChange(v => synth.setParam('windVol', v));
  fWind.add(synthParams, 'windCutoff', 100, 8000).name('cutoff (Hz)').onChange(v => synth.setParam('windCutoff', v));
  fWind.add(synthParams, 'windResonance', 0, 0.9).onChange(v => synth.setParam('windResonance', v));
  fWind.add(synthParams, 'windAmpToCutoff', 0, 3).name('amp→cutoff').onChange(v => synth.setParam('windAmpToCutoff', v));
  fWind.add(synthParams, 'windLfoRate', 0.05, 4).name('gust rate').onChange(v => synth.setParam('windLfoRate', v));
  fWind.add(synthParams, 'windLfoDepth', 0, 1).name('gust depth').onChange(v => synth.setParam('windLfoDepth', v));

  const fGran = gui.addFolder('Synth · Granular');
  fGran.add(synthParams, 'granVol', 0, 1).name('vol').onChange(v => synth.setParam('granVol', v));
  fGran.add(synthParams, 'grainSizeMs', 10, 300).name('size (ms)').onChange(v => synth.setParam('grainSizeMs', v));
  fGran.add(synthParams, 'grainBaseRate', 0.5, 200).name('base rate (Hz)').onChange(v => synth.setParam('grainBaseRate', v));
  fGran.add(synthParams, 'granClusterInfluence', 0, 20).name('cluster infl.').onChange(v => synth.setParam('granClusterInfluence', v));
  fGran.add(synthParams, 'grainPitchOffset', -24, 24).name('pitch offset').onChange(v => synth.setParam('grainPitchOffset', v));
  fGran.add(synthParams, 'grainPitchSpread', 0, 24).name('pitch spread').onChange(v => synth.setParam('grainPitchSpread', v));
  fGran.add(synthParams, 'grainPanSpread', 0, 1).name('pan spread').onChange(v => synth.setParam('grainPanSpread', v));
  fGran.add(synthParams, 'grainAttackFrac', 0.02, 0.5).name('attack frac').onChange(v => synth.setParam('grainAttackFrac', v));

  const fReverb = gui.addFolder('Synth · Hall Reverb');
  fReverb.add(synthParams, 'reverbAmt', 0, 1).onChange(v => synth.setParam('reverbAmt', v));
  fReverb.add(synthParams, 'reverbSize', 0, 0.97).onChange(v => synth.setParam('reverbSize', v));
  fReverb.add(synthParams, 'reverbDamp', 0, 0.99).onChange(v => synth.setParam('reverbDamp', v));
  fReverb.add(synthParams, 'reverbPreDelayMs', 0, 200).name('pre-delay (ms)').onChange(v => synth.setParam('reverbPreDelayMs', v));

  const fClick = gui.addFolder('Synth · Click (Pulsar)');
  fClick.add(synthParams, 'clickEnabled').name('enabled').onChange(v => synth.setParam('clickEnabled', v));
  fClick.add(synthParams, 'clickVol', 0, 3).name('vol').onChange(v => synth.setParam('clickVol', v));
  fClick.add(synthParams, 'clickBaseRate', 0, 200).name('base rate (Hz)').onChange(v => synth.setParam('clickBaseRate', v));
  fClick.add(synthParams, 'clickDensityBoost', 0, 400).name('density boost').onChange(v => synth.setParam('clickDensityBoost', v));
  fClick.add(synthParams, 'clickConductorAmount', 0, 1).name('conductor').onChange(v => synth.setParam('clickConductorAmount', v));
  fClick.add(synthParams, 'clickLengthMs', 1, 30).name('pulsaret (ms)').onChange(v => synth.setParam('clickLengthMs', v));
  fClick.add(synthParams, 'clickFormantHz', 200, 9000).name('formant (Hz)').onChange(v => synth.setParam('clickFormantHz', v));

  const fAux = gui.addFolder('Synth · Aux');
  fAux.add(synthParams, 'conductorAmount', 0, 1).name('conductor amount').onChange(v => synth.setParam('conductorAmount', v));
  fAux.add(synthParams, 'audioEnergyGain', 0.1, 5).name('audio energy gain').onChange(v => synth.setParam('audioEnergyGain', v));

  return { gui, synthParams };
}
