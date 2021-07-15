<template>
    <div class="card" v-if="nombre==ingredienteActual">
        <div class="card-header">
            Ficha
        </div>
        <div class="card-body">
            <h5 class="card-title py-2">Ingrediente: {{nombre}}</h5>
            <p class="card-text">Tipo: {{tipo}}</p>
            <p class="card-text" v-if="descripcion">Descripcion: {{descripcion}}</p>
            <p class="card-text" v-if="caracteristicas">Caracteristicas: {{caracteristicas}}</p>
            <p class="card-text" v-if="ubicacion">Ubicacion: {{ubicacion}}</p>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
    name: 'IngredienteEspecifico',
    props: {
        id: Number,
        nombre: String,
        descripcion: String,
        caracteristicas: String,
        ubicacion: String,
        imagen: String,
        tipo: String,
    },
    computed: {
        ...mapState(['ingredienteActual']),
    },
    methods: {
        ...mapMutations(['modificarIngredienteActualMutacion']),
    },
}
</script>