import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// export default defineConfig(({ command }) => {
//   const config = {
//     plugins: [react()],
//     base: '/',
//     resolve: {
//       alias: {
//         '@': path.resolve(__dirname, './src'),
//       },
//     },
//   };
//   if (command !== 'serve') {
//     config.base = '/frontendProjects/';
//   }
//   return config;
// });

export default defineConfig({
  plugins: [react()],
  base: '/frontendProjects/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
