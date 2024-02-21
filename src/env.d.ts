/// <reference types="vite/client" />
/// <reference types="@histoire/plugin-vue/components" />

import "vue/jsx";

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
