
//En el módulo moviedb, defino el controlador
angular.module("moviedb").controller("MenuController",
	 ["$scope", function($scope){
	 	//en el scope siempre hay que inicializar los valores del scope

	 	// Scope init
	 	$scope.model = {
	 		selectedItem: "movies"
	 	}; 
	 	//atributo model, que será un objeto

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
	 	};

	 	// Scope watchers

	 	$scope.$watch("model.selectedItem", function(newValue, oldValue)
	 		{
	 			//Emitimos un evento para que se entere AppController de que ha cambiado la opción del menú seleccionada
	 			$scope.$emit("OnMenuChange", newValue);
	 			//CUANDO CABMIE EL ATRIBUTO SELECTEDITEM...
	 		});

	 }]

 ); 
 //sintaxis del array en línea, porque realiza inyección de dependecias (se le pasa el scope). $scope es un servicio de Angular. Por último, la función que implementa el controlador
