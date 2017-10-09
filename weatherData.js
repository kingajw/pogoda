var t2m = [],
    Tfeel = [],
    prec = [];

function getMax() {
    let highest = -999;
    for (let i=0;i<36;i++) {
        let max = Number(t2m[i].y);
        if (max > highest) highest = max;
    }
    highest += highest%2;
    return highest;
}

function getMin() {
    let lowest = 999;
    for (let i=0;i<36;i++) {
        let min = Number(Tfeel[i].y);
        if (min < lowest) lowest = min;
    }
    lowest -= lowest*lowest%2;
    return lowest;
}

function tData() {
    return [
        {
            values: t2m,
            key: 'Temperatura',
            color: '#f00'
        },
        {
            values: Tfeel,
            key: 'Temperatura odczuwalna',
            color: '#2ca02c'
        }
    ];
}

function rData() {
    return [
        {
            values: prec,
            key: 'Opady',
            color: '#33f'
        }
    ];
}

$(function() {
    $('#show').click(function () {
        t2m = [];
        Tfeel = [];
        prec = [];
     //   let country = $('#panstwo').val();
        let city = $('#miasto').val();
        $.ajax({
            url: 'http://api.wunderground.com/api/dd3aa20b070fd564/hourly/q/Poland/' + city + '.json',
            success: function (data) {
                if (data.hourly_forecast === undefined) {
                    alert("Nie znaleziono takiego miasta");
                }
                else {
                    $('#ikonka').attr("src", data.hourly_forecast[0].icon_url);
                    $('#godzina').html("Godzina "+data.hourly_forecast[0].FCTTIME.hour + ":00");
                    $('#temperatura').html("Temperatura: "+data.hourly_forecast[0].temp.metric + " ºC");
                    for (let i = 0; i < 36; i++) {
                        t2m.push({x: data.hourly_forecast[i].FCTTIME.epoch * 1000, y: data.hourly_forecast[i].temp.metric});
                        Tfeel.push({
                            x: data.hourly_forecast[i].FCTTIME.epoch * 1000,
                            y: data.hourly_forecast[i].feelslike.metric
                        });
                    }
                    rysujTemp();
                }
            }
        });
        return false;
    });
});

/*
$(function getR(){
    let city = 'Warszawa';
    $.ajax({
        url: 'http://api.wunderground.com/api/dd3aa20b070fd564/hourly/q/Poland/'+city+'.json',
        success: function(data) {
            for (let i=0;i<36;i++) {
                prec.push({x: data.hourly_forecast[i].FCTTIME.epoch*1000,y: data.hourly_forecast[i].qpf.metric});
            }
            rysujR();
        }
    });
});*/