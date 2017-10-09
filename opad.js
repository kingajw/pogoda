nv.addGraph(function() {
    var chart = nv.models.discreteBarChart()
    ;

    chart.yAxis
        .axisLabel('Opad (mm)')
        .tickFormat(d3.format('.01f'))
    ;

    d3.select('#r-chart svg')
        .datum(tData())
        .attr("class", "bar")
        .transition().duration(500)
        .call(chart)
    ;

    nv.utils.windowResize(chart.update);

    return chart;
});
