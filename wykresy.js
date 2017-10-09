function rysujTemp(){
    nv.addGraph(function() {
        let chart = nv.models.lineChart();

        chart.xScale(d3.time.scale())

        chart.xAxis
            .axisLabel('Data')
            .showMaxMin(false)
            .tickFormat(function(d) {
                return d3.time.format('%b %e, %H:%M')(new Date(d))
            })
        ;

        chart.yAxis
            .axisLabel('Temperatura (ºC)')
            .tickFormat(d3.format('.01f'))
        ;

        chart.forceY([getMin(),getMax()]);

        d3.select('#t-chart svg')
            .datum(tData())
            .transition().duration(500)
            .call(chart)
        ;

        nv.utils.windowResize(chart.update);

        return chart;
    });
}

function rysujR(){
    nv.addGraph(function() {
        let chart = nv.models.historicalBarChart();

        chart.xScale(d3.time.scale())

        chart.xAxis
            .axisLabel('Data')
            .showMaxMin(false)
            .tickFormat(function(d) {
                return d3.time.format('%d-%m-%Y %H:%M')(new Date(d))
            })
        ;

        chart.bars.clipEdge(false);

        chart.yAxis
            .axisLabel('Opady (mm)')
            .tickFormat(d3.format('.01f'))
        ;

        d3.select('#r-chart svg')
            .datum(rData())
            .transition().duration(500)
            .call(chart)
        ;

        nv.utils.windowResize(chart.update);

        return chart;
    });
}