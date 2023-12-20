import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Chefs from "../views/Chefs.vue";
import Menu from "../views/Menu.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      components: {
        default: HomeView,
        second: AboutView,
        third: Chefs,
        fourth: Menu,
      },
    },
    {
      path: "/about",
      components: {
        default: HomeView,
        second: AboutView,
        third: Chefs,
        fourth: Menu,
      },
    },
      {
      path: "/chef",
      components: {
        default: HomeView,
        second: AboutView,
        third: Chefs,
        fourth: Menu,
      },
    },
      {
      path: "/menu",
      components: {
        default: HomeView,
        second: AboutView,
        third: Chefs,
        fourth: Menu,
      },
    },
  ],
});

export default router;
