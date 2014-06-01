'use strict';

var app = angular.module('angularWeatherApp');

app.service('httpService', function httpService($http, $q) {
	return {
		get: function(url){
			var deferred = $q.defer();
		
			$http({method: 'GET', url: url}).
				success(function(data, status, headers, config) {
					deferred.resolve(data);
				}).
				error(function(data, status, headers, config) {
					deferred.reject(data);
				});
			
			return deferred.promise;
		}
	};
});