<template>
    <div class="fontRoboto">
        <h1 class="py-4 my-2 colorBackgroundSuave">Ingredientes</h1>
        <!--A partir de aca testeamos la conexión con la API, en este caso trayendo las comidas-->
        <hr>
        <IngredientesBuscador></IngredientesBuscador>
        
        <h2 class="text-center py-4">Ingredientes disponibles</h2>
        <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Tipo</th>       
                    <th scope="col">Imagen</th>
                </tr>
            </thead>
            <tbody v-for="ingrediente of ingredientes" :key="ingrediente.id_ingrediente">
                <tr>
                    <th scope="row">{{ingrediente.nombre}}</th>
                    <td>{{ingrediente.tipo}}</td>
                    <td v-if="ingrediente.imagen!=null"><img width="100" height="60" :src=ingrediente.imagen class="d-inline-block align-center" onerror="this.onerror=null;this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1024px-Imagen_no_disponible.svg.png';" alt="img"></td>
                    <td v-if="ingrediente.imagen==null"><img width="100" height="60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1024px-Imagen_no_disponible.svg.png" class="d-inline-block align-center" alt="img"></td>
                </tr>
            </tbody>
        </table>
        <div class="d-flex justify-content-center my-2" id="nomasingredientes">
            <p class="text-white text-center w-25 bg-secondary">{{ingredienteFull}}</p>
        </div>
        <button @click="agregarMasIngredientesMutacion" class="normalButton my-4">Ver más ingredientes</button>
        </div>
        <hr>
    </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex';
import IngredientesBuscador from './IngredientesBuscador.vue';

export default {
    name: 'Ingredientes',
    // Propiedades que puede recibir de un componente padre
    props: {
        
    },
    components: {
        IngredientesBuscador,
    },
    // Variables de estado, pueden cambiar en la ejecución de la página
    data: function() {
        return {
            errorIngrediente: null,
        };
    },
    // Esto se ejecuta cuando se monta la página
    mounted(){
        
    },
    // Métodos JS que se ejecutan en este archivo vue
    computed: {
        ...mapState(['ingredientes', 'ingredienteFull']),
    },
    methods: {
        ...mapMutations(['ingredienteMutacion', 'agregarMasIngredientesMutacion']),
        ...mapActions(['obtenerIngredientesAction']),
    },
    beforeMount(){
        this.obtenerIngredientesAction();
    },
}
</script>

<style>
    @import './../assets/css/fonts.css';
</style>