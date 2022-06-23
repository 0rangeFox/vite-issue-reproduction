import { defineConfig } from 'vite';

export const name = 'server-node';

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: [
      'perf_hooks',
      'pg-native'
    ]
  },
  build: {
    target: 'ESNext',
    lib: {
      name,
      entry: 'src/index.ts',
      formats: [
        'cjs'
      ],
      fileName: (format) => `${name}.${format}.js`
    },
    rollupOptions: {
      external: [
        'perf_hooks',
        'pg-native'
      ],
      output: {
        globals: {
          perf_hooks: 'perf_hooks'
        }
      }
    }
  }
});
