(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:Test
	 * @description
	 * # Test
	 * Test template of the app
	 *
	 * replace %%name%% with name of module, follow the case of the word
	 */

	describe('%%name%% test', function () {
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
