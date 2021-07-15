<template>
    <div class="fontRoboto">
        <h1 class="py-4 my-2 colorBackgroundSuave">Receta de {{comidaActual.nombre}}</h1>
        <hr>
        <h5>Autor: {{recetaActual.receta.usuario_nombre}}</h5>
        <div class="row">
            <div class="col-sm-9">
                <div :v-if="recetaActual">
                    <div class="py-4" v-if="recetaActual.receta.video">
                        <h3 class="py-2">Video explicativo</h3>
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" :src="'https://www.youtube.com/embed/'+recetaActual.receta.video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>


                    <div class="py-4" v-for="elemento in recetaActual.pasos" :key="elemento.id_paso">
                        <h3>Paso {{elemento.numeroDePaso}}: {{elemento.titulo}}</h3>
                        <textarea class="form-control" rows="3" disabled :value=elemento.descripcion></textarea>
                    </div>      
                </div>
            </div>
            <div class="col-sm-3 border-left">
                <h4 class="py-2">Ingredientes necesarios:</h4>
                <div class="py-4">       
                <div v-for="ingrediente in recetaActual.seUtilizan" :key="ingrediente.id_utilizaen">
                    <li class="listaIngredientes">
                        <span class="text-uppercase"><span>{{ingrediente.nombreIngrediente}} </span></span>
                        <span class="ingredienteCantidad font-weight-bold">{{ingrediente.cantidad}} <abbr title=""></abbr></span>
                    </li>
                </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions, mapMutations} from 'vuex';

    export default {
        name: 'Receta',
        data: function() {
            return {
                
            };
        },
        beforeMount(){
            this.obtenerRecetaEspecificaAction(this.$route.params.id);
            this.obtenerComidaEspecificaAction(this.$route.params.id_comida);
        },
        computed: {
            ...mapState(['recetaActual', 'comidaActual']),
        },
        methods: {
            ...mapMutations(['recetaMutacion', 'comidaEspecificaMutacion']),
            ...mapActions(['obtenerRecetaEspecificaAction', 'obtenerComidaEspecificaAction']),
        },
    }
</script>