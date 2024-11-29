<template>
  <!-- Render The Bar Chart Here -->
  <div id="barChart"></div>
</template>

<script>
export default {
  mounted() {
    this.renderBarChart()
  },

  methods: {
    renderBarChart() {
      const data = [
        {
          x: ['A', 'B', 'C', 'D', 'F'],
          y: [292, 487, 327, 102, 53],
          type: 'bar',
        },
      ]

      const layout = {
        title: {
          text: 'Grade Distribution',
          font: {
            size: 18,
            color: 'white',
          },
        },
        height: 600,
        width: 600,
        paper_bgcolor: '#111010',
        plot_bgcolor: '#111010',
        xaxis: {
          title: 'Grades',
          titlefont: {
            size: 16,
            color: 'white',
          },
          tickfont: {
            size: 14,
            color: 'white',
          },
        },
        yaxis: {
          title: 'Count',
          titlefont: {
            size: 16,
            color: 'white',
          },
          tickfont: {
            size: 14,
            color: 'white',
          },
        },
      }

      Plotly.newPlot('barChart', data, layout)
    },
  },
}
</script>
