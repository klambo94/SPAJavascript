
//create the module
var spaApp = angular.module('spaApp', ['ngRoute']);

spaApp.config(function($routeProvider) {
	$routeProvider

	//route for home page
	.when('/', {
		templateUrl: 'pages/home.html', 
		controller: 'mainController'
	})

	//route for about page
	.when('/about', {
		templateUrl: 'pages/about.html', 
		controller: 'aboutController'
	})

	//route for contact page
	.when('/contact', {
		templateUrl: 'pages/contact.html', 
		controller: 'contactController'
	});

});


//create the controller and inject angular's $scope
spaApp.controller('mainController', function($scope) {

	//create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
});

//create the controller and inject angular's $scope
spaApp.controller('aboutController', function($scope) {

	//create a message to display in our view
	$scope.message = 'I am about page!';
});

spaApp.controller('contactController', function($scope) {

	//create a message to display in our view
	$scope.message = 'I am contact page!';
});