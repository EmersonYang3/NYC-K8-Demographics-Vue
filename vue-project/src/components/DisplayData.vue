<template>
  <div>
    <h1>Raw JSON Data from API</h1>
    <pre>{{ jsonData }}</pre>
  </div>
</template>

<script>
import { fetchData } from '@/services/api';

export default {
  data() {
    return {
      jsonData: {}
    };
  },
  async created() {
    try {
      const data = await fetchData();
      this.jsonData = data;
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  }
};
</script>

<style scoped>
/* Add any styles you need here */
</style>
