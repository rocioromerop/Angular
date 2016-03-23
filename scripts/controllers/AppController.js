angular.module("moviedb").controller("AppController", ["$scope", "$location", "paths", function($scope, $location, paths){

    var controller = this;

    // Controller properties -> No serán públicas en el scope
    controller.titles = {};
        controller.titles[paths.movies] = "Movies List";
        controller.titles[paths.series] = "Series List";
        controller.titles[paths.people] = "People List";
    

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
