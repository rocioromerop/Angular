angular.module('moviedb').directive('badwords', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},

		//el componente sobre que uses esta directiva, tiene que tener ngModel
		require: 'ngModel', 
		// Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, elem, attrs, cntrl){
			var badwords = ["fuck", "shit"];
			cntrl.$validators.badwords = function (modelValue, viewValue){
				console.log("badwords", modelValue, viewValue);
				var rawWords = modelValue || "";
				var words = rawWords.split(" ");
				for(var i in badwords){
					var badword = badwords[i];
					if(words.indexOf(badword)>=0){
						cntrl.badword = badword;
						return false;
					}
				}
				cntrl.badword = "";
				return true;
			}
		}
	};
});