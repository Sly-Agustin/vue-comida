<template>
  <div class="container" id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Comida nombre="Mensaje de prueba"/>
  </div>
</template>

<script>
import Comida from './components/Comida.vue';

export default {
  name: 'Alternativa',
  components: {
    Comida
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
