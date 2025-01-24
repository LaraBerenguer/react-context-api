import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@context': '/src/context',
      '@components': '/src/components'
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.{test,spec}.ts', '**/*.{test,spec}.tsx'],
  },
  server: {
    host: "0.0.0.0",
    port: 80
  }
});
