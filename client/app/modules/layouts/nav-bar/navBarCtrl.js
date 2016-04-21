(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:LayoutCtrl
	 * @description
	 * # LayoutCtrl
	 * Controller of the app
	 */

	angular
		.module('wiseagent')
		.controller('MenuCtrl', MenuCtrl);

	MenuCtrl.$inject = ['$mdSidenav', '$cookies', '$state', '$mdToast', '$mdDialog', 'MenuService'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function MenuCtrl($mdSidenav, $cookies, $state, $mdToast, $mdDialog, MenuService ) {
		/*jshint validthis: true */
		var vm = this;

		vm.menu = MenuService.listMenu();

		vm.toggleSidenav = function (menuId) {
			$mdSidenav(menuId).toggle();
		};

		vm.navigateTo = function (target) {

			var page = target;

			$state.go(page);

		};

		vm.changePassword = function () {
			$mdToast.show(
				$mdToast.simple()
					.content('Password clicked!')
					.position('top right')
					.hideDelay(2000)
			);
		};

		vm.changeProfile = function (ev) {
				$mdDialog.show({
					controller: DialogController,
					templateUrl: 'tabDialog.tmpl.html',
					parent: angular.element(document.body),
					targetEvent: ev,
					clickOutsideToClose:true
				})
				.then(function(answer) {
					$mdToast.show(
						$mdToast.simple()
							.content('You said the information was "' + answer + '".')
							.position('top right')
							.hideDelay(2000)
					);

				}, function() {
					$mdToast.show(
						$mdToast.simple()
							.content('You cancelled the dialog.')
							.position('top right')
							.hideDelay(2000)
					);
				});

				function DialogController($scope, $mdDialog) {
					$scope.hide = function() {
						$mdDialog.hide();
					};

					$scope.cancel = function() {
						$mdDialog.cancel();
					};

					$scope.answer = function(answer) {
						$mdDialog.hide(answer);
					};
				}
		};


		vm.logOut = function () {

			alert('Implement your Function Here');
			// $cookies.put('dev_appserver_login', ' ');
			//$state.go('out', {}, {reload: true});

		};

		var originatorEv;
		vm.openMenu = function ($mdOpenMenu, ev) {
			originatorEv = ev;
			$mdOpenMenu(ev);
		};

	}

})();
