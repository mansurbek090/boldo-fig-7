import Blog from "@/views/BlogView.vue";
import Product from "@/views/ProductView.vue";
import Services from "@/views/ServicesView.vue";
import { createRouter, createWebHistory } from "vue-router";
import About from "../views/AboutView.vue";
import Home from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/services",
      name: "services",
      component: Services,
    },
    {
      path: "/product",
      name: "product",
      component: Blog,
    },
  ],
});

export default router;
