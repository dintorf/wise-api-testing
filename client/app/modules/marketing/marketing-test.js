(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:marketingTest
	 * @description
	 * # marketingTest
	 * Test of the app
	 */

	describe('marketing test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('wiseagent');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('MarketingCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
