(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('wiseagent')
		.factory('SidenavService', Sidenav);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Sidenav.$inject = ['$http'];

		function Sidenav ($http) {
			
			var options = [
		  	];

			return {
				listOptions: function () {
					return options;
				} 
		  	}
		}

})();
