angular
	.module('indexApp')
	.controller('appController', function($scope, cribsFactory, valuesFactory){

		$scope.info = {
			cribs: [],
			values: [],
			price: {
				min: 0,
				max: 1000000
			}
		};

		$scope.newListing = {};

		$scope.addCrib = function(newListing){
			newListing.image = 'default-crib';
			$scope.info.cribs.push(newListing);
			$scope.newListing = {};
		};

		cribsFactory.getCribs().then(function(data){
			$scope.info.cribs = data.data;
		}, function(error){
			console.log(error);
		});

		$scope.info.values = valuesFactory.getValues();

	});