angular.module("moviedb").directive('mediaItemList', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		 scope: {
		 	model: "=items",
		 	// Para pasar métodos:
		 	//Tendré que poner el código a ejecutar cuando en la directiva yo llame al getDetailUrl
		 	getDetailUrl: "&",
		 	dateMode: "@"
		 }, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		restrict: "AE",
		// template: '',
		templateUrl: 'views/mediaItemList.html',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		//link: function($scope, iElm, iAttrs, controller) {
			
		//}
	};
});