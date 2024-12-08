import { defineConfig } from 'vite'  
import react from '@vitejs/plugin-react'  
import { compression } from 'vite-plugin-compression2'  

export default defineConfig({  
  plugins: [  
    react(),  
    compression({ algorithm: 'gzip' }),  // Enables gzip compression  
    compression({ algorithm: 'brotliCompress', ext: '.br' }) // Enables brotli compression  
  ],  
  build: {  
    outDir: 'dist',  
    sourcemap: false, // Disable sourcemaps in production  
    minify: 'terser', // Use terser for better minification  
    terserOptions: {  
      compress: {  
        drop_console: true, // Remove console.logs  
        drop_debugger: true  
      }  
    },  
    rollupOptions: {  
      output: {  
        manualChunks: {  
          vendor: ['react', 'react-dom', 'react-router-dom'],  
          animations: ['framer-motion', 'gsap'],  
        },  
        chunkFileNames: 'assets/js/[name]-[hash].js',  
        entryFileNames: 'assets/js/[name]-[hash].js',  
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'  
      }  
    }  
  },  
  optimizeDeps: {  
    include: ['react', 'react-dom', 'react-router-dom']  
  }  
})  