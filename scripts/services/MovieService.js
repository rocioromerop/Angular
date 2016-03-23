angular.module("moviedb").service("MovieService", 
	["$http", "$q", function($http, $q){

		this.getMovies = function(){
			

			// Crear el objeto diferido
			var deferred = $q.defer();
			// Hacer trabajo asíncrono
			$http.get("/api/movies").then(
				//petición ok 
			
				function(response){
					// resolver la promesa
					deferred.resolve(response.data);
				},
				//pretición KO
				function(response){
					// rechazar la promesa
					deferred.reject(response.data);
				}

			);

			// devolver la promesa
			return deferred.promise;
		};
}]


);