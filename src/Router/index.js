import { createRouter, createWebHistory } from 'vue-router'

import DatosGenerales   from '../components/DatosGenerales.vue'
import Integrantes      from '../components/IntegrantesC.vue'
import IntegranteDetalle from '../components/IntegranteDetalle.vue' // 🔹 nuevo
import Educacion        from '../components/EducacionC.vue'
import Proyectos        from '../components/ProyectosC.vue'
import Habilidades      from '../components/HabilidadesC.vue'
import Intereses        from '../components/InteresesC.vue'


const routes = [
  { path: '/',              redirect: '/datos' },
  { path: '/datos',         component: DatosGenerales },

  // lista de integrantes
  { path: '/integrantes',   component: Integrantes },

  // perfil individual por id
  { path: '/integrantes/:id', name: 'integrante', component: IntegranteDetalle, props: true },

  { path: '/educacion',     component: Educacion },
  { path: '/proyectos',     component: Proyectos },
  { path: '/habilidades',   component: Habilidades },
  { path: '/intereses',     component: Intereses },

  { path: '/:pathMatch(.*)*', redirect: '/datos' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})

export default router
