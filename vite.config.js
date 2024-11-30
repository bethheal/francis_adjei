import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory (default is 'dist')
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`, // Ensure files have proper .js extensions
      },
    },
  },
})
