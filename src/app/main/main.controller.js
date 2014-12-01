'use strict';

//  var demo = angular.module('mtgCentral', [])
// .controller('MainCtrl', function ($scope, $http){
//   $http.get('sets.json').success(function(data) {
//     $scope.sets = data;
//     $scope.deselectCard = function(card){
//       var index = $scope.selectedCards.indexOf(card);
//       if(index >= 0){
//         $scope.selectedCards.splice(index, 1);
//       }
//     };
//     $scope.selectCard = function(card){
//       $scope.selectedCards.push(card);
//     };
//     demo.controller(
//       'ItemController',function($scope){
//         $scope.toggleSelection = function(){
//           $scope.isSelected = ! $scope.isSelected;
//           if($scope.isSelected){
//             $scope.selectCard($scope.card);
//           }else{
//             $scope.deselectCard($scope.card);
//           }
//         };
//       }
//     );
//   });
// });
var demo = angular.module( 'Demo', [] );

demo.controller(
  'DemoController',
  function( $scope, $http ) {
    $http.get('sets.json').success(function(data){
      $scope.sets = data;
    $scope.deselectCard = function( card ) {
      var index = $scope.selectedCards.indexOf( card );

      if ( index >= 0 ) {

        $scope.selectedCards.splice( index, 1 );

      }

    };
    $scope.selectCard = function( card ) {

      $scope.selectedCards.push( card );

    };
    $scope.selectedCards = [];


  }
);

});

demo.controller(
  'ItemController',
  function( $scope ) {

    $scope.deactivate = function() {

      if ( $scope.isSelected ) {

        return;

      }

    };

    $scope.toggleSelection = function() {

      $scope.isSelected = ! $scope.isSelected;

      if ( $scope.isSelected ) {

        $scope.selectCard( $scope.card );

      } else {

        $scope.deselectCard( $scope.card );

      }

    };
    $scope.isSelected = false;


  }
);
