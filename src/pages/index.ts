import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Button",
      component: () => import("./ButtonExample.vue"),
    },
  ],
});

export default router;
