import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "@unify-ui/cypress-ct-lit",
      bundler: "vite",
    },
  },
});
