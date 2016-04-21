(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:HomeSidenavService
	 * @description
	 * # HomeSidenavService
	 * Service of the app
	 */

  	angular
		.module('home')
		.factory('HomeSidenavService', HomeSidenavService);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		HomeSidenavService.$inject = ['$http'];

		function HomeSidenavService ($http) {
			var options = [
		  	];

			return {
				listOptions: function () {
					return options;
				}
		  	}

		}

})();
