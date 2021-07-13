import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import './assets/css/fonts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      numero: 10,
      comidas: [],
      ingredientes: [],
      comidaActual: null,
      ingredienteActual: null,
    },
    mutations: {
      aumentar(state, n){
        state.numero=state.numero+n;
      },
      disminuir(state){
        state.numero=state.numero-1;
      },
      comidaMutacion(state, comidas){
        state.comidas = comidas;
      }
    },
    actions: {
      /* Si no hubiera que esperar a las cosas de la API y pudiera ser una funcion asincrónica
      ejecutada en cualquier momento podríamos hacer esto:
      obtenerComidasAction(context) {
        const datos = fetch('http://127.0.0.1:8000/api/comidas/');
        const coms = datos.json();
        context.commit('comidaMutacion', coms);
      }*/
      obtenerComidasAction: async function ({ commit }){
        const datos = await fetch('http://127.0.0.1:8000/api/comidas/');
        const coms = await datos.json();
        commit('comidaMutacion', coms);
      },
      obtenerComidaEspecificaAction: async function ({ commit }, id){
        const datos = await fetch('http://127.0.0.1:8000/api/comidas/'+id);
        const coms = await datos.json();
        commit('comidaMutacion', coms);
      }
    }
});

// Renderiza el archivo App.vue y lo pone en el div con id="app" en el archivo index.html
new Vue({
  render: h => h(App),
  router,
  store: store
}).$mount('#app')
