import { defineConfig } from 'vite';
import { builtinModules } from 'module';

const name = 'server-node';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'ESNext',
    minify: false,
    lib: {
      entry: 'src/index.ts',
      name,
      formats: [
        'cjs'
      ],
      fileName: (format) => `${name}.${format}.js`
    },
    rollupOptions: {
      external: builtinModules
    },
    commonjsOptions: {
      ignore: [
        'pg-native',
        './native'
      ]
    }
  }
});
