<!-- src/App.vue -->
<template>
  <div id="app">
    <SearchBar/>
  </div>
</template>

<script>
import SearchBar from './components/searchBar.vue';

export default {
  name: 'App',
  components: {
    SearchBar,
  },
}
</script>
