angular
	.module('indexApp')
	.factory('valuesFactory', function(){

		function getValues(){
			var values = [];
			for (var i = 0; i < 10; i++) {
				values.push(100000*(i+1));
			}
			return values;
		}

		return {
			getValues: getValues
		}
	});