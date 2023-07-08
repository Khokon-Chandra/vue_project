import { createRouter, createWebHistory } from 'vue-router'


import WebsiteLayout from '../layouts/WebsiteLayout.vue'
import GuestLayout from '../layouts/GuestLayout.vue'
import AppLayout from '../layouts/AppLayout.vue'

import HomeView from '../views/Website/HomeView'
import AboutView from '../views/Website/AboutView'


import Dashboard from '../views/Application/Dashboard'

import Login from '../views/Auth/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path:'/',
      name:'website',
      component: WebsiteLayout,
      children:[
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/about',
          name: 'about',
          component: AboutView
        },
      ]
    },


    {
      path: '/admin',
      name: 'app',
      component: AppLayout,
      children:[
        {
          path:'/',
          name:'dashboard',
          component: Dashboard,
        }
      ]
    },


    {
      path:'/',
      name:'guest',
      component:GuestLayout,
      children:[
        {
          path: '/login',
          name: 'login',
          component: Login
        },
      ]
    }

  ]
})

export default router
