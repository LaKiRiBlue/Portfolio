import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.jpg'], // Include both uppercase and lowercase extensions
  server: {
    watch: {
      usePolling: true,
    },
  },
  build: {
    outDir: 'dist',
  },
})
