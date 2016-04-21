(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:SidenavService
	 * @description
	 * # SidenavService
	 * Sidenav Service template of the app
	 *
	 * replace %%name%% with name of module, follow the case of the word
	 */

  	angular
		.module('contacts')
		.factory('ContactsSidenavService', ContactsSidenavService);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		ContactsSidenavService.$inject = ['$http'];

		function ContactsSidenavService ($http) {
			var options = [
		  	];

			return {
				listOptions: function () {
					return options;
				}
		  	}

		}

})();
