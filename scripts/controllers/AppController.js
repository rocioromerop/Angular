angular.module("moviedb").controller("AppController", ["$scope", "$location", function($scope, $location){

    var controller = this;
    // Controller properties -> No serán públicas en el scope
    controller.titles = {
        "/movies" : "Movies List",
        "/series" : "Series List",
        "/people" : "People List"
    };

	// inicializar el modelo del scope. Representación del modelo

	$scope.model = {
		title: ""
	};

	// Scope event listeners. Manejador de eventos. NO SON EVENTOS DEL DOM, SINO DEL SCOPE DE ANGULAR


    $scope.$on("$locationChangeSuccess", function(evt, currentRoute){
        $scope.model.title = controller.titles[$location.path()] || "404 Not Found";
    });

}]

);

//En angular, cuando vayas a usar algo, tienes que inyectarlo
