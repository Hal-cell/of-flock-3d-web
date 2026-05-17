/** Match openFrameworks ofClamp behaviour */
export function clamp(v: number, lo: number, hi: number): number {
  return v < lo ? lo : v > hi ? hi : v;
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/** smoothstep S 曲线 */
export function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

export const TWO_PI = Math.PI * 2;
export const HALF_PI = Math.PI * 0.5;

/** wrap phase to [0, 1) */
export function wrap01(x: number): number {
  let y = x - Math.floor(x);
  if (y < 0) y += 1;
  return y;
}
