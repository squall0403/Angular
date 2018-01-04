(function(){

  // Define module
  var app = angular.module('app', [
    'ionic'
  ]);

  // Tabs controller
  app.controller('TabsController', function(){

  });
  // controller to get profile data
  app.controller('MainPage', function($scope, $http){
    var settings = {
      method: 'GET',
      url: 'http://test.fastget.net/api/profiles/4',
      headers:{"authorization": "Basic ZGRnZ2VlOkZnMTAwITIzNA=="},
      async: true,
      crossDomain: true
    }
      $http(settings).then(function(data){
          $scope.myData = data.data;
      })
  });

  // define directive for Register
  app.directive('appRegister', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/register.html'
    };
  });

})();
