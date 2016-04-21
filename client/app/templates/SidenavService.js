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
		.module('%%name%%')
		.factory('%%Name%%SidenavService', %%Name%%SidenavService);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		%%Name%%SidenavService.$inject = ['$http'];

		function %%Name%%SidenavService ($http) {
			var options = [
		  	];

			return {
				listOptions: function () {
					return options;
				}
		  	}

		}

})();
