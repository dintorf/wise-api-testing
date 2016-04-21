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
		.module('%%name%%')
		.controller('%%Name%%SidenavCtrl', %%Name%%SidenavCtrl)

	// Injecting Denpendencies

	%%Name%%SidenavCtrl.$inject = ['$mdSidenav', '$state', '$mdBottomSheet', '$mdToast', '$scope', '%%Name%%SidenavService'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function %%Name%%SidenavCtrl($mdSidenav, $state, $mdBottomSheet, $mdToast, $scope, %%Name%%SidenavService) {
		/*jshint validthis: true */
		var vm = this;

		

	}

})();
