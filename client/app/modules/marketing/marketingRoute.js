'use strict';

/**
 * @ngdoc function
 * @name app.route:marketingRoute
 * @description
 * # marketingRoute
 * Route of the app
 */

angular.module('marketing')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.marketing', {
				url:'/marketing',
				templateUrl: 'app/modules/marketing/marketing.html',
				controller: 'MarketingCtrl',
				controllerAs: 'vm'
			});

		
	}]);
