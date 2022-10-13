import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages";

import App from "./App.vue";

createApp(App)
  .use(createRouter({ history: createWebHistory(), routes }))
  .mount("#app");
