'use strict';

var app = angular.module('angularWeatherApp');

app.controller('WeatherCtrl', ['$scope', 'weatherService', function ($scope, weatherService) {
    //$scope.weather = weatherService.getTodaysWeather();
	$scope.weatherApiResult = '';
	
	weatherService.getWeatherApi('http://api.openweathermap.org/data/2.5/weather?q=London,uk').then(function(data){
		$scope.weatherApiResult = data.weather[0].description;
	});
}]);
