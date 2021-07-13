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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/comidas',
    name: 'Comidas',
    component: () => import(/* webpackChunkName: "ComidaTodas" */ '../components/ComidaTodas.vue')
  },
  {
    path: '/comidas/:id',
    name: 'ComidaEspecifica',
    component: () => import(/* webpackChunkName: "ComidaTodas" */ '../components/ComidaEspecifica.vue')
  },
  {
    path: '/comidastest',
    name: 'Comidastest',
    component: () => import(/* webpackChunkName: "Comida" */ '../components/Comida.vue')
  },
  {
    path: '/comidasaction',
    name: 'Comidasaction',
    component: () => import(/* webpackChunkName: "ComidaConAction" */ '../components/ComidasTodasConAction.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
