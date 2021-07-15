<template>
    <div>
        <h3>Desea buscar un ingrediente en específico? O alguno que sea parecido?</h3>
        <input type="text" id="busquedaIngredientes" name="busquedaIngredientes" class="form-control" placeholder="Ingrese valor">
        <button class="normalButton my-2" @click="buscarIngredientesApi">Buscar</button>
        <div class="col-sm-4" v-for="ingrediente in resultadoBusquedaIngredientes" :key="ingrediente.id_ingrediente">         
            <div v-bind:id="'ingredientebuscadoID'+ingrediente.id_ingrediente" @click="setearIngredienteActual(ingrediente.id_ingrediente, ingrediente.nombre)">
                {{ingrediente.nombre}} | <button class="btn" @click="modificarIngredienteActualMutacion(ingrediente.nombre)">detalles</button>
                <IngredienteEspecifico :nombre=ingrediente.nombre :id=ingrediente.id_ingrediente :descripcion=ingrediente.descripcion :caracteristicas=ingrediente.caracteristicas :ubicacion=ingrediente.ubicacion :imagen=ingrediente.imagen :tipo=ingrediente.tipo />
            </div>
        </div>
    </div>
</template>

<script>
import IngredienteEspecifico from './IngredienteEspecifico.vue';
import {mapState, mapMutations} from 'vuex';

export default {
    name: 'IngredientesBuscador',
    data: function(){
        return {
            resultadoBusquedaIngredientes: null,
            ingredienteNombreActual: null,
        }
    },
    components: {
        IngredienteEspecifico,
    },
    computed: {
        ...mapState(['ingredienteActual']),
    },
    methods: {
        ...mapMutations(['modificarIngredienteActualMutacion']),

        buscarIngredientesApi: function() {
            var inputVal = document.getElementById("busquedaIngredientes").value;
            var direccion ="http://127.0.0.1:8000/api/busqueda/ingredientes/"+inputVal;
            fetch(direccion)
                .then((res) => res.json())
                .then(
                    (result) => {
                        this.resultadoBusquedaIngredientes = result;
                    },
                    (error) => {
                        console.log(error);
                        this.resultadoBusquedaIngredientes = null;
                    }
                );
        },
        setearIngredienteActual: function(id_ingrediente, nombre) {
            if(nombre==this.ingredienteNombreActual){
                this.ingredienteNombreActual=null;
            }
            this.ingredienteNombreActual=nombre;
        }
    },
}
</script>