import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import './assets/css/fonts.css';
import './assets/css/button.css';
import './assets/css/receta.css';
import './assets/css/general.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(BootstrapVue)

const store = new Vuex.Store({
    state: {
      numero: 10,
      comidasTotales: [],
      comidas: [],
      cantidadComidas:0,
      comidaFull: null,

      comidaActual: [],

      ingredientesTotales: [],
      ingredientes: [],
      cantidadIngredientes:0,
      ingredienteFull: null,

      ingredienteActual: null,

      recetaActual: [],
    },
    mutations: {
      aumentar(state, n){
        state.numero=state.numero+n;
      },
      disminuir(state){
        state.numero=state.numero-1;
      },
      comidaMutacion(state, comidas){
        state.comidasTotales = comidas;
        for(state.cantidadComidas; state.cantidadComidas<10; state.cantidadComidas++){
          state.comidas.push(state.comidasTotales[state.cantidadComidas]);
        }
      },
      agregarMasComidasMutacion(state){
        var jsonlength = Object.keys(state.comidasTotales).length;
        if (state.cantidadComidas<jsonlength-10){
          var aux=state.cantidadComidas+10;
          for(state.cantidadComidas; state.cantidadComidas<aux ;state.cantidadComidas++){
            console.log('Agregando con longitud 10');
            console.log('Longitud del json: '+jsonlength+', Longitud actual: '+state.cantidadComidas);
            state.comidas.push(state.comidasTotales[state.cantidadComidas]);
          }
        }
        else{
          if (state.cantidadComidas===jsonlength){
            console.log('No debería haber mas para agregar');
            console.log('Longitud del json: '+jsonlength+', Longitud actual: '+state.cantidadComidas);
            state.comidaFull="No hay más comidas";
          }
          else{
            console.log('Agregando longitud chica');
            state.comidas.push(state.comidasTotales[state.cantidadComidas]);
            state.cantidadComidas++;
            console.log('Longitud del json: '+jsonlength+', Longitud actual: '+state.cantidadComidas);
          }
        }
      },
      comidaEspecificaMutacion(state, comidaActual){
        state.comidaActual = comidaActual;
      },
      ingredienteMutacion(state, ingredientes){
        state.ingredientesTotales = ingredientes;
        for(state.cantidadIngredientes; state.cantidadIngredientes<10; state.cantidadIngredientes++){
          state.ingredientes.push(state.ingredientesTotales[state.cantidadIngredientes]);
        }
      },
      agregarMasIngredientesMutacion(state){
        var jsonlength = Object.keys(state.ingredientesTotales).length;
        if (state.cantidadIngredientes<jsonlength-10){
          var aux=state.cantidadIngredientes+10;
          for(state.cantidadIngredientes; state.cantidadIngredientes<aux ;state.cantidadIngredientes++){
            console.log('Agregando con longitud 10');
            console.log('Longitud del json: '+jsonlength+', Longitud actual: '+state.cantidadIngredientes);
            state.ingredientes.push(state.ingredientesTotales[state.cantidadIngredientes]);
          }
        }
        else{
          if (state.cantidadIngredientes===jsonlength){
            console.log('No debería haber mas para agregar');
            console.log('Longitud del json: '+jsonlength+', Longitud actual: '+state.cantidadIngredientes);
            state.ingredienteFull="No hay más ingredientes";
          }
          else{
            console.log('Agregando longitud chica');
            state.ingredientes.push(state.ingredientesTotales[state.cantidadIngredientes]);
            state.cantidadIngredientes++;
            console.log('Longitud del json: '+jsonlength+', Longitud actual: '+state.cantidadIngredientes);
          }
        }
      },
      modificarIngredienteActualMutacion(state, ing){
        if(state.ingredienteActual==ing){
          state.ingredienteActual=null;
        }
        else{
          state.ingredienteActual = ing;
        }
      },
      recetaMutacion(state, rec){
        state.recetaActual=rec;
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
        //const headers = { 'Access-Control-Allow-Origin':'*'};
        const datos = await fetch('https://sly-agustin-laravel.herokuapp.com/api/comidas');
        const coms = await datos.json();
        commit('comidaMutacion', coms);
      },
      obtenerComidaEspecificaAction: async function ({ commit }, id){
        const datos = await fetch('https://sly-agustin-laravel.herokuapp.com/api/comidas/'+id);
        const coms = await datos.json();
        commit('comidaEspecificaMutacion', coms);
      },
      obtenerIngredientesAction: async function ({ commit }){
        const datos = await fetch('https://sly-agustin-laravel.herokuapp.com/api/ingredientes');
        const coms = await datos.json();
        commit('ingredienteMutacion', coms);
      },
      obtenerRecetaEspecificaAction: async function ({ commit }, id){
        const datos = await fetch('https://sly-agustin-laravel.herokuapp.com/api/receta/'+id);
        const coms = await datos.json();
        commit('recetaMutacion', coms);
      }
    }
});

// Renderiza el archivo App.vue y lo pone en el div con id="app" en el archivo index.html
new Vue({
  render: h => h(App),
  router,
  store: store
}).$mount('#app')
