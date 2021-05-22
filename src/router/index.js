
import { createWebHistory, createRouter } from 'vue-router'
import HomeScreen from '../components/screens/HomeScreen.vue'
import AppointmentsScreen from '../components/screens/AppointmentsScreen.vue'

const routes = [
  {
    path: "/",
    name: "home-screen",
    component: HomeScreen,
  },
  {
    path: "/appointments",
    name: "appointments-screen",
    component: AppointmentsScreen,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router