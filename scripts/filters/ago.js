angular.module('moviedb').filter('ago', 
	[function(){
		// un filtro tiene que devolver una función
		return function(text){
			return moment(text).fromNow();
		};
	}]
);