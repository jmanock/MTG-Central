'use strict';

angular.module('mtgCentral', ['firebase'])
.controller('MainCtrl', function ($scope, $firebase){
  var ref = new Firebase('https://mtg-central.firebaseio.com/');
  var fb = $firebase(ref);
  var syncObject = fb.$asObject();
  syncObject.$bindTo($scope, 'sets');

});
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
