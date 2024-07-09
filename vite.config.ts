import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [react(), TanStackRouterVite({
    routesDirectory:'./src/app/pages',
    routeFilePrefix:'@',
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/app/components'),
      '@hooks': path.resolve(__dirname, './src/app/hooks'),
      '@pages': path.resolve(__dirname, './src/app/pages'),
      '@services': path.resolve(__dirname, './src/services'),
      '@ui': path.resolve(__dirname, './src/app/components/ui'),
      '@providers': path.resolve(__dirname, './src/app/providers'),
      '@shared': path.resolve(__dirname, './src/shared'),
    },
  },
});
