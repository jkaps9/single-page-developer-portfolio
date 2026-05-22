// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://jkaps9.github.io",
  base: "/single-page-developer-portfolio",
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Space Grotesk",
      cssVariable: "--font-space-grotesk",
      weights: [500, 700],
    },
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "/src/styles/_variables.scss" as *;
          @use "/src/styles/_mixins.scss" as *;
          `,
        },
      },
    },
  },
});
