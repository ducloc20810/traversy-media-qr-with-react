import { defineConfig, splitVendorChunkPlugin } from 'vite'
import reactSWC from '@vitejs/plugin-react-swc'
import eslint from 'vite-plugin-eslint'
// eslint-disable-next-line import/no-extraneous-dependencies
import istanbul from 'vite-plugin-istanbul'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

export default defineConfig((props) => ({
  plugins: [
    svgr(),
    reactSWC(),
    eslint({
      failOnError: true,
      include: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx']
    }),
    splitVendorChunkPlugin(),
    tsconfigPaths(),
    istanbul({
      requireEnv: true
    })
  ],
  server: {
    port: 9005,
    host: true
  },
  build: {
    outDir: 'build',
    sourcemap: true
  },
  esbuild: {
    target: props.command === 'build' ? 'es6' : 'esnext'
  }
}))
