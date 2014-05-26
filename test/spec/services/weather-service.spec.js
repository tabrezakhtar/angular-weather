'use strict';

describe('Service: weather-service', function () {

	beforeEach(module('angularWeatherApp'));

	//weather service is the system under test
	var sut;
   
	beforeEach(inject(function ($injector) {
		sut = $injector.get('weatherService');
	}));

	it('should be sunny', function () {
		var weatherResult = sut.getTodaysWeather();
		expect(weatherResult).toBe('sunny');
	});

});
