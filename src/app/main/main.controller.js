'use strict';

angular.module('mtgCentral', [])
.controller('MainCtrl', function ($http){
  var self = this;
  $http.get('sets.json').success(function(data) {
    self.sets = data;
    self.selection = [];
    self.toggle = function(s){
      var pos = self.selection.indexOf(s);
      if(pos === -1){
        this.selection.push(s);
      }else{
        this.selection.splice(pos, 1);
      }
    };
  });
});
