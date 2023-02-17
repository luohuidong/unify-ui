import type { Plugin } from "vue";
import { Button } from "./components";

const installAllComponents: Plugin = {
  install(app, options) {
    app.component(Button.name, Button);
    console.log("🚀 ~ file: entry.ts:7 ~ install ~ Button.name", Button.name);
  },
};

export default installAllComponents;
