import { defineConfig } from 'vite'
import VueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    VueJsx()
  ],
  server: {
    port: 8330
  }
})
