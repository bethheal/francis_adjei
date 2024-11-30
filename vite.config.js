import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', 
    rollupOptions: {
      external: ['react-icons/fi']
    }// Ensure the output directory is set correctly
  },
  base: './', // Set base path for relative imports
})
