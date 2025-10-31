<script setup>
import img1 from '/src/components/icons/js.svg';
import img2 from '/src/components/icons/Python1.svg';
import img3 from '/src/components/icons/html-css.svg';
import img4 from '/src/components/icons/java.svg';
import img5 from '/src/components/icons/sql.svg';
import img6 from '/src/components/icons/vue.svg';
import img7 from '/src/components/icons/git.svg';
import img8 from '/src/components/icons/visual.svg';
import img9 from '/src/components/icons/mysql.svg';
import img10 from '/src/components/icons/arg.svg';
import img11 from '/src/components/icons/eeuu.svg';

//Se importa ref de vue para poder usarlo
import { ref } from 'vue';
//Se crea un array de objetos con las habilidades
//Este es un array de objetos con habilidades que se pueden modificar o agregar
const habilidades = ref([
    {// Se crea un objeto con id, nombre y habilidades
        id: 1, nombre: 'Lenguajes de Programación', habilidades: [
            //Se crea un objeto con id, nombre, nivel e icono
            { id: 1, nombre: 'JavaScript',icono: img1 },
            { id: 2, nombre: 'Python',icono: img2 },
            { id: 3, nombre: 'HTML/CSS', icono: img3 },
            { id: 4, nombre: 'Java', icono: img4 },
            { id: 5, nombre: 'SQL',icono: img5 },
            { id: 6, nombre: 'VUE',icono: img6 }
        ]
    },
    
    {
        id: 2, nombre: 'Herramientas y Software', habilidades: [
            { id: 1, nombre: 'Git', icono: img7 },
            { id: 2, nombre: 'Visual Studio Code', icono: img8}
        ]
    },
    {
        id: 3, nombre: 'Bases de Datos', habilidades: [
            { id: 1, nombre: 'MySQL', icono: img9 },
            
        ]
    },
    {
        id: 4, nombre: 'Idiomas', habilidades: [
            { id: 1, nombre: 'Español', icono: img10 },
            { id: 2, nombre: 'Inglés', icono: img11 }
        ]
    }
]);

</script>


<template>
    <!--Este componente vue funciona de esta forma:-->
    <div class="skills-contenedor">
        <!--Se recorre el array habilidades con v-for y se asigna la key habilidad.id-->
        <div v-for="habilidad in habilidades" :key="habilidad.id" class="skills-categoria">
            <!--Se muestra el nombre de la habilidad-->
            <h3>{{ habilidad.nombre }}</h3>
            <ul class="skills">
                <!--Se recorre el array habilidades con v-for y se asigna la key habilidad.id-->
                <li v-for="habilidad in habilidad.habilidades" :key="habilidad.id" class="skill">
                    <!--Se muestra el icono de la habilidad y el nombre de la habilidad con su nivel-->
                    <img :src="habilidad.icono" :alt="habilidad.nombre">
                    <!--Se muestra el icono de la habilidad y el nombre de la habilidad con su nivel-->
                    <span>{{ habilidad.nombre }}</span>
                </li>
            </ul>
        </div>
    </div>

</template>

<style scoped>
.skills-contenedor {
    padding: 2rem;
    /*Fondo cargado desde una imagen estatica en Assets*/
    /* background-image: url('/src/assets/fondo-proyectos.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; */
    /*Fondo con gradiente*/
    background: linear-gradient(-45deg, #022c1e, #0c8b45, #266d44, #a8e7c0);
    /*Fondo con color solido*/
    /* background-color: rgb(28, 41, 52); */
}

.skills-categoria {
    margin-bottom: 20px;
}

.skills-categoria h3 {
    display: flex;
    justify-content: left;
    margin-bottom: 10px;
    font-size: 1.8rem;
    color: aliceblue;
    font-weight: bold;
}

.skills {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 20px;
}

.skill {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: rgba(241, 245, 243, 0.856);
    padding: 0.3em;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(2, 151, 151, 0.963);
    flex: 1 1 200px;
    max-width: 250px;
}

.skill:hover {
    background-color: rgba(2, 151, 151, 0.963);
}

.skill img {
    width: 35px;
    height: 35px;
}

.skill span {
    font-size: 1.5rem;
    color: #333;
}

.skill:hover {
    font-size: 1.3em;
    transition: 2s ease;
}

@media (max-width: 768px) {
    .skills-categoria h3 {
        justify-content: center;
    }

    .skill {
        justify-content: center;
    }
}
</style>