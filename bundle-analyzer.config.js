/**
 * Bundle Size Analysis Configuration
 * 
 * This configuration helps monitor the impact of barrel files on bundle size
 * and ensures tree-shaking is working effectively.
 */

import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'TypeScriptBarrelLab',
      fileName: 'main'
    },
    rollupOptions: {
      output: {
        // Generate analysis-friendly output
        manualChunks: {
          'utils': ['src/utils/index.ts'],
          'types': ['src/types/index.ts'],
          'services': ['src/services/index.ts'],
          'components': ['src/components/index.ts'],
          'config': ['src/config/index.ts']
        }
      }
    },
    // Enable source maps for better analysis
    sourcemap: true,
    // Minify for realistic bundle sizes
    minify: 'terser',
    // Report compressed sizes
    reportCompressedSize: true
  },
  define: {
    // Enable production optimizations
    'process.env.NODE_ENV': '"production"'
  }
})