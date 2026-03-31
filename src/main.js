import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'

import App from './App.vue'

import './styles/main.css'
import '@fontsource/roboto-mono';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
