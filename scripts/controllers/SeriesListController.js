angular.module("moviedb").controller("SeriesListController", 
	["$log", "$scope", "APIClient", "URL", "paths",function($log, $scope, APIClient, URL, paths) {

    // Scope model init

    $scope.model = [];
    $scope.uiState = "loading";
    //indicarle que el atributo url es la función URL.resolve
    $scope.url = URL.resolve;
    // Scope watchers

    // Scope methods

    $scope.getSerieDetailURL = function(serie){
        return URL.resolve(paths.serieDetail, {id: serie.id});
    }

    // Controller start

    APIClient.getSeries().then(
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

]
);