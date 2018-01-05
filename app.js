(function(){

  // Define module
  var app = angular.module('app', [
    'ionic'
  ]);

  // Tabs controller
  app.controller('TabsController', function(){

  });
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
          $scope.myData = data.data;
      })
  });

  // controller for profile Register
  app.controller('ProfileCreation', function ($scope, $http) {
    $scope.language = "en"
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
      var profileObject = {
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
      });
    }
  });

  // define directive for Register

})();
