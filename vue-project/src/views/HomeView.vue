<template>
  <div class="home-view">
    <header>
      <SearchBar @searchEvent="handleSearch" />
    </header>
    <main>
      <article>
        <textData :textData="data" />
      </article>
      <section class="chart-container"></section>
    </main>
  </div>
</template>

<script>
import SearchBar from '@/components/searchBar.vue'
import textData from '@/components/textData.vue'
import { fetchData } from '@/services/dataService'

export default {
  data() {
    return {
      data: {},
    }
  },

  components: {
    SearchBar,
    textData,
  },

  mounted() {
    this.getData()
  },

  methods: {
    async getData() {
      this.data = await fetchData()
    },

    handleSearch(searchQuery) {
      console.log(`Received Input: ${searchQuery}`)
    },
  },
}
</script>

<style scoped>
.home-view {
  text-align: center;
  padding: 20px;
  overflow-x: hidden;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chart-container {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
}
</style>
