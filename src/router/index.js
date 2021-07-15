import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Inicio from '../components/Inicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    //component: Home
    component: Inicio
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
    component: () => import(/* webpackChunkName: "ComidaEspecifica" */ '../components/ComidaEspecifica.vue')
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
  {
    path: '/ingredientes',
    name: 'Ingredientes',
    component: () => import(/* webpackChunkName: "Ingredientes" */ '../components/Ingredientes.vue')
  },
  {
    path: '/receta/:id_comida/:id',
    name: 'Receta',
    component: () => import(/* webpackChunkName: "Receta" */ '../components/Receta.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
