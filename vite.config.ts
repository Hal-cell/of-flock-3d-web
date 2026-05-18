import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Pages 子路径部署：base 必须是 './' 或具体子路径
  // './' = 所有 asset URL 用相对路径 → 兼容任何 host / subpath
  base: './',
  build: {
    target: 'es2022',
    sourcemap: true,
  },
  server: {
    host: true,
    port: 5173,
  },
});
