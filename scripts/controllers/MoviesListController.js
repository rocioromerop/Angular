angular.module("moviedb").controller("MoviesListController", ["$log", "$scope", "APIClient", "URL", "paths",function($log, $scope, APIClient, URL, paths) {

    // Scope model init

    $scope.model = [];
    $scope.uiState = "loading";
    //indicarle que el atributo url es la función URL.resolve
    $scope.url = URL.resolve;
    // Scope watchers

    // Scope methods

    $scope.getMovieDetailURL = function(movie){
        return URL.resolve(paths.movieDetail, {id: movie.id});
    }

    // Controller start

    APIClient.getMovies().then(
        //promesa resuelta
        function(data) {
        	$scope.model=data;
            if ($scope.model.length == 0) {
                $scope.uiState = 'blank';
            } else {
                $scope.uiState = 'ideal';
            }
        },
        //promesa rechazada
        function(data) {
            $log.error("ERROR", data);
            $scope.uiState = "error";
        }

    );

}

]);