<template>
  <div class="container" id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js App :) probando si hace deploy y puedo hacer push desde git"/>-->
    <Comida nombre="Mensaje de prueba"></Comida>
    <ComidaEspecifica id=3></ComidaEspecifica>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import ComidaEspecifica from './components/ComidaEspecifica.vue'
import Comida from './components/Comida.vue';

export default {
  name: 'App',
  components: {
    //HelloWorld,
    Comida,
    ComidaEspecifica,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
