/** @type {import('vite').UserConfig} */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePluginFonts } from 'vite-plugin-fonts';
import { createHtmlPlugin } from 'vite-plugin-html';
import viteImagemin from 'vite-plugin-imagemin';

import config from './config.js';
// import postcss from './postcss.config.js';

const { imagemin } = config;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin(imagemin),
    createHtmlPlugin({
      minify: true,
      entry: 'src/main.tsx',
    }),
    VitePluginFonts({
      // Custom fonts
      custom: {
        families: [
          {
            name: 'CascadiaCodePL',
            src: './src/assets/fonts/*.woff2',
          },
          {
            name: 'Poppins',
            src: './src/assets/fonts/*.ttf',
          },
        ],
        display: 'swap',
        preload: true,
        prefetch: false,
        injectTo: 'head-prepend',
      },
    }),
  ],
  // css: {
  //   postcss,
  // },
  resolve: {
    alias: [
      { find: '@/', replacement: '/src' },
      { find: '@/Assets', replacement: '/src/assets' },
      { find: '@/Components', replacement: '/src/components' },
      { find: '@/Pages', replacement: '/src/pages' },
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: '.vitest/setup.ts',
    include: ['**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'c8',
      reporter: ['text', 'json', 'html'],
    },
  },
});
