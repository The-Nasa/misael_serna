// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: Actualizar al dominio real antes de lanzar
  site: 'https://misaelserna.net',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});