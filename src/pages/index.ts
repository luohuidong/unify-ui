import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      redirect: {
        name: "Button",
      },
    },
    {
      path: "/button",
      name: "Button",
      component: () => import("./ButtonExample.vue"),
    },
    {
      path: "/dialog",
      name: "Dialog",
      component: () => import("./DialogExample.vue"),
    },
  ],
});

export default router;
