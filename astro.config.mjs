// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.shedrivessocal.com',
  trailingSlash: 'always',
  build: {
    // Emit /page/index.html so every URL carries a trailing slash,
    // matching the URL rules in the blueprint.
    format: 'directory',
    // 'assets' rather than the default '_astro' so the output can also be
    // served by hosts that reserve underscore-prefixed paths.
    assets: 'assets',
  },
  compressHTML: true,
});
