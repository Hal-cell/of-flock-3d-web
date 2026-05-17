/**
 * XorShift32 — 跟 C++ Flock3D::fastRand 一致的快速 PRNG
 * 替代 Math.random()（无锁、可重复种子、~1ns/call）
 */
export class XorShift32 {
  private state: number;
  constructor(seed: number = 0x12345678) {
    this.state = seed >>> 0;
    if (this.state === 0) this.state = 0xdeadbeef;
  }

  /** 32-bit raw integer */
  next(): number {
    let x = this.state;
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    this.state = x >>> 0;
    return this.state;
  }

  /** [0, 1) float */
  float(): number {
    return this.next() / 4294967296;
  }

  /** [-1, 1] float */
  signed(): number {
    return this.next() / 2147483648 - 1;
  }

  /** [0, n) int (avoid mod bias via 64-bit multiply) */
  below(n: number): number {
    return Math.floor((this.next() * n) / 4294967296);
  }

  seed(seed: number) {
    this.state = (seed >>> 0) || 0xdeadbeef;
  }
}

/** Singleton for non-critical paths (visual jitter, etc.) */
export const rng = new XorShift32(Date.now() & 0xffffffff);
