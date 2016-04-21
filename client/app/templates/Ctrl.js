(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:Ctrl
	* @description
	* # Ctrl
	* Controller template of the app
	*
	* replace %%name%% with name of module, follow the case of the word
	*/

  	angular
		.module('%%name%%')
		.controller('%%Name%%Ctrl', %%Name%%);

		%%Name%%.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function %%Name%%() {
			/*jshint validthis: true */
			var vm = this;

		}

})();