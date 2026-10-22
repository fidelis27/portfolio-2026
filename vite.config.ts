import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// base './' keeps asset URLs relative, so the same build works on
// <user>.github.io/<any-repo-name>/ without changing config.
export default defineConfig({
  base: './',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
});
