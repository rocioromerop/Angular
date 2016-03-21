angular.module("moviedb", ['ngRoute']).config(
	// solicitamos que se nos inyecten cosas para así configurarlas
	["$routeProvider", function($routeProvider){

		// configuro las URLs de la aplicación

		$routeProvider.when('/movies', {
			templateUrl: 'views/MoviesList.html'
		}).when('/series', {
			templateUrl: 'views/SeriesList.html'
		}).when('/people', {
			templateUrl: 'views/PeopleList.html'
		}).when('', {
			redirectTo: '/movies'
		}).when('/', {
			redirectTo: '/movies'
		}).otherwise({
			templateUrl: 'views/404.html'
		})
	}]

); 

// PARA DEFINIR QUE ESTO ES EL MÓDULO, AQUÍ LO DEFINO. EN [] METERÍAMOS LAS DEPENDENCIAS DEL MÓDULO, SI LAS HUBIERA.
