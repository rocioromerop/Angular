angular.module("moviedb").controller("AppController", ["$scope", function($scope){

	// inicializar el modelo del scope. Representación del modelo

	$scope.model = {
		title: ""
	};

	// Scope event listeners. Manejador de eventos. NO SON EVENTOS DEL DOM, SINO DEL SCOPE DE ANGULAR

	$scope.$on("OnMenuChange", function(evt, data){ 

    //Si no defino nada en la función, puede recibir n número de parámetros, y se recibirá un array arguments con los argumentos recibidos para la función

        $scope.model.title=data;
        
	});


}]
);
