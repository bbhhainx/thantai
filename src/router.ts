import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from './components/HomeView.vue'
import ResultEuro from './components/ResultEuro.vue'


const routes = [
  { path: '/', component: HomeView },
  { path: '/ket', component: ResultEuro },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})