var app = angular.module('SmartOfficeApp', ["ngRoute"]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when("/orders", {
		templateUrl : "orders.html"
	})
	.when("/settings", {
		templateUrl : "settings.html"
	});
	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix('');
}] 
);

app.controller('mainController', function($scope) {
	$scope.greeting = "Hello from AngularJS, User";
});