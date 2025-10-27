<script setup>
</script>

<template>
  <section class="proyecto-wrapper">
    <h2>Proyecto Grupal: "Cine Los Idos"</h2>

    <p class="intro">
      En el marco de la Tecnicatura Universitaria en Programación, nuestro grupo desarrolló un
      proyecto en <strong>PSeInt</strong> llamado <strong>"Cine Los Idos"</strong>.
      Este trabajo tuvo como objetivo aplicar los conocimientos iniciales de
      programación estructurada y resolución algorítmica de problemas mediante
      pseudocódigo.
    </p>

    <div class="bloque">
      <h3>Descripción general</h3>
      <p class="texto">
        El proyecto "Cine Los Idos" consiste en la simulación del proceso de compra de entradas de cine.
        A través de un menú interactivo, el usuario puede seleccionar una película, elegir una función,
        indicar la cantidad de entradas y visualizar el total a pagar.
        Además, se incorporaron validaciones básicas para evitar errores en la carga de datos.
      </p>
    </div>

    <div class="bloque">
      <h3>Objetivo del proyecto</h3>
      <p class="texto">
        El propósito principal fue afianzar la lógica de programación, el uso de variables,
        estructuras condicionales y bucles, así como la división del problema en partes más pequeñas
        mediante subprocesos. También se buscó fomentar el trabajo en equipo y la planificación conjunta
        para lograr un programa funcional, claro y bien documentado.
      </p>
    </div>

    <div class="bloque">
      <h3>Trabajo en equipo</h3>
      <p class="texto">
        Cada integrante del grupo participó activamente en distintas etapas del desarrollo:
        desde la planificación del flujo de datos, el diseño de menús, la organización de módulos y la
        validación de resultados. Se realizaron pruebas conjuntas para asegurar que el programa cumpliera
        con todos los requisitos planteados por la consigna y que reflejara una experiencia de compra realista.
      </p>
    </div>

    <div class="bloque">
      <h3>Conclusión</h3>
      <p class="texto">
        Este proyecto marcó nuestro primer trabajo grupal en programación y nos permitió comprender la
        importancia del análisis previo, la organización del código y la colaboración entre compañeros.
        “Cine Los Idos” representa el inicio de nuestro camino dentro del desarrollo de software,
        combinando creatividad, lógica y trabajo en equipo.
      </p>
    </div>
  </section>
</template>

<style scoped>
.proyecto-wrapper {
  margin: 2rem auto;
  padding: 1.5rem;
  color: #fff;
  background: radial-gradient(circle at 20% 20%, #0a1822 0%, #0b2436 60%);
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
}

h2 {
  text-align: center;
  color: #00b5a8;
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  text-shadow: 0 3px 15px rgba(0, 255, 255, 0.4);
}

.bloque {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  margin-top: 1.25rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
}

.bloque h3 {
  color: #ff00a6;
  font-size: 1.8rem;
  margin-bottom: 0.75rem;
  text-shadow: 0 3px 10px rgba(255, 0, 166, 0.4);
}

.texto {
  color: #e5e5e5;
  font-size: 1.5rem;
  line-height: 1.5;
  font-family: 'JetBrains Mono', monospace;
}

.intro {
  text-align: center;
  font-size: 1.5rem;
  color: #cdefff;
  line-height: 1.6;
  margin-bottom: 1rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
</style>
