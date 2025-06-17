import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const REPO_NAME = 'google-test' // 與 Vite 配置一致

// https://vite.dev/config/
export default defineConfig({
  base: `/${REPO_NAME}/`,
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
