import{g as ke,d as Ce,U as ne,a as Ee,z as De,c as ze,k as $e,Y as M,T as Oe,P as Re,y as Ie,$ as Ve,s as Ge,J as ee,w as je}from"./Receiver-DUwEmq82.js";const O=-34,R=86,Ue=.53,qe=4,Ae=92,Le=2,Pe=12,Z=60,He=2,Be=40,Te=12,ae=2e6,We=.6,Xe=.6,Je=.15,Ke=18,Ye=70,fe=1.578650308455,Ze=1.173583389702,Qe=4.8,et=.28;function tt(t,e,i){const o=Math.max(0,Math.min(1,(i-t)/(e-t)));return o*o*(3-2*o)}function it(t){return Number.isFinite(t)?Math.max(He,Math.min(Be,t)):Te}function ot(t){const e=Number.isFinite(t)?Math.abs(t):0;return 1+1.2*tt(.25,.9,e)}function st(t){return Number.isFinite(t)?Math.max(Ke,Math.min(Ye,t)):null}const q=128,ue=2.2,nt=["#b8caff","#df99f5","#82e4db","#f5b69b"],at=t=>Math.max(0,Math.min(1,t)),I=t=>t-Math.floor(t),me=t=>{const e=at(t);return e*e*(3-2*e)};function pe(t,e){const i=(g,v)=>{let p=I(g*.1031),m=I(v*.1031),h=p;const y=p*(m+33.33)+m*(h+33.33)+h*(p+33.33);return p+=y,m+=y,h+=y,I((p+m)*h)},o=Math.floor(t),s=Math.floor(e),r=me(I(t)),n=me(I(e)),l=i(o,s),c=i(o+1,s),d=i(o,s+1),f=i(o+1,s+1);return 2*(l+(c-l)*r+(d+(f-d)*r-l-(c-l)*r)*n)-1}function C(t,e,i){const o=Number(t[e]?.value);return Number.isFinite(o)?o:i}function ce(t,e,i){const o=C(i,"uTime",0),s=C(i,"uCurrent",.35),r=C(i,"uCurrentFrequency",1),n=C(i,"uNoiseFrequency",1),l=C(i,"uSwell",.55),c=C(i,"uDetail",.45),d=s>0?Math.sin((t*.11+e*.17)*r-o*.055)*Math.cos((e*.09-t*.055)*r+o*.037):0,f=l>0?pe(t*.055*n+o*.007,e*.05*n-o*.01):0,g=c>0?pe(t*.29*n-o*.013,e*.29*n+o*.02):0,v=(e*.69+t*.1)*r+.65*Math.sin(t*.13+e*.095+o*.018)+.35*Math.sin(t*.21-e*.12)+.6*l*f+.2*c*g+.25*s*d-o*.045;return-1.7+Math.sin(v)*.7+Math.sin(t*.24-e*.14+o*.025)*.26-1.25*Math.exp(-((t/9)**2))+t*.025+2.2*l*f+.75*c*g+.35*s*d}function _e(t){return Array.isArray(t)&&t.length>=3&&t.length<=256&&t.every(e=>Array.isArray(e)&&e.length===2&&e.every(i=>typeof i=="number"&&Number.isFinite(i)&&i>=0&&i<=1))}function ve(t,e,i){let o=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){const[n,l]=i[s],[c,d]=i[r];l>e!=d>e&&t<(c-n)*(e-l)/(d-l)+n&&(o=!o)}return o}function rt(t,e,i,o){t.updateMatrixWorld(!0);const s=o.map(h=>h[0]),r=o.map(h=>h[1]),n=Math.min(...s),l=Math.max(...s),c=Math.min(...r),d=Math.max(...r);if(l-n<.002||d-c<.002)return null;const f=new M,g=new M,v=new M,p=new M,m=[];for(let h=0;h<192;h++){const y=n+(l-n)*i(),S=c+(d-c)*i();if(!ve(y,S,o))continue;f.set(2*y-1,1-2*S,-1).unproject(t),g.set(2*y-1,1-2*S,1).unproject(t);const E=g.x-f.x,D=g.y-f.y,F=g.z-f.z;if(Math.abs(D)<1e-6)continue;let w=(-1.7-f.y)/D,x=0,b=0,N=0;for(let _=0;_<4&&!(!Number.isFinite(w)||w<=0||w>=1);_++)x=f.x+E*w,b=f.z+F*w,N=ce(x,-b,e),w=(N-f.y)/D;if(!Number.isFinite(w)||w<=0||w>=1||Math.abs(x)>Z-4||-b<O+4||-b>R-4)continue;v.set(x,N,b).project(t),p.set(x,N+ue,b).project(t);const z=(v.x+1)/2,j=(1-v.y)/2;!Number.isFinite(z)||!Number.isFinite(j)||v.z<-1||v.z>1||!ve(z,j,o)||Math.abs(p.x)>.98||Math.abs(p.y)>.98||p.z<-1||p.z>1||m.push(new M(x,N,b))}return m.length?(m.sort((h,y)=>h.z-y.z),m[Math.min(m.length-1,Math.floor(i()*Math.max(1,Math.ceil(m.length*.5))))]):null}function lt(t,e,i=Math.random,o,s,r){if(r&&_e(r))return rt(t,e,i,r);t.updateMatrixWorld(!0);const n=new M,l=new M,c=new M,d=new M,f=[],g=Number.isInteger(o)&&Number.isInteger(s)&&s>=1&&s<=4&&o>=1&&o<=s,v=g?-.84+(o-1)*1.68/s:-.675,p=g?-.84+o*1.68/s:.675;for(let y=0;y<128;y++){const S=v+(p-v)*(.04+.92*i()),E=-.55+i()*.9;n.set(S,E,-1).unproject(t),l.set(S,E,1).unproject(t);const D=l.y-n.y;if(Math.abs(D)<1e-6)continue;const F=(-1.7-n.y)/D;if(F<=0||F>=1)continue;const w=n.x+(l.x-n.x)*F,x=n.z+(l.z-n.z)*F,b=-x;if(Math.abs(w)>Z-4||b<O+4||b>R-4)continue;const N=ce(w,b,e);c.set(w,N,x).project(t),d.set(w,N+ue,x).project(t);const z=g?.9:.55;!Number.isFinite(c.x)||Math.abs(c.x)>z||Math.abs(c.y)>.55||c.z<-1||c.z>1||!Number.isFinite(d.x)||Math.abs(d.x)>z||Math.abs(d.y)>.55||d.z<-1||d.z>1||g&&(c.x<v||c.x>p||d.x<v||d.x>p)||f.push(new M(w,N,x))}if(f.length){f.sort((S,E)=>S.z-E.z);const y=Math.max(1,Math.ceil(f.length*.1));return f[Math.min(y-1,Math.floor(i()*y))]}const m=t.getWorldPosition(new M),h=new M(g?v+(p-v)*(.15+.7*i()):(i()-.5)*.25,(i()-.5)*.25,.5).unproject(t).sub(m).normalize();return m.addScaledVector(h,16)}const ut=`
uniform float uNoteTime,uPixelRatio,uFocus,uDof,uNotePointLimit;
uniform vec3 uNoteColor0,uNoteColor1,uNoteColor2,uNoteColor3;
attribute float aBirth,aDuration,aPeak,aSlot;
varying vec3 vNoteColor;
varying float vNoteAlpha,vNoteBlur;
void main(){
  float age=uNoteTime-aBirth;
  float p=clamp(age/max(.001,aDuration),0.,1.);
  float pulse=sin(3.141592653589793*p);
  float multiplier=1.+(aPeak-1.)*pulse*pulse;
  vec3 notePosition=position;
  notePosition.y+=${ue.toFixed(2)}*4.*p*(1.-p);
  vec4 viewPosition=modelViewMatrix*vec4(notePosition,1.);
  float depth=max(-viewPosition.z,.01);
  float focus=mix(${Ae.toFixed(2)},${qe.toFixed(2)},uFocus);
  float width=mix(${Le.toFixed(2)},${Pe.toFixed(2)},uDof);
  vNoteBlur=smoothstep(width*.38,width*1.35,abs(depth-focus));
  float lens=clamp(projectionMatrix[1][1]/${(1/Math.tan(48*Math.PI/360)).toFixed(5)},.5,2.);
  gl_PointSize=clamp(16.*multiplier*uPixelRatio*lens,1.,uNotePointLimit);
  gl_Position=projectionMatrix*viewPosition;
  vNoteAlpha=step(0.,age)*(1.-smoothstep(aDuration,aDuration+.18,age));
  vNoteColor=aSlot<.5?uNoteColor0:aSlot<1.5?uNoteColor1:aSlot<2.5?uNoteColor2:uNoteColor3;
}`,ct=`
varying vec3 vNoteColor; varying float vNoteAlpha,vNoteBlur;
void main(){
  float r=length(gl_PointCoord-.5)*2.; if(r>1.) discard;
  float solid=1.-smoothstep(.76,1.,r);
  float soft=exp(-r*r*1.7)*(1.-smoothstep(.87,1.,r));
  gl_FragColor=vec4(vNoteColor,vNoteAlpha*mix(solid,soft,vNoteBlur*.65));
  #include <colorspace_fragment>
}`;class dt{colors=nt.map(e=>new ke(e));points;geometry=new Ce;material;positions=new Float32Array(q*3);births=new Float32Array(q).fill(-1e6);durations=new Float32Array(q).fill(.7);peaks=new Float32Array(q).fill(3);slots=new Float32Array(q);baseXs=new Float64Array(q);depths=new Float64Array(q);lastFlowOffset=0;shared;camera;scene;cursor=0;peak=3;duration=.7;seed;constructor(e,i,o,s=Math.floor(Math.random()*4294967295)){this.scene=e,this.camera=i,this.shared=o,this.seed=s>>>0||1,this.lastFlowOffset=C(o,"uFlowOffset",0);const r=(n,l,c)=>this.geometry.setAttribute(n,new ze(l,c).setUsage($e));r("position",this.positions,3),r("aBirth",this.births,1),r("aDuration",this.durations,1),r("aPeak",this.peaks,1),r("aSlot",this.slots,1),this.material=new ne({vertexShader:ut,fragmentShader:ct,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ee,uniforms:{...o,uNoteTime:{value:0},uNotePointLimit:{value:112},uPixelRatio:o.uPixelRatio??{value:1},uFocus:o.uFocus??{value:.76},uDof:o.uDof??{value:.55},uNoteColor0:{value:this.colors[0]},uNoteColor1:{value:this.colors[1]},uNoteColor2:{value:this.colors[2]},uNoteColor3:{value:this.colors[3]}}}),this.points=new De(this.geometry,this.material),this.points.frustumCulled=!1,this.points.renderOrder=2,this.scene.add(this.points)}random=()=>(this.seed=Math.imul(this.seed,1664525)+1013904223>>>0,this.seed/4294967296);setScaleFactor(e){Number.isFinite(e)&&(this.peak=Math.max(1,Math.min(8,e)))}setDuration(e){Number.isFinite(e)&&(this.duration=Math.max(.1,Math.min(5,e)))}resize(e,i,o){if(!Number.isFinite(e)||!Number.isFinite(i)||!Number.isFinite(o))return;const s=Math.max(1,Math.min(e,i))*Math.max(1,Math.min(2,o));this.material.uniforms.uNotePointLimit.value=Math.max(1,Math.min(128,s*.35))}setColor(e,i){return!Number.isInteger(e)||e<0||e>3||!/^#[0-9a-f]{6}$/i.test(i)?!1:(this.colors[e].set(i),!0)}trigger(e,i,o,s,r){if(!Number.isInteger(e)||e<0||e>3||!Number.isFinite(i))return!1;const n=lt(this.camera,this.shared,this.random,o,s,r),l=this.cursor;if(!n)return!1;const c=-n.z;let d=n.x;for(let f=0;f<3;f++)d=n.x-this.lateralCurrent(d,c);this.baseXs[l]=d,this.depths[l]=c,this.positions.set([n.x,n.y,n.z],l*3),this.births[l]=i,this.durations[l]=this.duration,this.peaks[l]=this.peak,this.slots[l]=e;for(const f of["position","aBirth","aDuration","aPeak","aSlot"])this.geometry.getAttribute(f).needsUpdate=!0;return this.cursor=(l+1)%q,!0}lateralCurrent(e,i){const o=C(this.shared,"uCurrent",0),s=C(this.shared,"uTime",0),r=C(this.shared,"uCurrentFrequency",1);return .85*o*Math.sin((e*.11+i*.17)*r-s*.055)*Math.cos((i*.09-e*.055)*r+s*.037)}update(e){if(!Number.isFinite(e))return;this.material.uniforms.uNoteTime.value=e;const i=R-O,o=C(this.shared,"uFlowOffset",this.lastFlowOffset),s=((o-this.lastFlowOffset)%i+i)%i;this.lastFlowOffset=o;let r=!1;for(let n=0;n<q;n++){const l=e-this.births[n];if(l<0||l>this.durations[n]+.18)continue;this.depths[n]-=s;const c=this.depths[n],d=this.baseXs[n]+this.lateralCurrent(this.baseXs[n],c);this.positions.set([d,ce(d,c,this.shared),-c],n*3),r=!0}r&&(this.geometry.getAttribute("position").needsUpdate=!0)}dispose(){this.scene.remove(this.points),this.geometry.dispose(),this.material.dispose()}}const ht=.035,ft=`
uniform float uTime;
uniform float uFlowOffset;
uniform float uFlowSpeed;
uniform float uFocus;
uniform float uDof;
uniform float uPixelRatio;
uniform float uViewGain;
uniform float uSwell;
uniform float uDetail;
uniform float uCurrent;
uniform float uCurrentFrequency;
uniform float uNoiseFrequency;
uniform float uEdgeFadeDistance;
uniform float uSplashSizeMin;
uniform float uSplashSizeMax;
attribute vec4 aSeed;
varying vec3 vColor;
varying float vAlpha;
varying float vBlur;

// Two coherent, low-cost value-noise samples are shared by all points in
// world space. A smooth cubic interpolation joins neighbouring cells without
// seams; no particle seed enters the function, so the surface stays coherent.
float hashCell(vec2 cell) {
  vec3 p = fract(vec3(cell.xyx) * .1031);
  p += dot(p, p.yzx + 33.33);
  return fract((p.x + p.y) * p.z);
}
float valueNoise(vec2 p) {
  vec2 cell = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hashCell(cell);
  float b = hashCell(cell + vec2(1.0, 0.0));
  float c = hashCell(cell + vec2(0.0, 1.0));
  float d = hashCell(cell + vec2(1.0, 1.0));
  return 2.0 * mix(mix(a, b, u.x), mix(c, d, u.x), u.y) - 1.0;
}

void main() {
  const float nearDepth = ${O.toFixed(2)};
  const float farDepth = ${R.toFixed(2)};
  const float depthSpan = farDepth - nearDepth;
  float depth = nearDepth + mod(aSeed.y * depthSpan - uFlowOffset, depthSpan);
  // Zero opacity at both recycle points prevents a visible wrap.
  float fade = smoothstep(0.0, uEdgeFadeDistance, depth - nearDepth)
             * smoothstep(0.0, uEdgeFadeDistance, farDepth - depth);

  // The current displaces the same world-space field laterally with a bounded
  // coherent flow. Its phase never depends on slider values, so adjusting a
  // strength cannot restart or jump the underlying animation clock.
  float baseX = (aSeed.x - .5) * ${(Z*2).toFixed(2)};
  float flow = 0.0;
  if (uCurrent > 0.0) {
    flow = sin((baseX * .11 + depth * .17) * uCurrentFrequency - uTime * .055)
         * cos((depth * .09 - baseX * .055) * uCurrentFrequency + uTime * .037);
  }
  float x = baseX + .85 * uCurrent * flow;
  float z = -depth;
  // Uniform branches are shared by the whole draw; the exact zero test keeps
  // arbitrarily small non-zero strengths visually continuous while allowing
  // a fully disabled force to skip its noise calculation on the GPU.
  float swell = 0.0;
  float detailNoise = 0.0;
  if (uSwell > 0.0) {
    swell = valueNoise(vec2(x * .055 * uNoiseFrequency + uTime * .007, depth * .05 * uNoiseFrequency - uTime * .010));
  }
  if (uDetail > 0.0) {
    detailNoise = valueNoise(vec2(x * .29 * uNoiseFrequency - uTime * .013, depth * .29 * uNoiseFrequency + uTime * .020));
  }
  float phase = (depth * .69 + x * .10) * uCurrentFrequency
              + .65 * sin(x * .13 + depth * .095 + uTime * .018)
              + .35 * sin(x * .21 - depth * .12)
              + .60 * uSwell * swell + .20 * uDetail * detailNoise
              + .25 * uCurrent * flow
              - uTime * .045;
  float ridge = sin(phase) * .70;
  float detail = sin(x * .24 - depth * .14 + uTime * .025) * .26;
  float valley = -1.25 * exp(-pow(x / 9.0, 2.0)) + x * .025;
  // A smooth loft connects surface particles to the loose particles above it;
  // a hard threshold here leaves a visible floating layer when orbiting.
  float mist = smoothstep(${We.toFixed(2)}, 1.0, aSeed.z);
  float y = -1.7 + ridge + detail + valley + (aSeed.z - .5) * ${Je.toFixed(2)}
          + mist * ${Xe.toFixed(2)}
          + 2.2 * uSwell * swell + .75 * uDetail * detailNoise + .35 * uCurrent * flow;
  // Stable per-particle flight cycles, rather than a new random selection
  // every frame: the parabolic lift returns to zero at both cycle boundaries.
  // The probability changes smoothly with flow speed and starts at zero.
  // Surface fades also suppress splashes near recycling.
  float splashLift = 0.0;
  if (uFlowSpeed > 0.001) {
    float activity = smoothstep(0.0, 50.0, uFlowSpeed);
    float timeInCycles = uTime * (.45 + .35 * aSeed.z) + aSeed.x * 123.45;
    float flight = fract(timeInCycles);
    float cycle = floor(timeInCycles);
    float choice = hashCell(vec2(floor(aSeed.x * 16384.0) + cycle * 71.0,
                                 floor(aSeed.y * 16384.0) + floor(aSeed.z * 8192.0) * 2.0));
    float probability = ${ht.toFixed(3)} * activity;
    float selected = 1.0 - smoothstep(probability * .9, probability, choice);
    float flightArc = 4.0 * flight * (1.0 - flight);
    splashLift = selected * flightArc * smoothstep(0.0, 3.0, uFlowSpeed) * fade;
    y += splashLift * (.4 + 4.5 * sqrt(activity));
    x += splashLift * .15 * (2.0 * aSeed.z - 1.0);
    z += splashLift * (.1 + .45 * activity);
  }
  vec4 viewPosition = modelViewMatrix * vec4(x, y, z, 1.0);
  // Points behind the camera will be clipped, but guard all calculations
  // before projection so a full orbit cannot create infinities or NaNs.
  float actualDepth = max(-viewPosition.z, 0.01);
  float focusDistance = mix(${Ae.toFixed(2)}, ${qe.toFixed(2)}, uFocus);
  float focusWidth = mix(${Le.toFixed(2)}, ${Pe.toFixed(2)}, uDof);
  float blur = smoothstep(focusWidth * .38, focusWidth * 1.35, abs(actualDepth - focusDistance));
  float perspective = clamp(18.0 / actualDepth, .35, 2.3);
  float baseSize = (1.5 + aSeed.w * 1.3) * sqrt(perspective);
  float zoomScale = clamp(projectionMatrix[1][1] / ${(1/Math.tan(48*Math.PI/360)).toFixed(5)}, .35, 3.0);
  float scale = uPixelRatio * zoomScale;
  // Only airborne splash particles acquire the sampled size. The smooth
  // lift envelope returns them to their surface size before touching down.
  float sizeSeed = fract(aSeed.w * 619.17 + aSeed.z * 171.43);
  float splashSize = mix(uSplashSizeMin, uSplashSizeMax, sizeSeed);
  float sizeFactor = mix(1.0, splashSize, clamp(splashLift, 0.0, 1.0));
  float focusedSize = clamp(baseSize * scale * sizeFactor, 1.0, 36.0);
  float spriteSize = clamp((baseSize + blur * (4.5 + aSeed.w * 7.0)) * scale * sizeFactor, 1.0, 36.0);
  gl_PointSize = spriteSize;
  gl_Position = projectionMatrix * viewPosition;

  float crest = pow(max(0.0, sin(phase)), 4.0);
  float glint = step(.982, aSeed.w);
  // Narrow, softly feathered bands follow actual height-field wave crests.
  float ribbon = exp(-abs(cos(phase)) * 6.0) * step(0.0, sin(phase));
  float edgeFade = smoothstep(0.0, uEdgeFadeDistance, ${Z.toFixed(2)} - abs(x));
  // Looking down crosses fewer particles than a grazing view. Restore only
  // the surface's base luminance, while gently restraining ridge/glint peaks.
  // A thinner surface concentrates many more points along a grazing line of
  // sight. Keep individual contributions restrained so overlapping points
  // remain blue and distinguishable instead of clipping into white bands.
  float intensity = (.036 * uViewGain + .012 * crest + .014 * ribbon + glint * .028) * fade * edgeFade;
  intensity *= 1.0 + splashLift * 1.1;
  intensity *= mix(1.0, .48, mist);
  // Additive blending sums light across each sprite; scale larger circles of
  // confusion down by their area and kernel integral. A limited floor keeps
  // tiny contributions visible when the 8-bit framebuffer quantises blending.
  float kernelEnergy = mix(${fe.toFixed(12)}, ${Ze.toFixed(12)}, blur);
  float diameterRatio = focusedSize / spriteSize;
  float energyGain = ${Qe.toFixed(2)} * diameterRatio * diameterRatio * ${fe.toFixed(12)} / kernelEnergy;
  intensity *= max(${et.toFixed(2)}, energyGain);
  intensity *= mix(.7, 1.4, aSeed.w);
  vAlpha = intensity;
  vBlur = blur;
  vColor = mix(vec3(.24, .34, .70), vec3(.67, .74, 1.0), .18 + .65 * aSeed.w);
}
`,mt=`
varying vec3 vColor;
varying float vAlpha;
varying float vBlur;
void main() {
  float r = length(gl_PointCoord - .5) * 2.0;
  if (r > 1.0) discard;
  float core = 1.0 - smoothstep(.45, .95, r);
  float bokeh = exp(-r * r * 2.3) * (1.0 - smoothstep(.85, 1.0, r));
  float shape = mix(core, bokeh, vBlur);
  gl_FragColor = vec4(vColor, vAlpha * shape);
}
`,pt=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,vt=`
varying vec2 vUv;
void main() {
  float haze = exp(-pow((vUv.y - .53) / .37, 2.0));
  float vignette = 1.0 - .18 * pow(abs(vUv.x - .5) * 2.0, 2.0);
  vec3 color = (vec3(.012, .015, .034) + haze * vec3(.015, .021, .058)) * vignette;
  gl_FragColor = vec4(color, 1.0);
}
`;function yt(){let t=1679707425;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function T(t,e){return Number.isFinite(t)?Math.min(1,Math.max(0,t)):e}function re(t,e=1){return Number.isFinite(t)?Math.pow(2,2*(T(t,.5)-.5)):e}function le(t,e=1){return Number.isFinite(t)?Math.pow(2,3*T(t,2/3)-2):e}class gt{renderer;scene=new Oe;camera=new Re(48,1,.1,220);geometry=new Ce;viewDirection=new M;backgroundGeometry=new Ie(2,2);uniforms={uTime:{value:0},uFlowOffset:{value:0},uFlowSpeed:{value:1},uFocus:{value:.5},uDof:{value:.55},uPixelRatio:{value:1},uViewGain:{value:1},uSwell:{value:.55},uDetail:{value:.45},uCurrent:{value:.35},uCurrentFrequency:{value:1},uNoiseFrequency:{value:1},uEdgeFadeDistance:{value:Te},uSplashSizeMin:{value:1},uSplashSizeMax:{value:1}};material;backgroundMaterial;noteDroplets;flowSpeed=1;constructor(e){this.renderer=new Ve({canvas:e,antialias:!1,powerPreference:"high-performance"}),this.renderer.setClearColor(198417,1),this.camera.position.set(0,3.1,6),this.camera.lookAt(0,.3,-10);const i=yt(),o=ae,s=new Float32Array(o*4);for(let l=0;l<s.length;l+=4)s[l]=i(),s[l+1]=i(),s[l+2]=i(),s[l+3]=i();this.geometry.setDrawRange(0,Math.round(o*.7)),this.geometry.setAttribute("aSeed",new ze(s,4)),this.material=new ne({vertexShader:ft,fragmentShader:mt,uniforms:this.uniforms,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ee});const r=new De(this.geometry,this.material);r.frustumCulled=!1,this.scene.add(r),this.backgroundMaterial=new ne({vertexShader:pt,fragmentShader:vt,depthTest:!1,depthWrite:!1});const n=new Ge(this.backgroundGeometry,this.backgroundMaterial);n.frustumCulled=!1,n.renderOrder=-1,this.scene.add(n),this.noteDroplets=new dt(this.scene,this.camera,this.uniforms)}setFocus(e){this.uniforms.uFocus.value=T(e,.5)}setSwell(e){this.uniforms.uSwell.value=T(e,this.uniforms.uSwell.value)}setDetail(e){this.uniforms.uDetail.value=T(e,this.uniforms.uDetail.value)}setCurrent(e){this.uniforms.uCurrent.value=T(e,this.uniforms.uCurrent.value)}triggerNote(e,i,o,s,r){return this.noteDroplets.trigger(e,i,o,s,r)}setNoteScaleFactor(e){this.noteDroplets.setScaleFactor(e)}setNoteDuration(e){this.noteDroplets.setDuration(e)}setNoteColor(e,i){return this.noteDroplets.setColor(e,i)}setFlowSpeed(e){Number.isFinite(e)&&(this.flowSpeed=Math.min(50,Math.max(0,e)),this.uniforms.uFlowSpeed.value=this.flowSpeed)}advanceFlow(e){if(!Number.isFinite(e)||e<=0||this.flowSpeed===0)return;const i=R-O,o=Ue*this.flowSpeed,s=e%(i/o)*o;this.uniforms.uFlowOffset.value=(this.uniforms.uFlowOffset.value+s)%i}setParticleDensity(e){if(!Number.isFinite(e))return;const i=Math.max(.07,Math.min(1,e));this.geometry.setDrawRange(0,Math.round(ae*i))}setSplashSizeRange(e,i){if(!Number.isFinite(e)||!Number.isFinite(i))return;const o=Math.max(.25,Math.min(8,e)),s=Math.max(.25,Math.min(8,i));this.uniforms.uSplashSizeMin.value=Math.min(o,s),this.uniforms.uSplashSizeMax.value=Math.max(o,s)}setCurrentFrequency(e){this.uniforms.uCurrentFrequency.value=le(e,this.uniforms.uCurrentFrequency.value)}setEdgeFadeDistance(e){Number.isFinite(e)&&(this.uniforms.uEdgeFadeDistance.value=it(e))}setNoiseFrequency(e){this.uniforms.uNoiseFrequency.value=re(e,this.uniforms.uNoiseFrequency.value)}getCamera(){return this.camera}setFocalLength(e){const i=st(e);i!==null&&this.camera.setFocalLength(i)}setDepthOfField(e){this.uniforms.uDof.value=T(e,.55)}render(e){Number.isFinite(e)&&(this.uniforms.uTime.value=Math.max(0,e)),this.noteDroplets.update(this.uniforms.uTime.value),this.camera.getWorldDirection(this.viewDirection),this.uniforms.uViewGain.value=ot(this.viewDirection.y),this.renderer.render(this.scene,this.camera)}resize(e,i,o){const s=Math.max(1,e),r=Math.max(1,i),n=Math.min(2,Math.max(1,o||1));this.renderer.setPixelRatio(n),this.renderer.setSize(s,r,!1),this.camera.aspect=s/r,this.camera.updateProjectionMatrix(),this.noteDroplets.resize(s,r,n),this.uniforms.uPixelRatio.value=n*Math.max(.7,Math.min(1.5,r/934))}dispose(){this.noteDroplets.dispose(),this.geometry.dispose(),this.material.dispose(),this.backgroundGeometry.dispose(),this.backgroundMaterial.dispose(),this.renderer.dispose()}}function A(t,e,i){const o=Number.isFinite(i)?Math.max(0,i):0;if(o===0)return t;const s=e+(t-e)*Math.exp(-o/.14);return Math.abs(s-e)<1e-4?e:s}function ye(t){if(!Number.isFinite(t))return 1;const e=Math.max(0,Math.min(1e3,t));if(e<=200)return e/200;const i=(e-200)/800;return 1+49*i*i}class wt{options;now;wallNow;makeSource;receiver=new ee;url;source=null;active=!0;disposed=!1;connection="connecting";addresses=[null,null,null,null];ignoredNotes=0;udpPort=null;constructor(e){this.options=e,this.url=this.validSource(e.url),this.now=e.now??(()=>performance.now()),this.wallNow=e.wallNow??(()=>Date.now()),this.makeSource=e.createEventSource??(i=>new EventSource(i)),this.connect()}validSource(e){if(e==="./osc/events"||e==="./osc-tao/events")return e;throw new Error("Unsupported local OSC source")}notify(){this.options.onStatus({connection:this.connection,addresses:[...this.addresses],ignoredNotes:this.ignoredNotes,udpPort:this.udpPort})}connect(){if(this.disposed||!this.active||this.source)return;this.connection="connecting",this.notify();let e;try{e=this.makeSource(this.url)}catch{this.connection="disconnected",this.notify();return}this.source=e;const i=o=>{if(!(this.source!==e||!this.active||this.disposed))try{const s=JSON.parse(o.data);if(!s||typeof s!="object")return;Number.isInteger(s.udpPort)&&s.udpPort>0&&s.udpPort<=65535&&(this.udpPort=s.udpPort),this.connection="connected",this.notify()}catch{}};e.addEventListener("ready",i),e.addEventListener("status",i),e.addEventListener("osc",o=>{if(!(this.source!==e||!this.active||this.disposed))try{const s=JSON.parse(o.data);if(!s||typeof s.receivedAt!="number"||!Number.isFinite(s.receivedAt))return;const r=this.wallNow()-s.receivedAt;if(!Number.isFinite(r)||r>250||r<-5e3)return;const n=this.receiver.receive(s,this.now());if(!n)return;const l=n.track.address;let c=this.addresses.indexOf(l);if(c<0){if(c=this.addresses.indexOf(null),c<0){this.ignoredNotes=Math.min(Number.MAX_SAFE_INTEGER,this.ignoredNotes+1),this.notify();return}this.addresses[c]=l,this.notify()}this.options.onNote(c,l,n.pitch)}catch{}}),e.onerror=()=>{this.source!==e||!this.active||this.disposed||(this.connection="disconnected",this.notify())}}setActive(e){this.disposed||this.active===e||(this.active=e,e?this.connect():(this.source?.close(),this.source=null,this.connection="paused",this.notify()))}setSource(e){const i=this.validSource(e);this.disposed||i===this.url||(this.source?.close(),this.source=null,this.url=i,this.receiver=new ee,this.addresses=[null,null,null,null],this.ignoredNotes=0,this.udpPort=null,this.active?this.connect():this.notify())}clear(){this.disposed||(this.receiver=new ee,this.addresses=[null,null,null,null],this.ignoredNotes=0,this.notify())}dispose(){this.disposed||(this.disposed=!0,this.active=!1,this.source?.close(),this.source=null)}}const Y=new URLSearchParams(location.search).get("embedded")==="1";Y&&document.body.classList.add("embedded");const ge=document.querySelector("#field"),we=document.querySelector("#error"),be=document.querySelector("#focus"),Fe=document.querySelector("#depth"),Se=document.querySelector("#toggle"),te=document.querySelector("#panel"),ie=document.querySelector("#controls"),oe=document.querySelector("#lens"),xe=document.querySelector("#lens-value"),bt=document.querySelector("#reset-view"),U=document.querySelector("#swell"),H=document.querySelector("#detail"),B=document.querySelector("#noise-frequency"),W=document.querySelector("#current"),X=document.querySelector("#current-folds"),$=document.querySelector("#edge-fade"),J=document.querySelector("#flow-speed"),K=document.querySelector("#particle-count"),Ft=document.querySelector("#swell-value"),St=document.querySelector("#detail-value"),xt=document.querySelector("#noise-frequency-value"),Nt=document.querySelector("#current-value"),Mt=document.querySelector("#current-folds-value"),Ct=document.querySelector("#edge-fade-value"),Et=document.querySelector("#flow-speed-value"),Dt=document.querySelector("#particle-count-value"),V=document.querySelector("#splash-size-min"),G=document.querySelector("#splash-size-max"),zt=document.querySelector("#splash-size-min-value"),qt=document.querySelector("#splash-size-max-value"),Ne=document.querySelector("#note-scale"),Me=document.querySelector("#note-duration"),At=document.querySelector("#note-scale-value"),Lt=document.querySelector("#note-duration-value"),se=document.querySelector("#note-source"),Pt=document.querySelector("#note-status"),Tt=Array.from({length:4},(t,e)=>document.querySelector(`#note-color-${e+1}`)),_t=Array.from({length:4},(t,e)=>document.querySelector(`#note-track-${e+1}`));async function kt(){try{const t=new gt(ge);let e=!0,i=0,o=0,s=null,r=!Y,n=null;const l=new Map,c=new Map;let d=Number(V.value),f=Number(G.value),g=d,v=f,p=null,m={swell:Number(U.value)/100,detail:Number(H.value)/100,frequency:Number(B.value)/100,current:Number(W.value)/100,folds:Number(X.value)/300,edgeFade:Number($.value)},h={...m},y=ye(Number(J.value)),S=y;const E=()=>{t.setSwell(h.swell),t.setDetail(h.detail),t.setNoiseFrequency(h.frequency),t.setCurrent(h.current),t.setCurrentFrequency(h.folds),t.setEdgeFadeDistance(h.edgeFade)},D=t.getCamera(),F=new je(D,ge);F.target.set(0,-1.9,-(O+R)/2),F.enableDamping=!1,F.enablePan=!1,F.minDistance=2,F.maxDistance=100,F.update(),F.saveState(),F.addEventListener("change",()=>{(!e||document.hidden)&&t.render(o)}),bt.addEventListener("click",()=>F.reset());const w=()=>{t.resize(window.innerWidth,window.innerHeight,Math.min(window.devicePixelRatio||1,2)),p===null?(p=D.getFocalLength(),oe.value=String(p)):t.setFocalLength(p),xe.value=`${p.toFixed(1)} mm`,t.render(o)},x=u=>{if(s=null,!e||document.hidden||!r)return;const a=i?Math.min(Math.max((u-i)/1e3,0),.2):0;o+=a,i=u,h.swell=A(h.swell,m.swell,a),h.detail=A(h.detail,m.detail,a),h.frequency=A(h.frequency,m.frequency,a),h.current=A(h.current,m.current,a),h.folds=A(h.folds,m.folds,a),h.edgeFade=A(h.edgeFade,m.edgeFade,a),S=A(S,y,a),g=A(g,d,a),v=A(v,f,a),t.setSplashSizeRange(g,v),t.setFlowSpeed(S),t.advanceFlow(a),E(),t.render(o),s=requestAnimationFrame(x)},b=()=>{s!==null&&cancelAnimationFrame(s),s=null,i=0;const u=e&&!document.hidden&&r;n?.setActive(u),u&&(s=requestAnimationFrame(x))},N=u=>{d=Number(V.value),f=Number(G.value),d>f&&(u==="min"?(f=d,G.value=V.value):(d=f,V.value=G.value)),zt.value=`${d.toFixed(2)}×`,qt.value=`${f.toFixed(2)}×`,(!e||document.hidden||!r)&&(g=d,v=f,t.setSplashSizeRange(g,v),t.render(o))};V.addEventListener("input",()=>N("min")),G.addEventListener("input",()=>N("max"));const z=()=>{const u=Number(Ne.value),a=Number(Me.value);t.setNoteScaleFactor(u),t.setNoteDuration(a),At.value=`${u.toFixed(1)}×`,Lt.value=`${a.toFixed(1)} s`};Ne.addEventListener("input",z),Me.addEventListener("input",z),Tt.forEach((u,a)=>{t.setNoteColor(a,u.value),u.addEventListener("input",()=>{t.setNoteColor(a,u.value),e||t.render(o)}),document.querySelector(`#note-test-${a+1}`).addEventListener("click",()=>{e||(e=!0,b()),t.triggerNote(a,o)})});const j=u=>{const a=u.udpPort?` · UDP ${u.udpPort}`:"";Pt.textContent=`OSC ${u.connection}${a}${u.ignoredNotes?` · ${u.ignoredNotes} notes beyond four tracks ignored`:""}`,_t.forEach((L,k)=>{L.textContent=u.addresses[k]||`Track ${k+1} · waiting`})};Y?window.addEventListener("message",u=>{if(u.origin!==location.origin||u.source!==window.parent||!u.data||typeof u.data!="object")return;const a=u.data;if(a.type==="particle-active"&&typeof a.active=="boolean"){r=a.active,b();return}if(a.type==="particle-reset"){l.clear(),c.clear();return}if(a.type==="particle-ui"&&typeof a.active=="boolean"){ie.hidden=!a.active;return}if(a.type!=="particle-note"&&a.type!=="particle-color"||typeof a.address!="string"||a.address.length>128||!a.address.length)return;let L=l.get(a.address);if(a.type==="particle-note"&&L===void 0&&l.size<4&&(L=l.size,l.set(a.address,L)),L!==void 0&&(typeof a.color=="string"&&/^#[0-9a-f]{6}$/i.test(a.color)&&t.setNoteColor(L,a.color),a.type==="particle-note"&&r&&e&&!document.hidden&&typeof a.pitch=="number"&&Number.isFinite(a.pitch))){const k=_e(a.polygon)?a.polygon:null,de=t.triggerNote(L,o,typeof a.region=="number"?a.region:void 0,typeof a.regionCount=="number"?a.regionCount:void 0,k);if(k){const he=JSON.stringify([de,k]);c.get(a.address)!==he&&(c.set(a.address,he),window.parent.postMessage({type:"particle-area-status",address:a.address,available:de},location.origin))}else c.delete(a.address)}}):(n=new wt({url:se.value,onStatus:j,onNote:u=>{t.triggerNote(u,o)}}),se.addEventListener("change",()=>n?.setSource(se.value)),document.querySelector("#note-clear-tracks").addEventListener("click",()=>n?.clear())),window.addEventListener("pagehide",()=>n?.dispose(),{once:!0}),N("min"),z();const _=()=>{t.setFocus(Number(be.value)/100),t.setDepthOfField(Number(Fe.value)/100),(!e||document.hidden)&&t.render(o)};be.addEventListener("input",_),Fe.addEventListener("input",_);const P=()=>{m={swell:Number(U.value)/100,detail:Number(H.value)/100,frequency:Number(B.value)/100,current:Number(W.value)/100,folds:Number(X.value)/300,edgeFade:Number($.value)},Ft.value=`${U.value}%`,St.value=`${H.value}%`,xt.value=`${re(m.frequency).toFixed(2)}×`,B.setAttribute("aria-valuetext",`${re(m.frequency).toFixed(2)} times`),Nt.value=`${W.value}%`,Mt.value=`${le(m.folds).toFixed(2)}×`,X.setAttribute("aria-valuetext",`${le(m.folds).toFixed(2)} times`),Ct.value=`${$.value}`,$.setAttribute("aria-valuetext",`${$.value} world units`),(!e||document.hidden)&&(h={...m},E(),t.render(o))};U.addEventListener("input",P),H.addEventListener("input",P),B.addEventListener("input",P),W.addEventListener("input",P),X.addEventListener("input",P),$.addEventListener("input",P);const Q=()=>{y=ye(Number(J.value));const u=Math.round(ae*Number(K.value)/100);Et.value=`${y.toFixed(2)}×`,J.setAttribute("aria-valuetext",`${y.toFixed(2)} times`),Dt.value=u.toLocaleString("en-US"),K.setAttribute("aria-valuetext",`${u.toLocaleString("en-US")} particles`),t.setParticleDensity(Number(K.value)/100),(!e||document.hidden)&&(S=y,t.setFlowSpeed(S),t.render(o))};J.addEventListener("input",Q),K.addEventListener("input",Q),oe.addEventListener("input",()=>{p=Number(oe.value),t.setFocalLength(p),xe.value=`${p.toFixed(1)} mm`,(!e||document.hidden)&&t.render(o)}),Se.addEventListener("click",()=>{te.hidden=!te.hidden,Se.setAttribute("aria-expanded",String(!te.hidden))}),window.addEventListener("resize",w),document.addEventListener("visibilitychange",b),window.addEventListener("keydown",u=>{if(Y&&/^[2-9hfb]$/i.test(u.key)&&!(u.target instanceof HTMLInputElement||u.target instanceof HTMLSelectElement||u.target instanceof HTMLButtonElement)){u.preventDefault(),window.parent.postMessage({type:"particle-key",key:u.key},location.origin);return}if(u.code==="Space"){if(u.target instanceof HTMLInputElement||u.target instanceof HTMLButtonElement)return;u.preventDefault(),e=!e,b()}else u.key.toLowerCase()==="f"?document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen():u.key.toLowerCase()==="h"&&(ie.hidden=!ie.hidden)}),_(),E(),P(),Q(),w(),b()}catch(t){we.hidden=!1,we.textContent=`Unable to start the particle field. ${t instanceof Error?t.message:""}`}}kt();
