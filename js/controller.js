var homepage = angular.module("homePage", []);

homepage.controller("HomePage", ["$scope", "$http", function($scope, $http){
  $http.get('js/coursedata.json').then(function(data){
    $scope.courses = data.data;
    $scope.filterValue = "coursename";
    $scope.displayValue = '5';
  })
  $http.get('js/userdata.json').then(function(data){
    $scope.users = data.data;
  })

}]);

homepage.controller("CourseDetail", ["$scope", "$http", "$routeParams", function($scope, $http, $routeParams){
  $http.get('js/coursedata.json').then(function(data){
    $scope.courses = data.data;
    $scope.whichItem = $routeParams.itemId;
  })

}]);

homepage.controller("UserDetail", ["$scope", "$http", "$routeParams", function($scope, $http, $routeParams){
  $http.get('js/userdata.json').then(function(data){
    $scope.users = data.data;
    $scope.whichItem = $routeParams.itemId;
  })

}]);
