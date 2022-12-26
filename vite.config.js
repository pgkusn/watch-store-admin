import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
    }),
    Components({
      // 預設從 `./src/components/` 路徑查找
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    devSourcemap: true,
  },
  base: '/watch-store-admin/',
})
