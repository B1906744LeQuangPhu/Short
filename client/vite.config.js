import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = "My Vue App";
            return args;
        })
},
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  metaInfo: {
    script: [
      { src: 'D:\code\LinkShortener\client\src\assets\test.js', async: true, defer: true }
    ],
  },
  server: {
    port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:5000/",
        changeOrigin: true,
      },
    }
  },
  
})
