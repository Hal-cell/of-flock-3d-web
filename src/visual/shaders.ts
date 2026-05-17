/**
 * Custom point-sprite shader — replicates C++ Flock3D particleShader.
 * Each particle is rendered as a soft-edged shaded sphere with halo.
 *
 * Attribute layout:
 *   position   vec3
 *   pColor     vec4 (rgba)
 *   pSize      float (gl_PointSize)
 */

export const PARTICLE_VS = /* glsl */ `
attribute vec4 pColor;
attribute float pSize;

varying vec4 vColor;
varying float vSize;

void main() {
  vColor = pColor;
  vSize = pSize;
  vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPos;
  // PerspectiveCamera: size scales with 1/-mvPos.z (matches OF behaviour)
  float ps = pSize * (300.0 / -mvPos.z);
  gl_PointSize = clamp(ps, 1.0, 96.0);
}
`;

export const PARTICLE_FS = /* glsl */ `
precision highp float;
varying vec4 vColor;
varying float vSize;

uniform float uBrightness;
uniform float uSpecular;
uniform float uAmbient;
uniform float uGlow;

void main() {
  vec2 uv = gl_PointCoord * 2.0 - 1.0;
  float r = length(uv);
  // soft-edge mask using fwidth (matches C++ shader)
  float aa = clamp(fwidth(r), 0.001, 0.08);
  float mask = 1.0 - smoothstep(1.0 - aa, 1.0 + aa, r);
  if (mask <= 0.001) discard;

  // sphere shading: simple Lambert from light at upper-left + spec highlight
  vec3 n = vec3(uv, sqrt(max(0.0, 1.0 - r * r)));
  vec3 lightDir = normalize(vec3(-0.4, 0.5, 0.85));
  float diff = max(dot(n, lightDir), 0.0);
  float spec = pow(max(dot(reflect(-lightDir, n), vec3(0.0, 0.0, 1.0)), 0.0), 24.0);
  float lit = uAmbient + diff * (1.0 - uAmbient) + spec * uSpecular;

  // halo blooms outside the sphere surface (smoothstep around r=0.85→1.0)
  float halo = smoothstep(1.0, 0.85, r) * uGlow;
  vec3 col = vColor.rgb * (lit * uBrightness) + vColor.rgb * halo;
  float a = vColor.a * mask;
  gl_FragColor = vec4(col, a);
}
`;

// Mycelium / trail / strands all reuse standard Three.js LineBasicMaterial with
// vertexColors. No custom shader needed for those.
