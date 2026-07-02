// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isCloudflare = process.env.CF_PAGES === '1';

export default defineConfig({
  site: isCloudflare ? 'https://tlbelectric.ca' : 'https://enewell01.github.io',
  base: isCloudflare ? undefined : '/TLBv1',
  integrations: [sitemap()],
});
