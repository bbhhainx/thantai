import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const APP = createApp(App)

APP.use(router)
APP.use(ElementPlus)
APP.mount('#app')
