(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:marketingCtrl
	* @description
	* # marketingCtrl
	* Controller of the app
	*/

  	angular
		.module('marketing')
		.controller('MarketingCtrl', Marketing);

		Marketing.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Marketing() {
			/*jshint validthis: true */
			var vm = this;

		}

})();
