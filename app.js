(function(){
var app = angular.module("catDog", ["ngRoute"]);	

app.config(function($routeProvider) {
	$routeProvider.when("/dog", {
		templateUrl: "dog.html"
	});

	$routeProvider.when("/dog2", {
		templateUrl: "dog2.html"
	});

	$routeProvider.when("/cat", {
		templateUrl: "cat.html"
	});

	$routeProvider.otherwise({
		template: "Select a link."
	});
});

})();