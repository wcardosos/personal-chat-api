import { defineConfig } from 'vitest/config';
import tsConfigPaths from 'vite-tsconfig-paths';
import swc from 'unplugin-swc';

export default defineConfig({
  test: {
    include: ['./tests/unit/**/*.spec.ts'],
    globals: true,
  },
  plugins: [tsConfigPaths(), swc.vite({ module: { type: 'es6' } })],
});
