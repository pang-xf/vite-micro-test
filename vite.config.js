import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginMicroApp from './vite-plugin-micro-app'

export default defineConfig({
  plugins: [vue(), VitePluginMicroApp()],
  build: {
    lib: {
      entry: '',
      formats: ['es']
    }
  }
})