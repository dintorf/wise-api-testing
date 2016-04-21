(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:contactsCtrl
	* @description
	* # contactsCtrl
	* Controller of the app
	*/

  	angular
		.module('contacts')
		.controller('ContactsCtrl', Contacts);

		Contacts.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Contacts() {
			/*jshint validthis: true */
			var vm = this;

		}

})();
