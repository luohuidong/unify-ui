import type { Plugin } from "vue";
import { UniButton } from "./components";

const installAllComponents: Plugin = {
  install(app, options) {
    app.component(UniButton.name, UniButton);
    console.log("🚀 ~ file: entry.ts:7 ~ install ~ Button.name", UniButton.name);
  },
};

export default installAllComponents;
