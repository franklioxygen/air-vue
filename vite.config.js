import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/VU/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // import global css variables
  css: {
    preprocessorOptions: {
      css: { charset: false },
      scss: { additionalData: `@import "./src/assets/_variables.scss";` },
    },
  },
});
