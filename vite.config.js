import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/air-vue/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // import global css variables
  css: {
    preprocessorOptions: {
      // scss: { additionalData: `@import "./src/assets/_variables.scss";` },
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.js"),
      name: "air-vue",
      fileName: (format) => `build.${format}.ts`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
