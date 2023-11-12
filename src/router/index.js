import { createRouter, createWebHistory } from 'vue-router'
import mainpage from '../components/Welcome/WelcomeScreen.vue'
  import login from '../components/Login/LoginMain.vue'

const routes = [
  {
    path: '/',
    name: 'mainpage',
    component: mainpage
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
