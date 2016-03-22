angular.module("moviedb").controller("MoviesListController", ["$log", "$scope", "MovieService", function($log, $scope, MovieService) {

    // Scope model init

    $scope.model = [];
    $scope.uiState = "loading";

    // Scope watchers


    // Controller start

    MovieService.getMovies().then(
        //promesa resuelta
        function(response) {
        	$scope.model=response.data;
            if ($scope.model.length == 0) {
                $scope.uiState = 'blank';
            } else {
                $scope.uiState = 'ideal';
            }
        },
        //promesa rechazada
        function(response) {
            $log.error("ERROR", response.data);
            $scope.uiState = "error";
        }

    );

}]);