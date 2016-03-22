angular.module("moviedb").controller("MoviesListController", 
	["$scope", function($scope){



		// Scope model init
		$scope.uiState = "ideal";

		$scope.model =  [
			{
				"title" : "Deadpool",
				"poster_url" : "https://image.tmdb.org/t/p/w185/kS3pI9nSLZuX8CAzaQOBF6mQ3uX.jpg",
				"rating" : "7.2",
				"release_date" : "2016-02-19"
			},
			{
				"title" : "Batman v Superman: El Amanecer de la Justicia ",
				"poster_url" : "https://image.tmdb.org/t/p/w185/6bCplVkhowCjTHXWv49UjRPn0eK.jpg",
				"rating" : "5.1",
				"release_date" : "2016-03-23"
			},
			{
				"title" : "Los juegos del hambre: Sinsajo. Parte 2",
				"poster_url" : "https://image.tmdb.org/t/p/w185/sv4UUyQxP3qCp7kArPhZk1JlAj8.jpg",
				"rating" : "6.8",
				"release_date" : "2015-11-27"
			},
			{
				"title" : "Mad Max: Furia en la carretera",
				"poster_url" : "https://image.tmdb.org/t/p/w185/xHfhQIK4BNlsGv5Ylx8mVq0hJT1.jpg",
				"rating" : "7.4",
				"release_date" : "2015-05-15"
			}
		];

		// Scope watchers

		$scope.$watch("model", function(newValue, oldValue){
			if(newValue.length == 0){
				$scope.uiState='blank';
			}
			else{
				$scope.uiState='ideal';
			}

		});

	}]
);