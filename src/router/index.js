import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
import Services from "@/views/ServicesView.vue";
import Product from "@/views/ProductView.vue";

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
      component: Product,
    },
  ],
});

export default router;
