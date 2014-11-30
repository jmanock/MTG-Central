'use strict';

var mtgCentral = angular.module('mtgCentral', []);
mtgCentral.controller('MainCtrl', function ($scope, $http){
  $http.get('sets.json').success(function(data) {
    $scope.sets = data;
  });
});
