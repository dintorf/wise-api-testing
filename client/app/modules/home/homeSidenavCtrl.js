(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:HomeSidenavCtrl
	 * @description
	 * # HomeSidenavCtrl
	 * Controller of the app
	 */
	angular
		.module('home')
		.controller('HomeSidenavCtrl', HomeSidenavCtrl)

	// Injecting Denpendencies

	HomeSidenavCtrl.$inject = ['$mdSidenav', '$state', '$mdBottomSheet', '$mdToast', '$scope', 'HomeSidenavService'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function HomeSidenavCtrl($mdSidenav, $state, $mdBottomSheet, $mdToast, $scope, HomeSidenavService) {
		/*jshint validthis: true */
		var vm = this;

		

	}

})();
