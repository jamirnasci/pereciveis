import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/lara'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura,

        options: {
            darkModeSelector: false,
        }
    },
})
app.mount('#app')
