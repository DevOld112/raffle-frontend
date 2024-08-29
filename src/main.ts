import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import "aos/dist/aos.css"
import formkitConfig from '../formkit.config'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useToast } from 'vue-toast-notification'
import './index.css'

import App from './App.vue'
import router from './router'

import "vue-toast-notification/dist/theme-sugar.css"

const $toast = useToast({
    duration: 3000,
    position: 'top-right'
})




const app = createApp(App)


app.use(VueSweetalert2);
app.use(createPinia())
app.use(router)
app.use(plugin, defaultConfig(formkitConfig))
app.provide('toast', $toast)



app.mount('#app')

