
//En el módulo moviedb, defino el controlador
angular.module("moviedb").controller("MenuController",
	 ["$scope", "$location", function($scope, $location){

	 	//en el scope siempre hay que inicializar los valores del scope

	 	// Scope init
	 	$scope.model = {
	 		selectedItem: "movies"
	 	}; 
	 	//atributo model, que será un objeto

	 	// Scope methods
	 	

	 	$scope.getClassForItem = function(item){
	 		if($scope.model.selectedItem == item){
	 			return "active";
	 		}
	 		else{
	 			return "";
	 		}
	 	};

	 	// Scope watchers
	 	$scope.$on("$locationChangeSuccess", function(evt, currentRoute){
        	$scope.model.selectedItem = $location.path();
    	});
	

	 }]

 ); 
 //sintaxis del array en línea, porque realiza inyección de dependecias (se le pasa el scope). $scope es un servicio de Angular. Por último, la función que implementa el controlador
