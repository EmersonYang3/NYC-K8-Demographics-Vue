<template>
  <section v-if="success" class="chart-container">
    <h2>{{ title }}</h2>
    <div class="charts">
      <figure v-if="data">
        <pieChart :labels="Object.keys(data)" :values="Object.values(data)" />
      </figure>
      <figure v-if="data">
        <barChart :labels="Object.keys(data)" :values="Object.values(data)" />
      </figure>
    </div>
  </section>
  <section v-else class="error-container">
    <errorDisplay :errorMessage="errorMessage" />
  </section>
</template>

<script>
// Necessary Components
import pieChart from '@/components/pieChart.vue'
import barChart from '@/components/barChart.vue'
import errorDisplay from '@/components/errorDisplay.vue'

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
    success: {
      type: Boolean,
      required: true,
    },
    errorMessage: {
      type: String,
      default: '',
    },
  },
  components: {
    pieChart,
    barChart,
    errorDisplay,
  },
}
</script>

<style src="../assets/home-search.css"></style>
