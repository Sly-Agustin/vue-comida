import Vue from 'vue'
import App from './App.vue'
//import Alternativa from './Alternativa.vue'
import './assets/css/fonts.css';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

// Renderiza el archivo App.vue y lo pone en el div con id="app" en el archivo index.html
new Vue({
  render: h => h(App),
}).$mount('#app')
