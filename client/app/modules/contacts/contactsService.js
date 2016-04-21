(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:contactsService
	 * @description
	 * # contactsService
	 * Service of the app
	 */

  	angular
		.module('contacts')
		.factory('ContactsService', Contacts);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Contacts.$inject = ['$http'];

		function Contacts ($http) {

		}

})();
