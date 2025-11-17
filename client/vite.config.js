import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://server-b6w3.onrender.com',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    // Ensure video files are copied to dist
    copyPublicDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor';
            }
            if (id.includes('framer-motion')) {
              return 'animations';
            }
            if (id.includes('react-icons')) {
              return 'icons';
            }
          }
        }
      }
    }
  },
  // Ensure public assets are properly served
  publicDir: 'public'
})