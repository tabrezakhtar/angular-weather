'use strict';

var app = angular.module('angularWeatherApp');

app.service('weatherService', function weatherService(httpService, $q) {
    return {
	    getTodaysWeather: function () {
		    return "sunny";
	    },
		
		getWeatherApi: function (url) {
			var deferred = $q.defer();
		
			httpService.get(url).then(
				function(data) {
					deferred.resolve(data);
				},
				function(data) {
					deferred.reject(data);
				}
			);
					
			return deferred.promise;
		}
		
		//http://openweathermap.org/API
		//Calls by city name 
		//api.openweathermap.org/data/2.5/weather?q=London,uk   
		//Calls by geographic coordinats 
		//api.openweathermap.org/data/2.5/weather?lat=35&lon=139
		//Calls by city ID 
		//api.openweathermap.org/data/2.5/weather?id=2172797

    };
});
