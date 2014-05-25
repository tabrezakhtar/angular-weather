'use strict';

var app = angular.module('angularWeatherApp');

app.controller('WeatherCtrl', ['$scope', 'weatherService', function ($scope, weatherService) {
    $scope.weather = weatherService.getTodaysWeather();
}]);
