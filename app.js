(function(){
// Working with local storage

  document.addEventListener("DOMContentLoaded", function(){

    var someSetting = localStorage.getItem('someSetting');
    console.log(someSetting);


    main();
  },false);

function main(){
  // Define module
  var app = angular.module('app', [
    'ionic'
  ]);

  // controller to get profile data
  app.controller('ProfileController', function($scope, $http){
    var settings = {
      method: 'GET',
      url: 'http://test.fastget.net/api/profiles/4',
      headers:{"authorization": "Basic ZHV5bnhhOkZnMTAwITIzNDU="},
      async: true,
      crossDomain: true
    }
      $http(settings).then(function(data){
          $scope.myProfile = data.data;
      })
  });

  // controller for profile Register
  app.controller('ProfileCreation', function ($scope, $http) {
    $scope.language = "en"
    var profileObject={}
    var settings = {
      method: 'POST',
      url: 'http://test.fastget.net/api/profiles/',
      data: {},
      headers:{
        "x-csrftoken": "csrf",
        "content-type": "application/json",
        "authorization": "Basic ZmFzdGdldDpGZHNhJDMyMQ=="
      },
      async: true,
      crossDomain: true
    }

    $scope.createProfile = function (){
      profileObject = {
        "username":$scope.phone,
        "first_name":$scope.first_name,
      	"last_name":$scope.last_name,
      	"phone":$scope.phone,
      	"password":$scope.password,
      	"address":$scope.address,
      	"email":$scope.email,
      	"language":$scope.language
      };
      settings.data = Object.assign(settings.data,profileObject);
      $http(settings).then(function(data){
          $scope.returnData = data.data;
          clearFrom();
          alert('Accout created, Logging in')
      }, function(response){
          alert(response.message)
          alert('Can not create account');
      });
      function clearFrom(){
        $scope.phone='';
        $scope.first_name='';
      	$scope.last_name='';
        $scope.phone='';
      	$scope.password='';
      	$scope.address='';
      	$scope.email='';
      }
    }

  });

  // define directive for Register
}




})();
