import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
  routes: [
    {
      path: "/",
      component: () => import("@/pages/index.vue"),
      meta: {
        title: "Home",
      },
    },
  ],
});

router.beforeEach((to) => {
  const views: object = {
    home: "Home",
    about: "Sobre mim",
    projects: "Projetos",
    contact: "Contato",
  };

  const viewName = to.hash.split("#")[1];

  const title: string = views[viewName as keyof object] ?? "404 - Not found";
  document.title = title;
});

export default router;
