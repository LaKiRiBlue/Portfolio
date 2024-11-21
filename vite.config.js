import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'],
  server: {
    watch: {
      usePolling: true,
    },
  },
  base: './', // Ensures proper relative paths for assets
});
