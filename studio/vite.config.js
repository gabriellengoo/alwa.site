// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    // ... other plugins ...
  ],
  resolve: {
    alias: {
      'react': 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
    },
  },
});
