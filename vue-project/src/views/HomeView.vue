<template>
  <div class="home-view">
    <header class="header">
      <SearchBar @searchEvent="handleSearch" />
    </header>
    <main class="main">
      <section v-if="success" class="chart-container">
        <h2>Data For All Available Districts</h2>
        <figure v-if="data">
          <pieChart :labels="Object.keys(data)" :values="Object.values(data)" />
        </figure>
        <figure v-if="data">
          <barChart :labels="Object.keys(data)" :values="Object.values(data)" />
        </figure>
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
import ErrorDisplay from '@/components/errorDisplay.vue'

// Necessary Services
import * as dataService from '@/services/dataService'

// Methods, Components, etc
export default {
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

  methods: {
    async getData() {
      try {
        const allDistrictResult = await dataService.getAllDistrictData()
        this.data = allDistrictResult.data
        this.success = allDistrictResult.success
        this.errorMessage = allDistrictResult.errorMessage || ''
      } catch (error) {
        this.errorMessage = `Error fetching data: ${error.message}`
        this.success = false
      }
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

.chart-container h2 {
  color: white;
  font-size: 1.25rem;
  font-family: 'Inter', sans-serif;
  margin-bottom: 5px;
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
