// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), vue()],

  adapter: node({
    mode: "standalone",
  }),
});
