var app = angular.module('SmartOfficeApp', ["ngRoute"]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when("/services", {
		templateUrl : "app/services.html"
	})
	.when("/orders", {
		templateUrl : "app/orders.html"
	})
	.when("/settings", {
		templateUrl : "app/settings.html"
	})
	.when("/login", {
		templateUrl : "app/login.html"
	})
	.when("/admin", {
		templateUrl : "app/admin.html"
	});
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
	$locationProvider.hashPrefix('');
}] 
);

app.controller('mainController', function($scope, $location, $route) {

	$scope.$location = $location;

	$scope.greeting = "Hello from AngularJS, User";

	$scope.selectedOrder = {};
	$scope.singleOrderShowed = false;

	$scope.setSelectedOrder = function(item){
		$scope.selectedOrder = item; 
		$scope.singleOrderShowed = true;
	}

	$scope.backToOrdersList = function(){
		$scope.singleOrderShowed = false;
	}

	$scope.initOrders = function(){
		var arr = [];
		for(var i = 0; i < 10; i++){
			var buf = {
				number: i+1,
				name: "name",
				description: "desc",
			};
			arr.push(buf);
		}
		return arr;
	}

	$scope.currentUser = {}

	$scope.login = function(login, password){
		console.log("login");
		console.log(login);
		for(var i = 0; i < $scope.users.length; i++){
			if($scope.users[i].login == login 
				&& $scope.users[i].password == password){
				$scope.currentUser = $scope.users[i];
				console.log($scope.currentUser);
				$scope.$location.path("services");
				return;
			}
		}
	}

	$scope.users = [
	{
		login: "managerAdmin",
		password: "managerAdmin",
		accessLevel: 1
	},
	{
		login: "manager",
		password: "manager",
		accessLevel: 2
	},
	{
		login: "clientAdmin",
		password: "clientAdmin",
		accessLevel: 3
	},
	{
		login: "client",
		password: "client",
		accessLevel: 4
	}
	]

	$scope.isLoggedIn = function(){
		var path = $location.path().split("/");
		if (path.includes("login")) {
			return false;
		}
		return true;
	}

	$scope.orders = $scope.initOrders();
});