angular.module("moviedb").service("MovieService", 
	["$http", "$q", "apiPaths", "URL", function($http, $q, apiPaths, URL){

		this.apiRequest = function(url){
			// Crear el objeto diferido
			var deferred = $q.defer();
			// Hacer trabajo asíncrono
			$http.get(url).then(

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
		}

		this.getMovies = function(){
			return this.apiRequest(apiPaths.movies);
			
		};

		this.getMovie = function(movieId){
			var url = URL.resolve(apiPaths.movieDetail, {id: movieId});
			return this.apiRequest(url);
		}

}]

);