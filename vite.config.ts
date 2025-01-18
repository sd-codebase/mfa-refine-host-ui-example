import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import * as path from 'path';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        remoteApp:
          'https://mfa-refine-remote-ui-example.vercel.app/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'antd'],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    modulePreload: false,
  },
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
