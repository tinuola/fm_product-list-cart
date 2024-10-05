import './assets/main.css'

import { createHead } from '@unhead/vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
const head = createHead()

app.use(head).use(createPinia())
// app.use(createPinia())

app.mount('#app')
