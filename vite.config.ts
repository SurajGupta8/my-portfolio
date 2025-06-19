import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Optional: specify a port
    open: true, // Optional: open browser on start
  },
  build: {
    outDir: 'build', // Optional: specify output directory
  },
  // Optional: For handling SVGs as React components if needed
  // esbuild: {
  //   jsxFactory: 'React.createElement',
  //   jsxFragment: 'React.Fragment',
  // },
})
