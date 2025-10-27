<script setup>
// Si quisieras usar los datos individuales también:
import { integrantes } from './data/IntegrantesData.js'
</script>

<template>
  <section class="educacion-wrapper">
    <h2>Formación Académica del Grupo</h2>

    <p class="intro">
      Todos los integrantes del grupo cursamos la
      <strong>Tecnicatura Universitaria en Programación</strong> en la
      <strong>Universidad Tecnológica Nacional (UTN - Facultad Regional San Rafael)</strong>.
      Compartimos el compromiso de seguir desarrollando nuestras habilidades técnicas,
      con enfoque en la calidad del software y la mejora continua.
    </p>

    <div class="edu-lista">
      <article
        v-for="persona in integrantes"
        :key="persona.id"
        class="edu-card"
      >
        <img
          :src="persona.foto"
          :alt="persona.nombre"
          class="foto"
        />
        <div class="info">
          <h3>{{ persona.nombre }}</h3>
          <p class="rol">{{ persona.rol }}</p>

          <ul class="educacion-persona">
            <li v-for="(edu, i) in persona.educacion" :key="i">
              <span class="anio">{{ edu.anio }}</span> —
              <span class="titulo">{{ edu.titulo }}</span>
              <small v-if="edu.detalle"> ({{ edu.detalle }})</small>
            </li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.educacion-wrapper {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1rem;
  color: #fff;
  text-align: center;
}

h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #00b5a8;
}

.intro {
  font-size: 1.5rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 2rem;
  color: #02012f;
}

.edu-lista {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  width: 100%;
}

@media (max-width: 768px) {
  .edu-lista {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.edu-card {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-start;
  background: #0f2027;
  background: linear-gradient(to right, #203a43, #2c5364);
  border-radius: 10px;
  padding: 1rem 1.5rem;
  box-shadow: 0 12px 30px rgba(0,0,0,.3);
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  transition: all 0.4s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

/* Efecto hover invertido */
.edu-card:hover {
  background: #ffffff;
  background: linear-gradient(to right, #f8f9fa, #ffffff);
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,.4);
  border-color: #00b5a8;
}

/* Efecto en la foto durante hover */
.edu-card:hover .foto {
  border-color: #ff00a6;
  transform: scale(1.05);
  filter: brightness(1.1);
}

/* Inversión de colores de texto durante hover */
.edu-card:hover .info h3 {
  color: #203a43;
}

.edu-card:hover .rol {
  color: #666;
}

.edu-card:hover .educacion-persona {
  color: #333;
}

.edu-card:hover .anio {
  color: #ff00a6;
}

.edu-card:hover .titulo {
  color: #203a43;
  font-weight: 600;
}

.edu-card:hover small {
  color: #666;
}

.foto {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #00b5a8;
  transition: all 0.4s ease;
}

.info h3 {
  margin: 0;
  color: #00ffff;
  transition: color 0.4s ease;
  font-size: 2rem;
}

.rol {
  color: #ccc;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  transition: color 0.4s ease;
}

.educacion-persona {
  list-style: none;
  padding: 0;
  margin: 0;
  color: #fff;
  font-size: 1.2rem;
  transition: color 0.4s ease;
}

.anio {
  font-weight: bold;
  color: #00b5a8;
  transition: color 0.4s ease;
  font-size: 1rem;
}

.titulo {
  font-weight: 500;
  color: #fff;
  transition: color 0.4s ease;
}

/* Transiciones suaves para todos los elementos afectados por hover */
.info h3,
.rol,
.educacion-persona,
.anio,
.titulo,
small {
  transition: all 0.4s ease;
}
</style>