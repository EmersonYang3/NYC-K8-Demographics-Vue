<template>
  <div class="home-view">
    <SearchBar />
    <textData />
  </div>
</template>

<script>
import SearchBar from '@/components/searchBar.vue';
import textData from '@/components/textData.vue'

export default {
  components: {
    SearchBar,
    textData,
  },
}
</script>

<style scoped>
.home-view {
  text-align: center;
  padding: 20px;
}
</style>


