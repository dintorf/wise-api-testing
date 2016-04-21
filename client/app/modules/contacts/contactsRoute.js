'use strict';

/**
 * @ngdoc function
 * @name app.route:contactsRoute
 * @description
 * # contactsRoute
 * Route of the app
 */

angular.module('wiseagent')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('contacts', {
				url: '',
				abstract: true,
				templateUrl: 'app/modules/contacts/contacts.html',
				controller: 'ContactsCtrl',
				controllerAs: 'vm'
			})
			.state('contacts.list', {
				url:'/list',
				templateUrl: 'app/modules/contacts/list.html'
			});

		
	}]);
