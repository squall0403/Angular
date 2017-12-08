var myApp = angular.module('myApp', [
	'ngRoute',
	'homePage'
]);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.
	when('/', {
		templateUrl: 'partials/homepage.html',
		controller: 'HomePage'
	})
	.when('/course/:itemId', {
		templateUrl: 'partials/courseDetail.html',
		controller: 'CourseDetail'
		
	})
	.when('/user/:itemId', {
		templateUrl: 'partials/userDetail.html',
		controller: 'UserDetail'
	})
	.otherwise({
		redirectTo: '/'
	})
	$locationProvider.hashPrefix('');
}]);