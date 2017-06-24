$(document).ready(function(){

var y = false;


function setTemp(t)
{
    if(y)
    {
        $("#temp").html(t);
        $("#t-unit").html("Celcius");
        y = false;
    }
    else
    {
        $("#temp").html(t * 9 / 5 + 32);
        $("#t-unit").html("Farhaneit");
        y = true;
    }
}






function operation(lat, lon){


/*
    open weather api(http)
*/ 


    var api = 'http://api.openweathermap.org/data/2.5/weather?lat=' +
    lat + '&lon=' + lon + '&appid=473635ba84b53d3fa753bcbc29b9058d';

    $.getJSON(api, function(json){
        var t = json.main.temp;
        $("#temp").html(Math.floor(t - 273));
        $("#t-unit").click(function(){
            setTemp(Math.floor(json.main.temp - 273));
        });
        $("#press").html(json.main.pressure);
        $("#hum").html(json.main.humidity);
        $(".place").html(json.name + ", " + json.sys.country);

    });

/* Dark sky api (https)*/


  /* var api = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/03dde6cc2e10c70733af736a747f45f0/' +
    lat + ',' + lon;
    $.getJSON(api, function(json){
        var t = json.main.temp;
        $("#temp").html(Math.floor(t - 273));
        $("#t-unit").click(function(){
            setTemp(Math.floor(json.main.temp - 273));
        });
        $("#press").html(json.main.pressure);
        $("#hum").html(json.main.humidity);
        $(".place").html(json.name + ", " + json.sys.country);

    });*/ 
}





    var lon;
    var lat;
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(function(pos){
            lon = pos.coords.longitude;
            lat = pos.coords.latitude;
            operation(lat, lon);
            //$("div").html("Longitude : " + lon + "<br>" + "Latitude : " + lat);
        });
    }
    
});
