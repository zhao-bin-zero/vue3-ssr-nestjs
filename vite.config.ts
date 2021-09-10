import path from 'path';
import { UserConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
const vueJsxPlugin = require('@vitejs/plugin-vue-jsx');
const vuePlugin = require('@vitejs/plugin-vue');

export default {
  plugins: [
    vuePlugin(),
    vueJsxPlugin(),
    eslintPlugin({
      cache: false,
      include: ['web/src/**/*.vue', 'web/src/**/*.ts', 'web/src/**/*.tsx']
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'web/src'),
      '@img': path.resolve(__dirname, 'web/src/assets/img')
    }
  }
} as UserConfig;
