import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SearchResultsView from '@/views/SearchResultsView.vue'
import ErrorPageView from '@/views/ErrorPageView.vue'

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/searchQuery=:query/FuzzySuggestion=:fuzzySuggestion',
    name: 'Search',
    component: SearchResultsView,
    props: (route) => ({
      query: route.params.query,
      fuzzySuggestion: route.params.fuzzySuggestion,
    }),
  },
  {
    path: '/errorQuery=:query',
    name: 'Error',
    component: ErrorPageView,
    props: (route) => ({ query: route.params.query }),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
