import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  vite: {
    server: {
      middlewareMode: true,
      allowedHosts: ['prosal-letras.com', 'localhost', '127.0.0.1'],
    },
  },
});
