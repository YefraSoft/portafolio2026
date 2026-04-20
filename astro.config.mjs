// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap, { ChangeFreqEnum } from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://yefrasoft.com",
  server: {
    host: "0.0.0.0",
    port: 4321,
  },
  integrations: [
    sitemap({
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date(),
      chunks: {
        blog: (item) => {
          if (/blog/.test(item.url)) {
            item.changefreq = ChangeFreqEnum.WEEKLY;
            item.lastmod = new Date().toISOString();
            item.priority = 0.9;
            return item;
          }
        },
      },
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-MX",
          en: "en-US",
        },
      },
    }),
    mdx(),
  ],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
