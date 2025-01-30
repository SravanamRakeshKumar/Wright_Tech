import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {}, // This prevents "process is not defined" errors
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

