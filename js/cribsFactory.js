angular
	.module('indexApp')
	.factory('cribsFactory', function($http){

		function getCribs(){
			return $http.get('data/data.json');
		}

		return{
			getCribs: getCribs
		}
	});