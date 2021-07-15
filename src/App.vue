<template>
  <div class="container" id="app">
    <NavbarApp/>
    <router-view :key="$route.path"/>

    <!--<ComidasConAction></ComidasConAction>-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App :) probando si hace deploy y puedo hacer push desde git"/>-->
    <!--<Comida nombre="Mensaje de prueba"></Comida>-->
    <!--<ComidaEspecifica id=3></ComidaEspecifica>-->

  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import ComidaEspecifica from './components/ComidaEspecifica.vue'
//import Comida from './components/Comida.vue';
//import ComidasConAction from './components/ComidasConAction.vue';
import NavbarApp from './components/NavbarApp.vue';

export default {
  name: 'App',
  components: {
    //HelloWorld,
    //Comida,
    //ComidaEspecifica,
    //ComidasConAction,
    NavbarApp,
  },
}
</script>


