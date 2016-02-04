var icons = {
			"clear-day" : "B",
			"clear-night" : "C",
			"rain" : "R",
			"snow" : "G",
			"sleet" : "X",
			"wind" : "S",
			"fog" : "N",
			"cloudy" : "Y",
			"party-cloudy-day" : "H",
			"party-cloudy-night" : "I"
			};

var cities = {
			"toronto"  : { coords : { latitude: 43.653226  , longitude: -79.383184}},
			"vancouver"  : { coords : { latitude: 49.282729  , longitude: -123.120738}},
			"halifax"  : { coords : { latitude: 44.648862  , longitude: -63.575320}},
			"quebec"  : { coords : { latitude: 46.810811  , longitude:  -71.215439}},
			"ottawa"  : { coords : { latitude: 45.421530  , longitude:  -75.697193}},
			"current location" : ""
			};

function loadWeather(cityCoords){
	console.log(cityCoords);	
	var latlng = cityCoords.coords.latitude + "," + cityCoords.coords.longitude;
	var forecastURL = "https://api.forecast.io/forecast/4d56a6812aa5d6d704c470d3f97554de/"+latlng;
	$.ajax({
		url: forecastURL,
		jsonpCallback: 'jsonCallback',
		contentType: 'application/json',
		dataType: 'jsonp',
		success: function(json){
			console.log(json);
			$("#current_temp").html(Math.round(json.currently.temperature)+"&#176;F");
			$("#current_summary").html(json.currently.summary);
			$("#current_temp").attr("data-icon", icons[json.currently.icon]);
		},
		error: function(e){
			console.log(e.message);
		}
	});
}

function loadCity(city){
	$("#location").html(city);	
	if (city.toLowerCase() == "current location"){
		if(navigator.geolocation)
			navigator.geolocation.getCurrentPosition(loadWeather,loadDefaultCity);
		else{
			loadDefaultCity();
		}
	}else{
		loadWeather(cities[city.toLowerCase()]);
	}	
}

function loadDefaultCity(){
	loadCity("ottawa");
}

$(document).ready(function(){
	loadCity("toronto");
	$("a.city").bind("click", function(){
		loadCity($(this).html());
	});
});