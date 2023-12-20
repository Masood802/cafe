import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Chefs from "../views/Chefs.vue";
import Menu from "../views/Menu.vue";
import contact from "../views/contact.vue";
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
        fifth: contact,
      },
    },
    {
      path: "/about",
      components: {
        default: HomeView,
        second: AboutView,
        third: Chefs,
        fourth: Menu,
        fifth: contact,
      },
    },
    {
      path: "/chef",
      components: {
        default: HomeView,
        second: AboutView,
        third: Chefs,
        fourth: Menu,
        fifth: contact,
      },
    },
    {
      path: "/menu",
      components: {
        default: HomeView,
        second: AboutView,
        third: Chefs,
        fourth: Menu,
        fifth: contact,
      },
    },
    {
      path: "/contact",
      components: {
        default: HomeView,
        second: AboutView,
        third: Chefs,
        fourth: Menu,
        fifth: contact,
      },
    },
  ],
});

export default router;
