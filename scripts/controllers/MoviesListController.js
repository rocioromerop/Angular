angular.module("moviedb").controller("MoviesListController", ["$log", "$scope", "MovieService", function($log, $scope, MovieService) {

    // Scope model init

    $scope.model = [];
    $scope.uiState = "loading";

    // Scope watchers


    // Controller start

    MovieService.getMovies().then(
        //promesa resuelta
        function(data) {
        	$scope.model=data;
            if ($scope.model.length == 0) {
                $scope.uiState = 'blank';
            } else {
                $scope.uiState = 'ideal';
            }
            $scope.model = data;
        },
        //promesa rechazada
        function(data) {
            $log.error("ERROR", data);
            $scope.uiState = "error";
        }

    );

}]);