'use strict';

// FireBase call

//  angular.module('mtgCentral', ['firebase'])
// .controller('MainCtrl', function ($scope, $firebase){
//   var ref = new Firebase('https://mtg-central.firebaseio.com/cards')
//   .limitToFirst(100);
//   var fb = $firebase(ref);
//   var syncObject = fb.$asObject();
//   syncObject.$bindTo($scope, 'sets');
//
// });

// Testing search working now
var app = angular.module('mtgCentral', ['firebase']);
app.factory('cards', ['$firebase',
function($firebase){
  var ref = new Firebase('https://mtg-central.firebaseio.com/cards')
  .limitToFirst(100);
  return $firebase(ref).$asArray();
}]);
app.controller('MainCtrl', ['$scope', 'cards',
function($scope, cards){
  $scope.sets = cards;
}]);


//  Angular http get call


//   $http.get('')
//   .success(function(data) {
//     self.sets = data;
//     self.selection = [];
//     self.toggle = function(s){
//       var pos = self.selection.indexOf(s);
//       if(pos === -1){
//         this.selection.push(s);
//       }else{
//         this.selection.splice(pos, 1);
//       }
//     };
//   });
// });
