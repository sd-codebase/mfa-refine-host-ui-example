import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
  server: {
    port: 5000,
  },
  resolve: {
    alias: {
      '@host': path.resolve(__dirname, './src'),
      '@host/components': path.resolve(__dirname, './src/components'),
      '@host/pages': path.resolve(__dirname, './src/pages'),
      '@host/styles': path.resolve(__dirname, './src/styles'),
      '@host/types': path.resolve(__dirname, './src/types'),
    },
  },
});
