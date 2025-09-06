// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://litnoel.com', // Your custom domain
  // base: '/website', // CUSTOMIZE: Uncomment and set to your repo name if not using custom domain
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    css: {
      transformer: 'postcss',
    }
  }
});
