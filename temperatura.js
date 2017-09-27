nv.addGraph(function() {
    var chart = nv.models.lineChart()
    ;

    chart.xAxis
        .axisLabel('Data')
        .tickFormat(function(d) {
            return d3.time.format('%d-%m-%Y %H:%M')(new Date(d))
        });

    chart.yAxis
        .axisLabel('Temperatura (ºC)')
        .tickFormat(d3.format('.01f'))
    ;

    d3.select('#t-chart svg')
        .datum(data())
        .transition().duration(500)
        .call(chart)
    ;

    nv.utils.windowResize(chart.update);

    return chart;
});
