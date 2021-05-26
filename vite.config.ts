/*
 * @Description:
 * @Author: chenju
 * @Date: 2021-05-26 09:58:50
 * @LastEditors: chenju
 * @LastEditTime: 2021-05-26 13:56:44
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  }
});
