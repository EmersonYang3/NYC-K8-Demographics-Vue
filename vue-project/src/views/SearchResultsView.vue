<template>
  <div class="search-results-view">
    <header class="header">
      <SearchBar @searchEvent="handleSearch" />
    </header>
    <main class="main">
      <section v-if="success" class="chart-container">
        <h2>Data For District {{ districtQuery }}</h2>
        <div class="charts">
          <figure v-if="data">
            <pieChart :labels="Object.keys(data)" :values="Object.values(data)" />
          </figure>
          <figure v-if="data">
            <barChart :labels="Object.keys(data)" :values="Object.values(data)" />
          </figure>
        </div>
      </section>
      <section v-else class="error-container">
        <errorDisplay :errorMessage="errorMessage" />
      </section>
    </main>
  </div>
</template>

<script>
// Necessary Components
import SearchBar from '@/components/searchBar.vue'
import pieChart from '@/components/pieChart.vue'
import barChart from '@/components/barChart.vue'
import errorDisplay from '@/components/errorDisplay.vue'

// Necessary Services
import * as dataService from '@/services/dataService'

export default {
  props: {
    districtQuery: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      data: {},
      success: false,
      errorMessage: '',
    }
  },
  components: {
    SearchBar,
    pieChart,
    barChart,
    errorDisplay,
  },
  mounted() {
    this.getData()
  },
  watch: {
    districtQuery: 'getData',
  },
  methods: {
    async getData() {
      if (this.districtQuery.toLowerCase() === 'all') {
        this.$router.push({ path: '/' })
        return
      }
      try {
        const result = await dataService.getDataByDistrict(this.districtQuery)
        this.data = result.data
        this.success = result.success
        this.errorMessage = result.errorMessage || ''
      } catch (error) {
        this.errorMessage = `Error fetching data: ${error.message}`
        this.success = false
      }
    },
    async handleSearch(searchQuery) {
      if (searchQuery.toLowerCase() === 'all') {
        this.$router.push({ path: '/' })
      } else {
        this.$router.push({ name: 'districtSearch', params: { district: searchQuery } })
      }
    },
  },
}
</script>

<style scoped>
.chart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chart-container h2 {
  color: white;
  font-size: 1.25rem;
  font-family: 'Inter', sans-serif;
  margin-bottom: 5px;
}

.charts {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.error-container {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.errorDisplay {
  max-width: 600px;
  padding: 20px;
  border: 1px solid red;
  background-color: #ffe6e6;
  color: red;
  text-align: center;
}
</style>
