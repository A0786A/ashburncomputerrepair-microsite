import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://ashburncomputerrepair.com",
  integrations: [
    sitemap({
      // Include lastmod dates in sitemap entries
      lastmod: new Date(),
      // Ensure proper XML formatting
      serialize(item) {
        return {
          ...item,
          // Add lastmod to each URL entry
          lastmod: new Date().toISOString(),
          // Optional: Set change frequency (how often the page changes)
          changefreq: "weekly",
          // Optional: Priority (0.0 to 1.0) - home page gets higher priority
          priority: item.url === "https://ashburncomputerrepair.com/" ? 1.0 : 0.8,
        };
      },
    }),
  ],
});
