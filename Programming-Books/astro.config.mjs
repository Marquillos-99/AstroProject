import { defineConfig } from 'astro/config';
import rome from "astro-rome";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [rome(), tailwind()]
});