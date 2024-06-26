/// <reference types="vitest" />

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import ViteYaml from "@modyfi/vite-plugin-yaml";

import packagejson from "./package.json";

const peerdependencies = Object.keys(packagejson.peerDependencies);
const dependencies = Object.keys(packagejson.dependencies);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("u-"),
        },
      },
    }),
    vueJsx(),
    ViteYaml(),
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: "happy-dom",
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [...peerdependencies, ...dependencies],
    },
  },
});
