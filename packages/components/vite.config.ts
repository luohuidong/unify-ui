import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import Pages from "vite-plugin-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Pages({
      dirs: "src/examples",
      importMode: "sync",
      exclude: ["**/Case*.vue"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
});
