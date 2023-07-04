import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { splitVendorChunkPlugin } from 'vite'

export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  server: {
    proxy: {
      '/api': {
        target: `http://0.0.0.0:${process.env.PORT || 3000}`,
        changeOrigin: true,
      },
    },
  },
})
