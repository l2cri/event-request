import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '^/user': {
        target: 'https://agile-sands-40710.herokuapp.com',
        changeOrigin: true,
      },
    },
  },
})
