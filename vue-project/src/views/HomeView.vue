<template>
  <div class="home-view">
    <header>
      <SearchBar @searchEvent="handleSearch" />
    </header>
    <main>
      <section class="chart-container"></section>
    </main>
  </div>
</template>

<script>
import SearchBar from '@/components/searchBar.vue'
import * as dataService from '@/services/dataService'

export default {
  data() {
    return {
      data: null,
      success: false,
    }
  },

  components: {
    SearchBar,
  },

  mounted() {
    this.getData()
  },

  methods: {
    async getData() {
      const districtResult = await dataService.getDataByDistrict('1')
      console.log(districtResult)

      const allDistrictResult = await dataService.getAllDistrictData()
      this.data = allDistrictResult.data
      this.success = allDistrictResult.success
    },

    async handleSearch(searchQuery) {
      const districtResult = await dataService.getDataByDistrict(searchQuery)
      console.log(districtResult)
    },
  },
}
</script>

<style scoped>
.home-view {
  text-align: center;
  padding: 20px;
  overflow-x: hidden;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
}
</style>
