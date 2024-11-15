<template>
    <head> 
       <script>src= "https://cdn.plot.ly/plotly-2.35.2.min.js"</script> 
    </head>

    <body>
        <div id="myDiv">
        </div>
    </body>
</template>

<script>
    var data = [{
        values: [19,26,55],
        labels: ['Residential', 'Non-Residential', 'Utility'],
        type: 'pie'
    }]

    var layout = {
        height: 400,
        width: 500
    };

    Plotly.newPlot('myDiv', data, layout);
</script>