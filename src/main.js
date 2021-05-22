import { createApp, useSSRContext } from 'vue'
import DefaultLayout from './layouts/DefaultLayout.vue'
import './assets/index.css'
import router from '../src/router'

createApp(DefaultLayout).use(router).mount('#app')
