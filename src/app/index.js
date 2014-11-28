'use strict';

angular.module('mtgCentral', ['ngCookies', 'ngSanitize', 'restangular', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
