import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { RecycleScroller } from 'vue3-virtual-scroller'
import 'vue3-virtual-scroller/dist/vue3-virtual-scroller.css'


const APP = createApp(App)

APP.use(router)
APP.use(ElementPlus)
APP.component('RecycleScroller', RecycleScroller)
APP.mount('#app')
