<template>
  <!--Render The Pie Chart Here-->
  <div id="pieChart"></div>
</template>

<script>
export default {
  mounted() {
    this.renderPieChart()
  },

  methods: {
    renderPieChart() {
      var data = [
        {
          values: [292, 487, 327, 102, 53],
          labels: ['A', 'B', 'C', 'D', 'F'],
          type: 'pie',
          sort: false,
        },
      ]

      var layout = {
        title: 'Grade Distribution',
        font: { size: 18, color: 'white' },
        height: 600,
        width: 600,
        paper_bgcolor: '#111010',
        plot_bgcolor: '#111010',
      }

      Plotly.newPlot('pieChart', data, layout)
    },
  },
}
</script>

<style lang="css" scoped></style>
