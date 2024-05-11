import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    tailwind(),
    vue(),
    robotsTxt(),
    icon({
      include: {
        lucide: ["*"],
      },
    }),
    sentry(),
    spotlightjs(),
  ],
});
