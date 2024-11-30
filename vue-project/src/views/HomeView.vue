<template>
  <div class="home-view">
    <SearchBar @searchEvent="handleSearch" />
    <div class="chart-container"></div>
  </div>
</template>

<script>
import SearchBar from '@/components/searchBar.vue'

export default {
  components: {
    SearchBar,
  },

  methods: {
    handleSearch(searchQuery) {
      console.log(`Received Input: ${searchQuery}`)
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
