(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:contactsTest
	 * @description
	 * # contactsTest
	 * Test of the app
	 */

	describe('contacts test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('wiseagent');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('ContactsCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
