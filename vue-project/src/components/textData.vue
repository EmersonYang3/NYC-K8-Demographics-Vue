<template>
  <div id="text-container">
    <p v-if="isEmptyObject(textData)">Loading Data...</p>
    <p v-else>{{ textData }}</p>
  </div>
</template>

<script>
export default {
  props: ['textData'],
  methods: {
    isEmptyObject(obj) {
      return Object.keys(obj).length === 0;
    }
  }
}
</script>

<style scoped>
p {
  color: white;
}
</style>
