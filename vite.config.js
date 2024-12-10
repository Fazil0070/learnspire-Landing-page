import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx']
  }  ,
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  server: {
    host: true,
    port: 80
  }
})