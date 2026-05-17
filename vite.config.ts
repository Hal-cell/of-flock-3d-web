import { defineConfig } from 'vite';

export default defineConfig({
  // 大 WAV sample 嵌进 bundle 时 vite 默认 < 4KB inline，超过走 import URL，OK
  // assetsInlineLimit 保持默认
  build: {
    target: 'es2022',
    sourcemap: true,
  },
  server: {
    host: true,   // 监听 0.0.0.0，方便手机/局域网测试
    port: 5173,
  },
});
