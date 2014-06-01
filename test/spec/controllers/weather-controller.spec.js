'use strict';

describe('Controller: WeatherCtrl', function () {

	// load the controller's module
	beforeEach(module('angularWeatherApp'));

	var weatherController,
		weatherService,
		scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope, $injector, $q) {
		scope = $rootScope.$new();
		weatherService = $injector.get('weatherService');
		
		var deferred = $q.defer();
		
		deferred.resolve('sunny');
		spyOn(weatherService, 'getWeatherApi').and.returnValue(deferred.promise);
  
		weatherController = $controller('WeatherCtrl', {
			$scope: scope
		});
	}));

	it('should be sunny', function () {
		scope.$apply();
		expect(scope.weatherApiResult).toBe('sunny');
	});
});
