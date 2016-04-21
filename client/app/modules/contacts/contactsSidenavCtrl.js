(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:SidenavCtrl
	 * @description
	 * # SidenavCtrl
	 * Sidenav Controller template of the app
	 *
	 * replace %%name%% with name of module, follow the case of the word
	 */
	angular
		.module('contacts')
		.controller('ContactsSidenavCtrl', ContactsSidenavCtrl)

	// Injecting Denpendencies

	ContactsSidenavCtrl.$inject = ['$mdSidenav', '$state', '$mdBottomSheet', '$mdToast', '$scope', 'ContactsSidenavService'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function ContactsSidenavCtrl($mdSidenav, $state, $mdBottomSheet, $mdToast, $scope, ContactsSidenavService) {
		/*jshint validthis: true */
		var vm = this;

		

	}

})();
