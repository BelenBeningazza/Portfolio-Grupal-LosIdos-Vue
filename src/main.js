import { createApp } from 'vue'
import App from './App.vue'
import router from './Router/index.js'   // 👈 esta es la ruta correcta (con mayúscula)

import './assets/main.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
