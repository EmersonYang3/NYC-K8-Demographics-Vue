<template>
  <div class="home-view">
    <SearchBar @search="recieveInput"/>
  </div>
</template>

<script>
import SearchBar from '../components/searchBar.vue';

export default {
  components: {
    SearchBar
  },
  methods: {
    recieveInput(query) {
      console.log(query)
    }
  }
}
</script>

<style scoped>
.home-view {
  text-align: center;
  padding: 20px;
}
</style>
