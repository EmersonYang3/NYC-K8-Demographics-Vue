<template>
  <div class="home-view">
    <SearchBar @searchEvent="handleSearch" />
    <div class="chart-container">
      <pieChart />
      <barGraph />
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/searchBar.vue'
import pieChart from '@/components/pieChart.vue'
import barGraph from '@/components/barGraph.vue'

export default {
  components: {
    SearchBar,
    pieChart,
    barGraph,
  },
  methods: {
    handleSearch(searchQuery) {
      console.log(`Received Input: ${searchQuery}`)
      this.$router.push({ name: 'Search', params: { query: searchQuery } })
    },
  },
}
</script>

<style scoped>
.home-view {
  text-align: center;
  padding: 20px;
}

.chart-container {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
}
</style>
