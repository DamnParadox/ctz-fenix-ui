import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslint()
  ],
  // 指定环境文件目录
  envDir: path.resolve(__dirname, 'env'),
  // 别名配置
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, 'src')
  //   }
  // },
  // 服务配置
  server: {
    port: 8300,
    cors: true,
    proxy: {}
  },
  // 打包配置
  build: {
    outDir: path.resolve(__dirname, '../dist')
  }
})
