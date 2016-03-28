angular.module("moviedb").controller("MovieDetailController", 
	["$scope", "$routeParams", "APIClient", "paths", "$location", function($scope, $routeParams, APIClient, paths, $location){

		// scope init
		$scope.uiState = 'loading';
		$scope.model = {};

		$scope.$emit("ChangeTitle", "Loading...");

		// controller init
		APIClient.getMovie($routeParams.id).then(
			// Película encontrada
			function(movie){
				$scope.model = movie;
				$scope.uiState = 'ideal';
				$scope.$emit("ChangeTitle", $scope.model.title);
			},
			// Película no encontrada
			function(error){
				// TODO: improve error management
				$location.url(paths.notFound);
			}
		);



	}]
);