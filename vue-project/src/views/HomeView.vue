<template>
  <div class="home-view">
    <SearchBar />
  </div>
</template>

<script>
import SearchBar from '../components/searchBar.vue';

export default {
  components: {
    SearchBar
  },
}
</script>

<style scoped>
.home-view {
  text-align: center;
  padding: 20px;
}
</style>
