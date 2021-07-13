<template>
    <div class="fontRoboto">
        <h2>Testeo de comida específica. Comida: {{nombre}}</h2>
        <p>Descripción: {{descripcion}}</p>
        <p>Ubicación: {{ubicacion}}</p>
        <p v-if="video==null">No hay video disponible</p>
        <div v-if="video!=null"> 
            <div class="embed-responsive embed-responsive-16by9">     
            <iframe class="embed-responsive-item" :src="'https://www.youtube.com/embed/'+video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <img class="img" :src=imagen onerror="this.onerror=null;this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1024px-Imagen_no_disponible.svg.png';" alt="Imagen no disponible">
        <p>Testeando compartido en comidaespecifica: {{$store.state.numero}}</p>
        <button @click="$store.commit('aumentar', 2)">+</button>
    </div>
</template>

<script>
export default {
    name: 'ComidaEspecifica',
    props: {
        id: String,       
    },
    data: function() {
        return {
            comida:null,
            nombre: null,
            errorComida:null,
            descripcion: null,
            ubicacion: null,
            video: null,
            imagen: null,
        };
    },
    mounted(){
        var direccion ="http://127.0.0.1:8000/api/comidas/"+this.id;
        fetch(direccion)
            .then((res) => res.json())
            .then(
                (result) => {
                    this.comida = result;
                    this.nombre = this.comida.nombre;
                    this.descripcion = this.comida.descripcion;
                    this.ubicacion = this.comida.ubicacion;
                    this.imagen = this.comida.imagen;
                    this.video=this.comida.video;
                },
                (error) => {
                    this.errorComida = error;
                }
            )
    }
}
</script>