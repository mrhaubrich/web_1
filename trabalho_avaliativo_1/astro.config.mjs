import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  image: {
    remotePatterns: [{
      protocol: "https"
    }]
  },
  output: "server",
  adapter: vercel()
});
