import type { Plugin } from "vue";
import { EzButton } from "./components";

const installAllComponents: Plugin = {
  install(app, options) {
    app.component(EzButton.name, EzButton);
    console.log("🚀 ~ file: entry.ts:7 ~ install ~ Button.name", EzButton.name);
  },
};

export default installAllComponents;
