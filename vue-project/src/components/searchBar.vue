<template>
  <form class="search-container" @submit.prevent="searchEvent">
    <label for="searchField" class="hidden">Search</label>
    <input
      id="searchField"
      ref="searchForm"
      class="search-bar"
      type="text"
      placeholder="Search by program types...."
      v-model="searchQuery"
    />
    <button type="submit" class="search-button">Search</button>
    <p v-if="warningMessage" class="warning-message">{{ warningMessage }}</p>
  </form>
</template>


<script>
export default {
  data() {
    return {
      searchQuery: '',
      warningMessage: '',
    }
  },
  methods: {
    searchEvent() {
      if (this.searchQuery.trim() !== '') {
        this.$emit('searchEvent', this.searchQuery)
        this.warningMessage = ''
      } else {
        this.warningMessage = 'Please enter a search.'
      }
    },
  },
}
</script>

<style scoped>
.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search-bar {
  width: 100%;
  max-width: 450px;
  height: 50px;
  border: none;
  background-color: #353340;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 500;
  padding: 0 40px 0 16px;
  box-shadow: 0 0 0 2px rgba(134, 140, 160, 0.02);
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23717790c7'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e");
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 96%;
  color: #fff;
}

.search-button {
  display: none;
}

.warning-message {
  font-family: 'Inter', sans-serif;
  color: red;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: -10px;
}

.hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

</style>
