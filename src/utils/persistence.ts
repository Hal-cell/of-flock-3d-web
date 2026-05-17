/**
 * Persistence — localStorage-backed settings save/load
 * 等价于 C++ ofxPanel.saveToFile / loadFromFile
 *
 * 一个 key 存全部参数 JSON。size ~5KB，无压力。
 * Key 带版本号，未来 schema 变化可以平滑迁移（旧 key 失效但不报错）。
 */

const VERSION = 1;
const KEY = `of-flock-3d-web:settings:v${VERSION}`;

export interface SavedSettings {
  flock?: Record<string, any>;
  audioConductor?: Record<string, any>;
  visualConductor?: Record<string, any>;
  synchresis?: Record<string, any>;
  synth?: Record<string, any>;
  savedAt?: number;
}

export function saveSettings(data: SavedSettings): boolean {
  try {
    const payload = { ...data, savedAt: Date.now() };
    localStorage.setItem(KEY, JSON.stringify(payload));
    return true;
  } catch (e) {
    console.warn('[persistence] save failed:', e);
    return false;
  }
}

export function loadSettings(): SavedSettings | null {
  try {
    const v = localStorage.getItem(KEY);
    if (!v) return null;
    return JSON.parse(v);
  } catch (e) {
    console.warn('[persistence] load failed:', e);
    return null;
  }
}

export function clearSettings(): void {
  try { localStorage.removeItem(KEY); } catch {}
}

/** Merge saved values into a target object (only keys present in saved override) */
export function applySaved<T extends Record<string, any>>(target: T, saved: any): T {
  if (saved && typeof saved === 'object') {
    for (const k in saved) {
      if (k in target) (target as any)[k] = saved[k];
    }
  }
  return target;
}
