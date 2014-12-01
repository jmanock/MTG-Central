'use strict';

 angular.module('mtgCentral', [])
.controller('MainCtrl', function ($scope, $http){
  $http.get('sets.json').success(function(data) {
    $scope.sets = data;
    $scope.selection = [];
    $scope.toggle = function(idk){
      var pos = $scope.selection.indexOf(idk);
      if(pos === -1){
        $scope.selection.push(idk);
      }else{
        $scope.selection.splice(pos, 1);
      }
    };
  });
});
