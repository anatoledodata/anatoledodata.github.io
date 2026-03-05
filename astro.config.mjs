// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://anatoledodata.github.io',
  integrations: [react()],
  output: 'static', // Esto le dice a Astro que genere archivos HTML puros
});
