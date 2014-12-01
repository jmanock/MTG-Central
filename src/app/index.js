'use strict';

var mtgApp = angular.module('mtgCentral', ['mtgcMain', 'mtgcList', 'ngCookies', 'ngSanitize', 'restangular', 'ngRoute']);

mtgApp.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/main/main.html',
    controller: 'MainCtrl'
  })
  .when('/list', {
    templateUrl: 'app/listings/listings.html',
    controller: 'ListCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
})
;
