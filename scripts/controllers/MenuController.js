
//En el módulo moviedb, defino el controlador
angular.module("moviedb").controller("MenuController",
	 ["$scope", function($scope){
	 	//en el scope siempre hay que inicializar los valores del scope

	 	// Scope init
	 	$scope.model = {
	 		selectedItem: "movies"
	 	}; //atributo model, que será un objeto

	 	// Scope methods
	 	$scope.setSelectedItem = function(item){
	 		$scope.model.selectedItem = item;
	 	};
	 	$scope.getClassForItem = function(item){
	 		if($scope.model.selectedItem == item){
	 			return "active";
	 		}
	 		else{
	 			return "";
	 		}
	 	}
	 }]

 ); //sintaxis del array en línea, porque realiza inyección de dependecias (se le pasa el scope). $scope es un servicio de Angular. Por último, la función que implementa el controlador