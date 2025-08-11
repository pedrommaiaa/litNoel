// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://yourdomain.com', // CUSTOMIZE: Replace with your domain
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    css: {
      transformer: 'postcss',
    }
  }
});
