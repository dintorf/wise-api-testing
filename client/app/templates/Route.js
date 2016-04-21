'use strict';

/**
 * @ngdoc function
 * @name app.route:Route
 * @description
 * # Route
 * Route template of the app
 *
 * replace %%name%% with name of module, follow the case of the word
 * replace %%subpage%% with name of subpage in module
 */

angular.module('%%name%%')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			.state('%%name%%', {
				url: '',
				abstract: true,
				templateUrl: 'app/modules/%%name%%/%%name%%.html',
				controller: '%%Name%%Ctrl',
				controllerAs: 'vm'
			})
			.state('%%name%%.%%subpage%%', {
				url:'/%%subpage%%',
				templateUrl: 'app/modules/%%name%%/%%subpage%%.html'
			});

		
	}]);
