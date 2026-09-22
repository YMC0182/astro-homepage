import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({

  site: "https://wo.jb18.cm",

  devToolbar: {
		enabled: false
		},

	server: {
		host: true,
		port: 4321,
	},

  vite: {
    plugins: [tailwindcss()]
  }
});