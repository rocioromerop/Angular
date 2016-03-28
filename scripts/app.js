angular.module("moviedb", ['ngRoute', "URL", "ngSanitize"]).config(
	// solicitamos que se nos inyecten cosas para así configurarlas
	["$routeProvider", "paths", function($routeProvider, paths){

		// configuro las URLs de la aplicación

		$routeProvider.when(paths.movies, {
			templateUrl: 'views/MoviesList.html'
		}).when(paths.movieDetail, {
			controller : 'MovieDetailController',
			templateUrl: 'views/MediaItemDetail.html'
		}).when(paths.series, {
			templateUrl: 'views/SeriesList.html'
		}).when(paths.serieDetail, {
			controller : 'SerieDetailController',
			templateUrl: 'views/MediaItemDetail.html'
		}).when(paths.people, {
			templateUrl: 'views/PeopleList.html'
		}).when(paths.home, {
			redirectTo: paths.movies
		}).otherwise({
			templateUrl: 'views/404.html'
		})
	}]

); 

// PARA DEFINIR QUE ESTO ES EL MÓDULO, AQUÍ LO DEFINO. EN [] METERÍAMOS LAS DEPENDENCIAS DEL MÓDULO, SI LAS HUBIERA.
