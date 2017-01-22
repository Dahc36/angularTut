angular
	.module('indexApp')
	.controller('appController', function($scope, cribsFactory){

		$scope.data = {hello: "Hello World!"}

		$scope.cribs = cribsFactory.getCribs();
	});