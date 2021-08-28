import { createApp, useSSRContext } from 'vue'
import DefaultLayout from './layouts/DefaultLayout.vue'
import './assets/index.css'
import store from './store'
import router from './router'

createApp(DefaultLayout).use(store).use(router).mount('#app')
