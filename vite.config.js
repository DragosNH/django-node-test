import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: 'assets',
  base: '/',
  build: {
    // put the bundle into static/javascript
    outDir: path.resolve(__dirname, 'static/javascript'),
    emptyOutDir: false,
    rollupOptions: {
      input: path.resolve(__dirname, 'assets/script.js'),
      output: {
        // always name the bundle main.js
        entryFileNames: 'main.js',
      }
    },
  },
  server: {
    port: 3000,
    strictPort: true,
  },
});
