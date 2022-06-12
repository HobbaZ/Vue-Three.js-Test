import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //home route
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    //about route
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },

    //contact route
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },

    //login route
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },

    //signup route
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },

    //signup route
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
  ]
})

export default router
