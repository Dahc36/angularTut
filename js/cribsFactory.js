angular
	.module('indexApp')
	.factory('cribsFactory', function(){
		var cribsData = [
			{
				"type": "Condo",
				"price": 220000,
				"address": "213 Grove Street",
				"description": "Excelent place, really nice view"
			},
			{
				"type": "House",
				"price": 410500,
				"address": "7823 Winding Way",
				"description": "Beautiful home with lots of space for a large family."
			},
			{
				"type": "Duplex",
				"price": 395000,
				"address": "834 River Lane",
				"description": "Great neighbourhood and lot-s of nice green space."
			}
		];

		function getCribs(){
			return cribsData;
		}

		return{
			getCribs: getCribs
		}
	});