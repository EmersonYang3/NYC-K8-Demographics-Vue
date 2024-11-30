<template>
  <div id="text-container">
    <p>{{ textData }}</p>
  </div>
</template>

<script>
export default {
  props: ['textData'],
}
</script>

<style lang="css" scoped>
p {
  color: white;
}
</style>
