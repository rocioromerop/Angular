angular.module('moviedb').filter('schoolrating', 
	[function(){
		return function(rating, mode){
			if (rating <= 10 && rating >= 9){
				return (mode == "US")? "A": "SB";
			}
			if( rating <= 9  && rating >= 7){
				return (mode == "US")? "B": "NT";
			}
			if( rating < 7 && rating >= 6){
				return (mode == "US")? "C": "B";
			}
			if( rating < 6 && rating >= 5){
				return (mode == "US")? "D": "SF";
			}
			if( rating < 5){
				return (mode == "US")? "E": "IN";
			}
		}
	}
]);