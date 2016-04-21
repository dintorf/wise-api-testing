(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:Service
	 * @description
	 * # Service
	 * Service template of the app
	 *
	 * replace %%name%% with name of module, follow the case of the word
	 */

  	angular
		.module('%%name%%')
		.factory('%%Name%%Service', Contacts);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		%%Name%%.$inject = ['$http'];

		function Contacts ($http) {

		}

})();
