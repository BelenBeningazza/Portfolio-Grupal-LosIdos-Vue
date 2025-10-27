<script setup>
import { integrantes } from './data/IntegrantesData.js'
</script>

<template>
  <section class="integrantes-wrapper">
    <ul class="integrantes-lista">
      <li
        v-for="persona in integrantes"
        :key="persona.id"
        class="integrante-card"
      >
        <img
          :src="persona.foto"
          :alt="persona.nombre"
          class="integrante-foto"
        />

        <div class="integrante-info">
          <h3>{{ persona.nombre }}</h3>
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
            </a>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.integrantes-wrapper {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1rem;
  color: #000;
}

.integrantes-wrapper h2 {
  color: #ff00a6;
  margin-bottom: 1rem;
  text-align: center;
}

.integrantes-lista {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 1.5rem;
  padding: 0;
  margin: 0;
  width: 100%;
}

.integrante-card {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.07);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  min-height: 180px;
  color: #000;
}

.integrante-card:hover {
  background: #000;
  color: #fff;
  transform: translateY(-5px);
}

/*Aplicamos invert solo a los elementos de texto específicos */
.integrante-card:hover .integrante-info h3,
.integrante-card:hover .integrante-info .rol,
.integrante-card:hover .integrante-info .ubi {
  filter: invert(1);
}

.integrante-card:hover .integrante-foto {
  filter: invert(0) !important;
}

.integrante-foto {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #fff;
  position: relative;
  vertical-align: middle;
  box-shadow: 0 10px 24px rgba(0,0,0,.2);
}

.integrante-info h3 {
  font-size: 2rem;
  margin: 0 0 .25rem;
  color: #111;
  transition: filter 0.3s ease;
}

.rol {
  font-size: 1.1rem;
  color: #444;
  margin: 0 0 .25rem;
  transition: filter 0.3s ease;
}

.ubi {
  font-size: .8rem;
  color: #666;
  margin: 0 0 .75rem;
  transition: filter 0.3s ease;
}

/* Estilos para los iconos sociales */
.social-icons {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #f5f5f5;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;
}

.social-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
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
  transition: all 0.3s ease;
}

/* SOLUCIÓN: Estilos específicos para hover de la tarjeta */
.integrante-card:hover .social-link {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border-color: rgba(255, 255, 255, 0.4);
}

.integrante-card:hover .social-link .social-icon {
  color: white;
}

.integrante-card:hover .social-link:hover {
  background: white;
  color: #333;
}

.integrante-card:hover .social-link:hover .social-icon {
  color: #333;
}
</style>