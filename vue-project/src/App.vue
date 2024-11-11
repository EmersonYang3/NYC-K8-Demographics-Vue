<!-- src/App.vue -->
<template>
  <div id="app">
    <DataDisplay />
  </div>
</template>

<script>
import DataDisplay from './components/DisplayData.vue'

export default {
  name: 'App',
  components: {
    DataDisplay,
  },
}
</script>
