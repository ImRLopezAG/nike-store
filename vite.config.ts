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
      '@components': path.resolve(__dirname, './src/app/components'),
      '@ui': path.resolve(__dirname, './src/app/components/ui'),
      '@hooks': path.resolve(__dirname, './src/app/hooks'),
      '@context': path.resolve(__dirname, './src/app/context'),
      '@providers': path.resolve(__dirname, './src/app/providers'),
      '@schemas': path.resolve(__dirname, './src/shared/schemas'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@services': path.resolve(__dirname, './src/service'),
    },
  },
});
