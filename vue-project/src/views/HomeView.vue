<template>
  <div class="home-view">
    <header class="header">
      <SearchBar @searchEvent="handleSearch" />
    </header>
  </div>
</template>

<script>
// Necessary Components
import SearchBar from '@/components/searchBar.vue'
import ChartDisplay from '@/components/chartDisplay.vue'
import dataMixin from '@/mixins/dataMixin'

export default {
  mixins: [dataMixin],
  components: {
    SearchBar,
    ChartDisplay,
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    handleSearch(searchQuery) {
      this.$router.push({ name: 'districtSearch', params: { district: searchQuery } })
    },
  },
}
</script>

<style src="../assets/home-search.css"></style>
