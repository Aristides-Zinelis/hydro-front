import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-river',
    name: 'Add river',
    component: () => import('../views/AddRiver.vue')
  },
  {
    path: '/update-river',
    name: 'updateriver',
    component: () => import('../views/UpdateRiver.vue')
  },
  {
    path: '/delete-river',
    name: 'deleteriver',
    component: () => import('../views/DeleteRiver.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
