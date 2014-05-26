'use strict';

describe('Controller: WeatherCtrl', function () {

	// load the controller's module
	beforeEach(module('angularWeatherApp'));

	var weatherController,
		weatherService,
		scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope, $injector) {
		scope = $rootScope.$new();
		weatherService = $injector.get('weatherService');
		
		spyOn(weatherService, 'getTodaysWeather').and.returnValue('sunny');
		
		weatherController = $controller('WeatherCtrl', {
			$scope: scope
		});
	}));

	it('should be sunny', function () {
		expect(scope.weather).toBe('sunny');
	});
});
