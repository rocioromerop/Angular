angular.module("moviedb").controller("SerieDetailController", 
	["$scope", "$routeParams", "APIClient", "paths", "$location", function($scope, $routeParams, APIClient, paths, $location){

		// scope init
		$scope.uiState = 'loading';
		$scope.model = {};

		$scope.$emit("ChangeTitle", "Loading...");

		// controller init
		APIClient.getSerie($routeParams.id).then(
			// Película encontrada
			function(serie){
				$scope.model = serie;
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