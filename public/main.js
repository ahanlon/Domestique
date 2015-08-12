var domestiqueApp = angular.module('domestiqueApp', ['ngRoute', 'ngResource']);

domestiqueApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'index',
      controller: 'authenticationController'
    })
  //   .when('/ridelist', {
  //     templateUrl: '/ridelist',
  //     controller: 'indexController'
  // });
});

domestiqueApp.controller('authenticationController', function($scope, $http){
	$scope.login = function(){
		$http.post('/auth/login', $scope.user).then(function(response){
			console.log(response);
		});
		console.log($scope.user);
		}

	$scope.addUser = function(){
		$http.post('/auth/signup', $scope.newUser);
		}
	});



















// UserFactory creation
domestiqueApp.factory('userFactory', function($resource){

	// This creates a $resource model
	// Our base URL is /api/users with the option of additionally passing the /:id component
	// All the methods this $resource model uses will be in reference to those URLs
	var model = $resource('/api/users/:id', {id : '@_id'})

	// Factories use the revealing module pattern, so we must return the relevant pieces of information
	return {
		model   : model,
		users : model.query() // GET - /api/users  Should get all the users in our DB
	}
});