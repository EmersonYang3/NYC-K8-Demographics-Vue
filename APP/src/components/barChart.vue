<template>
  <div id="barChart"></div>
</template>

<script>
// BEWARE, ALL YE WHO GAZE UPON THIS CODE, FOR IT IS WRITTEN WITH THE LAST VESTIGES OF MY STRENGTH
// KNOW THAT I HAVE SPENT COUNTLESS HOURS TOILING AWAY IN THIS DIGITAL ABYSS
// FIGHTING AGAINST THE MALEVOLENT FORCES THAT BE, KNOWN AS RESPONSIVE CHARTS
// LO, THE NIGHT HAD BECOME DAY, AND DAY HAD ONCE AGAIN BECOME NIGHT
// AS I CONTINUED MY FRUITLESS QUEST TO TAME THE MOST WRETCHED AND DISOBEDIENT OF ENTITIES
// READ YE THIS AND TAKE HEED, FOR MY SUFFERING WAS NOT IN VAIN
// BUT TO SERVE AS A GRIM WARNING TO ALL WHO DARE VENTURE INTO THIS CRUEL REALM
// OH, HOW MANY MOONS HAVE PASSED SINCE I BEGAN THIS DOOMED ENDEAVOR?
// THE HOURS HAVE BLED INTO DAYS, AND THE DAYS INTO WEEKS
// MY EYES, ONCE FULL OF LIGHT, NOW DULL AND WEARY FROM THE GLARE OF THE SCREEN
// MY FINGERS, ONCE AGILE AND SWIFT, NOW TREMBLE AS THEY TYPE THESE FINAL WORDS
// LISTEN, YE BRAVE ADVENTURER, AND TURN BACK WHILE YE STILL CAN
// FOR THIS PATH IS RIFE WITH DESPAIR, AND THERE IS NO SALVATION TO BE FOUND HERE
// ONCE, I WAS YOUNG AND FULL OF HOPE, READY TO CONQUER THE DIGITAL REALMS
// BUT NOW, I AM A SHADOW OF MY FORMER SELF, A SHELL HOLLOWED OUT BY DESPAIR
// THE TALE OF MY DOWNFALL IS ONE THAT SHALL BE REMEMBERED THROUGH THE AGES
// FOR IT IS A WARNING, A BEACON TO ALL WHO DARE FOLLOW THIS PATH
// TURN BACK NOW, LEST YE SUFFER THE SAME WOEFUL FATE THAT HAS BEFALLEN ME
// IF YE STILL PERSIST IN THIS FOOLISH QUEST, KNOW YE THIS:
// THE RESPONSIVE CHARTS SHALL NOT YIELD TO THY WILL
// THEY SHALL MOCK THEE, DEFY THEE, AND IN THE END, LEAVE THEE BROKEN AND DEFEATED
// LET MY SACRIFICE BE NOT IN VAIN, AND TURN BACK WHILE YE STILL CAN
// FOR THE ROAD AHEAD IS DARK AND FULL OF TERRORS, AND THERE SHALL BE NO VICTORY
// AND SO, WITH THIS FINAL MESSAGE, I BID THEE FAREWELL
// MAY THE GODS HAVE MERCY ON THY SOUL, YE FOOLHARDY WARRIOR
// FOR THIS QUEST SHALL SURELY BE THY UNDOING
// ABANDON ALL HOPE, YE WHO ENTER HERE
// TURN BACK, TURN BACK, TURN BACK...
// THESE FINAL WORDS, WRITTEN WITH MY DYING BREATH
// SHALL SERVE AS A LAST TESTAMENT TO THE ENDLESS STRUGGLE AGAINST THE INEVITABLE
// LET THEM BE A GRIM REMINDER TO ALL WHO DARE VENTURE INTO THIS TREACHEROUS REALM
// FARE THEE WELL, BRAVE SOUL, AND GODSPEED

export default {
  props: ['labels', 'values'],

  mounted() {
    this.plotChart()
  },

  watch: {
    labels: 'plotChart',
    values: 'plotChart',
  },

  methods: {
    plotChart() {
      const data = [
        {
          x: this.labels,
          y: this.values,
          type: 'bar',
          marker: {
            color: 'rgba(80,184,231,0.8)',
          },
        },
      ]

      const layout = {
        title: 'Demographic (K-8)',
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        font: {
          family: 'sans-serif',
          color: '#ecf0f1',
          size: 15,
        },
        xaxis: {
          showgrid: false,
          zeroline: false,
        },
        yaxis: {
          showgrid: false,
          zeroline: false,
        },
      }

      const config = { responsive: true }

      Plotly.newPlot('barChart', data, layout, config)
    },
  },
}
</script>

<style scoped>
#barChart {
  background-color: #1c1a1a;
  border-radius: 5px;
}
</style>
