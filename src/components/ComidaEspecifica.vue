<template>
    <div class="fontRoboto">
        <h2 class="py-4 my-2 colorBackgroundSuave">Comida: {{comidaActual.nombre}}</h2>
        <div class="row">
            <div class="col-9">
                <img class="img mx-auto d-block img-fluid py-4" :src=comidaActual.imagen onerror="this.onerror=null;this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1024px-Imagen_no_disponible.svg.png';" alt="Imagen no disponible">
                <p v-if="comidaActual.descripcion">Descripción: {{comidaActual.descripcion}}</p>
                <p v-if="comidaActual.ubicacion">Ubicación: {{comidaActual.ubicacion}}</p>
                <div v-if="comidaActual.video!=null"> 
                    <div class="embed-responsive embed-responsive-16by9">     
                    <iframe class="embed-responsive-item" :src="'https://www.youtube.com/embed/'+comidaActual.video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <!--<p>Comida compartida: {{$store.state.comidaActual}}</p>-->
            </div>
            <div class="col-3">
                <div class="container">
                    <h3>Recetas</h3>
                    <p v-if="recetas==null">No hay recetas para esta comida</p>
                    <div v-if="recetas">
                        <ul class="list-group" v-for="receta of recetas" :key="receta.id_receta">
                            <router-link class="text-reset text-decoration-none" :to="{ name: 'Receta', params: {id_comida: receta.comida_id, id:receta.id_receta}}">
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <p>Receta de: {{receta.usuario_nombre}}</p>
                                    <span v-if="receta.cantidadVotos==0" class="badge badge-colorBackground badge-pill">No hay puntuación</span>
                                    <span v-if="receta.cantidadVotos>0" class="badge badge-colorBackground badge-pill">★ {{receta.puntuacionTotal/receta.cantidadVotos}} </span>
                                </li>
                            </router-link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex';

export default {
    name: 'ComidaEspecifica',
    props: {
        id: String,       
    },
    data: function() {
        return {
            recetas:null,
        };
    },
    computed: {
        ...mapState(['comidaActual']),
    },
    methods: {
        ...mapMutations(['comidaEspecificaMutacion']),
        ...mapActions(['obtenerComidaEspecificaAction']),
    },
    beforeMount(){
        this.obtenerComidaEspecificaAction(this.$route.params.id);
    },
    mounted(){
        var direccion = "http://127.0.0.1:8000/api/recetasDeComida/"+this.$route.params.id;
        fetch(direccion).then((res) => res.json())
            .then(
                (result) => {
                    this.recetas = result;
                },
                (error) => {
                    console.log(error);
                    this.recetas=null;
                }
            );
    },
}
</script>