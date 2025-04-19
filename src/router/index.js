import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Services from '@/views/ServicesView.vue'
import Single from '@/views/SingleView.vue'
import Doctors from '@/views/DoctorsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About ,
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
    },
    {
      path: '/single',
      name: 'single',
      component: Single,
    },
    {
      path: '/doctors',
      name: 'doctors',
      component: Doctors,
    },
  ],
})

export default router
