
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
	$scope.message = 'Kendra Lamb - Student - Intern';
});

//create the controller and inject angular's $scope
spaApp.controller('aboutController', function($scope) {

	//create a message to display in our view
	$scope.message = 'More about Kendra Lamb';
	$scope.aboutMessage = "I am currently finishing my Junior year at Metropolitan State University at Denver for a Bacherlors Degree in Computer Science." + 
							"I also am an intern at Recondo Technology for the Bots team. There I work on maintaing and creating webbots to help collect insurance information" +
							"from insurace companies to return to hospitals on a patient by patient basis. More specifically dealing with Authorizations, Claims, and Eligibiliy benfeits."
});

spaApp.controller('contactController', function($scope) {

	//create a message to display in our view
	$scope.message = 'Ways to contact Kendra Lamb';
	$scope.linkedinMsg = "Linked in Profile";
	$scope.emailMsg = 'Email: ';
	$scope.email = 'klambo94@gmail.com';
	$scope.phoneMsg = 'Phone: '
	$scope.phone = '720-231-8807';
});