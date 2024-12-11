<template>
  <div class="search-results-view">
    <header class="header">
      <SearchBar @searchEvent="handleSearch" />
    </header>
    <main class="main">
      <ChartDisplay
        :title="'Data For District ' + districtQuery"
        :data="data"
        :success="success"
        :errorMessage="errorMessage"
      />
    </main>
  </div>
</template>

<script>
// Necessary Components
import SearchBar from '@/components/searchBar.vue'
import ChartDisplay from '@/components/chartDisplay.vue'
import dataMixin from '@/mixins/dataMixin'

export default {
  props: {
    districtQuery: {
      type: String,
      required: true,
    },
  },
  mixins: [dataMixin],
  components: {
    SearchBar,
    ChartDisplay,
  },
  mounted() {
    this.fetchData(this.districtQuery)
  },
  watch: {
    districtQuery: 'fetchData',
  },
  methods: {
    handleSearch(searchQuery) {
      if (searchQuery.toLowerCase() === 'all') {
        this.$router.push({ path: '/' })
      } else {
        this.$router.push({ name: 'districtSearch', params: { district: searchQuery } })
      }
    },
  },
}
</script>

<style src="../assets/home-search.css"></style>
