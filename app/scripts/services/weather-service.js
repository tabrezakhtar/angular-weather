'use strict';

var app = angular.module('angularWeatherApp');

app.service('weatherService', function weatherService() {
    return {
	    getTodaysWeather: function () {
		    return "sunny";
	    }
    };
});
