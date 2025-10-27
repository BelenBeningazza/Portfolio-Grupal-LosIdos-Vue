<script setup>
import { ref, computed } from 'vue'

const intereses = ref([
  'Nos une el interés por la programación, la mejora continua y la aplicación práctica del conocimiento. ' +
  'Buscamos crecer en calidad de software, automatización de pruebas, análisis de datos y trabajo en equipo, ' +
  'fusionando distintas experiencias profesionales para desarrollar soluciones creativas y funcionales.'
])


const interesesTexto = computed(() => intereses.value.join(' '))
</script>

<template>
  <div class="intereses-contenedor">
    <FondoLava />
    <p class="intereses-texto">
      {{ interesesTexto }}
    </p>
  </div>
</template>

<style scoped>
.intereses-contenedor {
    display: flex;
    position: relative;
    margin: 0 auto;
    max-width: 85%;
    padding: 1rem;
}
.intereses-texto {
  font-size: 1.6rem;       /*  cambia a gusto: 1.8rem, 2rem, etc. */
  line-height: 1.8;        /* más aire entre líneas */
  color: var(--vt-c-white-soft); /* color claro */
  text-align: center;      /* centrado */
  max-width: 80ch;         /* ancho óptimo para lectura */
  margin: 0 auto;          /* centrado horizontal */
  text-shadow: 1px 1px 4px rgba(0,0,0,.8); /* mejora contraste */
}

.contenedor-lista {
    list-style-type: none;
    padding: 1rem;
    margin-bottom: .5rem;
    color: var(--vt-c-white-soft);
    font-size: 1.4rem;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 1);
}


.item {
    margin-bottom: 1rem;
}
</style>