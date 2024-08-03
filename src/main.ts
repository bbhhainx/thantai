import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import ElementPlus from 'element-plus'
import { RecycleScroller } from 'vue3-virtual-scroller'



const APP = createApp(App)

APP.use(router)
APP.use(ElementPlus)
APP.component('RecycleScroller', RecycleScroller)
APP.mount('#app')
