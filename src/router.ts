import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './components/HomeView.vue'
import ResultEuro from './components/ResultEuro.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/ket-Qua-Bong-Da-Euro', component: ResultEuro },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})