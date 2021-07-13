<!--Es un componente de testeo, para ver si podemos traer las comidas de un state compartido con todos los
componentes
En este en particular lo que hacemos es obtener todas las comidas de la Api con hacer click en un botón
y almacenarlas en un estado global "comidas", una vez almacenadas hacemos un v-for en el cual accedemos 
a ese estado global y por cada comida disponible las listamos en orden de llegada. Funciona-->
<template>
    <div class="fontRoboto">
        <h2>Comidas con state global</h2>
        <button @click="obtenerComidasAction">Obtener comidas</button>
        <!--<button @click="$store.dispatch('obtenerComidasAction')">Obtener comidas</button>-->
        <!--<ul v-for="comida in $store.state.comidas" :key="comida.id_comida">
            <li>{{comida.nombre}}</li>
        </ul>-->
        <ul v-for="comida of comidas" :key="comida.id_comida">
            <li>{{comida.id_comida}}: {{comida.nombre}}</li>
        </ul>
    </div>
</template>

<script>
    import {mapState, mapActions, mapMutations} from 'vuex';
    export default {
        name: 'ComidaConAction',
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