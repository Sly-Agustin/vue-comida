import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        numero: 10,
        comidas: [],
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
        obtenerComidasAction: async function ({ commit }){
            const datos = await fetch('https://sly-agustin-laravel.herokuapp.com/api/comidas/');
            const coms = await datos.json();
            commit('comidaMutacion', coms);
        }
    },
})