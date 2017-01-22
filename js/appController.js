angular
	.module('indexApp')
	.controller('appController', function($scope, cribsFactory){

		$scope.showMessage = false;
		$scope.info = {
			hello: "Hello World!",
			showMessage: false,
			cribs: []
		};

		cribsFactory.getCribs().then(function(data){
			$scope.info.cribs = data.data;
			console.log(data.data);
		}, function(error){
			console.log(error);
		});

	});