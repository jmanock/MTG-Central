'use strict';
var app = angular.module('mtgCentral', ['firebase']);
app.factory('cards', ['$firebase',
function($firebase){
  var ref = new Firebase('https://mtg-central.firebaseio.com/cards')
  .limitToFirst(500);
  return $firebase(ref).$asArray();
}]);
app.controller('SearchCtrl', ['$scope', 'cards',
function($scope, cards){
  $scope.sets = cards;
}]);
