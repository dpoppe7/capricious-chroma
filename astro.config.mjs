import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: "https://kleden.com", //placeholder url
    integrations: [
        tailwind({
          config: {
            // Import the path to your tailwind.config.js file
            path: './tailwind.config.js', 
          },
        }),
    ],
});
