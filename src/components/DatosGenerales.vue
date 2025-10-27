<script setup>

const title = 'Grupo Los Idos';
const descripcion = 'Tecnicos Universitarios en Programación - UTN';
const presentacion = 'Hola Bienvenidos a todos, somos un grupo de amigos amantes de la programación, unidos por la curiosidad, el trabajo en equipo y el deseo constante de aprender. Compartimos una pasión por el desarrollo de software y buscamos aplicar nuestros conocimientos para crear soluciones innovadoras, funcionales y de calidad.';

</script>

<template>
<section class="Datos personales">
    <div class = "card">
        <h1>{{ title }}</h1>
        <h2>{{ descripcion }}</h2>
        <p>{{ presentacion }} </p>

    </div>

</section>
</template>

<style scoped>
h1 {
  font-size: 3.5rem;
}
h2{
  font-size: 2rem;
}
p {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.card {
  background-color: rgb(28, 41, 52);
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  text-align: center;
}

.container-lista {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

.icon-redsocial {
  align-items: center;
  background-color: aliceblue;
  border-radius: 50%;
  padding: 2px;
  margin: 5px;
  box-shadow: 0 0 5px rgba(95, 124, 205, 0.934);
}

.icon-redsocial:hover {
  background-color: rgb(28, 41, 52);
  box-shadow: 0 0 5px rgba(251, 249, 249, 0.934);
}

h3 {
  font-size: 1.2rem;
  font-weight: 600;
}
</style>