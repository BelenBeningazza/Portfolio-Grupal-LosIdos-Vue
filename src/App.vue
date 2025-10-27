<script setup>
import NavBar from './components/NavBar.vue'
import DatosGenerales from './components/DatosGenerales.vue'
import Integrantes from './components/IntegrantesC.vue'
import Educacion from './components/EducacionC.vue'
import Proyectos from './components/ProyectosC.vue'
import Habilidades from './components/HabilidadesC.vue'
import Intereses from './components/InteresesC.vue'


</script>

<template>
  <div id="top">
    <header>
      <!-- Barra de navegación -->
      <NavBar />
      <!-- Datos generales -->
      <DatosGenerales />
    </header>

    <main>
      <!-- Integrantes -->
      <section id="integrantes">
        <h2>Integrantes</h2>
        <Integrantes />
      </section>

      <!-- Educación -->
      <section id="educacion">
        <h2>Educación – Cursos</h2>
        <Educacion />
      </section>

      <!-- Proyectos -->
      <section id="proyectos">
        <h2>Proyectos</h2>
        <Proyectos />
      </section>
      <!-- Habilidades -->
      <section id="habilidades">
        <h2>Habilidades</h2>
        <Habilidades />
      </section>
      <!-- Intereses -->
      <section id="Intereses">
        <h2>Intereses</h2>
        <Intereses />
      </section>


    </main>
        <footer>
        <a href="#top">Inicio</a>
        <p>© 2025 Grupo Los Idos - Portafolio web </p>
    </footer>
  </div>

</template>


