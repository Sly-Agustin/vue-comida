<template>
    <div class="fontRoboto">
        <hr>
        <h1>Comidas</h1>
        <!--A partir de aca testeamos la conexión con la API, en este caso trayendo las comidas-->
        <hr>
        <h2 class="text-center py-4">Traer todas las comidas de la api</h2>
        <div class="row" v-if="comidas">
            <div class="col-sm-4" v-for="comida in comidas" :key="comida.id_comida">
                <router-link class="text-reset text-decoration-none" :to="{ name: 'ComidaEspecifica', params: {id: comida.id_comida}}">
                <div v-bind:id="'comidanro'+comida.id_comida" class="card bg-transparent">
                    <img v-if="comida.imagen!=null" width="200" height="200" class="card-img-top img" :src=comida.imagen onerror="this.onerror=null;this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1024px-Imagen_no_disponible.svg.png';" alt="Imagen no disponible">
                    <hr class="m-0 p-0">
                    <div class="card-body">
                        <h3 class="card-title text-left">{{comida.nombre}}</h3>
                        <p>{{comida.descripcion}}</p>
                    </div>
                </div>
                </router-link>
            </div>
        </div>
        <ul id="errorComida" v-if="errorComida">
            <p>Error: {{errorComida}}</p>
        </ul>
        <hr>
    </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex';

export default {
    name: 'Comida',
    // Propiedades que puede recibir de un componente padre
    props: {
        
    },
    // Variables de estado, pueden cambiar en la ejecución de la página
    data: function() {
        return {
            errorComida: null,
        };
    },
    // Esto se ejecuta cuando se monta la página
    mounted(){
        
    },
    // Métodos JS que se ejecutan en este archivo vue
    computed: {
        ...mapState(['comidas']),
    },
    methods: {
        ...mapMutations(['comidaMutacion']),
        ...mapActions(['obtenerComidasAction']),
    },
    beforeMount(){
        this.obtenerComidasAction();
    },
}
</script>

<style>
    @import './../assets/css/fonts.css';
</style>