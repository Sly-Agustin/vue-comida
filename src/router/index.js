import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../components/Inicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Inicio
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
