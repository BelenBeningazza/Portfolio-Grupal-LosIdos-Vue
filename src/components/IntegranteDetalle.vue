<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { integrantes } from './data/IntegrantesData.js'

const route = useRoute()

const persona = computed(() => {
  const idNumber = Number(route.params.id)
  return integrantes.find(p => p.id === idNumber)
})
</script>

<template>
  <section class="detalle-wrapper" v-if="persona">
    <div class="head">
      <img
        :src="persona.foto"
        :alt="persona.nombre"
        class="foto"
      />

      <div class="texto">
        <h2>{{ persona.nombre }}</h2>
        <p class="rol">{{ persona.rol }}</p>
        <p class="ubi">{{ persona.ubicacion }}</p>
        
        <!-- Iconos de redes sociales -->
        <div class="social-icons">
          <a 
            v-if="persona.linkedin" 
            :href="persona.linkedin" 
            target="_blank" 
            class="social-link"
            aria-label="LinkedIn"
          >
            <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span class="social-text">LinkedIn</span>
          </a>
          <a 
            v-if="persona.email" 
            :href="`mailto:${persona.email}`" 
            class="social-link"
            aria-label="Email"
          >
            <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
            </svg>
            <span class="social-text">Email</span>
          </a>
        </div>
      </div>
    </div>

    <div class="edu">
      <h3>Educación / Formación</h3>
      <ul class="edu-lista">
        <li
          v-for="estudio in persona.educacion"
          :key="estudio.anio + estudio.titulo"
          class="edu-item"
        >
          <div class="anio">{{ estudio.anio }}</div>
          <div class="detalle">
            <div class="titulo">{{ estudio.titulo }}</div>
            <div class="extra" v-if="estudio.detalle">{{ estudio.detalle }}</div>
          </div>
        </li>
      </ul>
    </div>

    <router-link class="volver" to="/integrantes">← Volver a Integrantes</router-link>
  </section>

  <section v-else class="detalle-wrapper">
    <p>No se encontró la persona.</p>
    <router-link class="volver" to="/integrantes">← Volver a Integrantes</router-link>
  </section>
</template>

<style scoped>
.detalle-wrapper {
  max-width: 800px;
  margin: 2rem auto;
  background: #fff;
  color: #000;
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0,0,0,.15);
  padding: 1.5rem;
}

.head {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.foto {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 8px 20px rgba(0,0,0,.2);
}

.texto h2 {
  margin: 0 0 .5rem;
  color: #111;
}

.rol {
  margin: 0 0 .25rem;
  color: #444;
  font-size: .95rem;
}

.ubi {
  margin: 0;
  color: #666;
  font-size: .8rem;
}


.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  background: #f5f5f5;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;
  font-size: 0.9rem;
}

.social-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.986);
}

.social-link:nth-child(1):hover {
  background: #0077b5;
  color: white;
}

.social-link:nth-child(2):hover {
  background: #ea4335;
  color: white;
}

.social-icon {
  width: 18px;
  height: 18px;
}

.social-text {
  font-weight: 500;
}

.edu h3 {
  color: #ff00a6;
  margin-bottom: .75rem;
}

.edu-lista {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  display: grid;
  gap: 1rem;
}

.edu-item {
  background: #f7fafa;
  border-radius: 8px;
  border-left: 4px solid #00b5a8;
  padding: .75rem 1rem;
  display: flex;
  gap: 1rem;
}

.anio {
  font-weight: 600;
  color: #00b5a8;
  min-width: 3.5rem;
}

.titulo {
  font-weight: 600;
  color: #222;
}

.extra {
  color: #444;
  font-size: .85rem;
  margin-top: .25rem;
}

.volver {
  font-size: .9rem;
  font-weight: 600;
  color: #0066cc;
  text-decoration: none;
}

.volver:hover {
  text-decoration: underline;
}
</style>