<template>
  <div class="home-view">
    <header class="header">
      <SearchBar @searchEvent="handleSearch" />
    </header>
    <main class="main">
      <section class="chart-container">
        <figure v-if="data">
          <pieChart :labels="Object.keys(data)" :values="Object.values(data)" />
        </figure>
        <figure v-if="data">
          <barChart :labels="Object.keys(data)" :values="Object.values(data)" />
        </figure>
      </section>
    </main>
  </div>
</template>

<script>
// Necessary Components
import SearchBar from '@/components/searchBar.vue'
import pieChart from '@/components/pieChart.vue'
import barChart from '@/components/barChart.vue'

// Necessary Services
import * as dataService from '@/services/dataService'

// Methods, Components, etc
export default {
  data() {
    return {
      data: {},
      success: false,
    }
  },

  components: {
    SearchBar,
    pieChart,
    barChart,
  },

  mounted() {
    this.getData()
  },

  methods: {
    async getData() {
      const allDistrictResult = await dataService.getAllDistrictData()
      this.data = allDistrictResult.data
      this.success = allDistrictResult.success
    },

    async handleSearch(searchQuery) {
      this.$router.push({ name: 'districtSearch', params: { district: searchQuery } })
    },
  },
}
</script>

<style scoped>
.chart-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
