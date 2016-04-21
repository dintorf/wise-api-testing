(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:marketingService
	 * @description
	 * # marketingService
	 * Service of the app
	 */

  	angular
		.module('marketing')
		.factory('MarketingService', Marketing);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Marketing.$inject = ['$http'];

		function Marketing ($http) {

		}

})();
