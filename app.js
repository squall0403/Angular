(function(){
  // Get data from server
  var result;
  function getData(){
    $.ajax({
      url: 'http://test.fastget.net/api/profiles/5',
      callbackParameter: 'callback',
      async: true,
      crossDomain: true,
      headers:{"authorization": "Basic ZGRnZ2VlOkZnMTAwITIzNA=="},
      success: function(data) {
          //it works, do something with the data
      },
      error: function() {
          //something went wrong, handle the error and display a message
          console.log('failed');
      },
      complete: function(data){
        result = data.responseText;
        return data.responseText;
      }
    });
  }
  // -----


  // Define module
  var app = angular.module('app', []);

  app.controller('MainPage', function($scope, $timeout){
    result = getData();
    console.log(result);
    $timeout(function(){
      $scope.myData = JSON.parse(result);
    }, 1500)

  });

})();
