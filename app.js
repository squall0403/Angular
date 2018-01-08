(function(){

  // Define module
  var app = angular.module('app', [
    'pascalprecht.translate'
    // 'ionic'
  ]);
  var translationsEN = {};
  var translationsVI = {};

  app.config(['$translateProvider', function($translateProvider){
    $translateProvider.translations('en', translationsEN);
    $translateProvider.translations('vi', translationsVI);
    $translateProvider.fallbackLanguage('en');
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escape');

  }]);

  app.controller('Ctrl', ['$http', '$translate', '$scope', function ($http, $translate, $scope) {

    $http.get('http://test.fastget.net/static/languages/vi.json').then(function(data){
      var res = data.data;
      console.log(res);
      translationsVI = Object.assign(translationsVI,res);


    });

    $http.get('http://test.fastget.net/static/languages/en.json').then(function(data){
      translationsVI = Object.assign(translationsEN,data.data);

    });
    console.log(translationsVI);
    console.log(translationsEN);
    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
    };
  }]);


})();
