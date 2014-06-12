'use strict';

describe('Controller: WeatherCtrl', function () {

	// load the controller's module
	beforeEach(module('angularWeatherApp'));

	var weatherController,
		weatherService,
		scope,
		mockWeatherJson;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope, $injector, $q) {
		scope = $rootScope.$new();
		weatherService = $injector.get('weatherService');
		
		var deferred = $q.defer();
		
		mockWeatherJson = {
			"weather" : [{
					"id" : 800,
					"main" : "Clear",
					"description" : "Sky is Clear",
					"icon" : "01d"
				}
			]
		};
		
		deferred.resolve(mockWeatherJson);
		spyOn(weatherService, 'getWeatherApi').and.returnValue(deferred.promise);
  
		weatherController = $controller('WeatherCtrl', {
			$scope: scope
		});
	}));

	it('should be sunny', function () {
		scope.$apply();
		expect(scope.weatherApiResult).toBe('Sky is Clear');
	});
});
