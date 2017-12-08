var myApp = angular.module("myApp", []);

myApp.controller("CourseList", ["$scope", "$http", function($scope, $http){
  $http.get('js/coursedata.json').then(function(data){
    $scope.courses = data.data;
    $scope.filterValue = "coursename";
    $scope.displayValue = '5';
  })

}]);
