import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SearchResultsView from '@/views/SearchResultsView.vue'

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/districts/:district',
    name: 'districtSearch',
    component: SearchResultsView,
    props: (route) => ({
      districtQuery: route.params.district,
    }),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
