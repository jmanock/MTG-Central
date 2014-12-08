
'use strict';

angular.module('mtgCentral')

.factory('cards', ['$firebase', function($firebase){
  var ref = new Firebase('https://mtg-central.firebaseio.com/cards')
  //.limitToFirst(10000);
  return $firebase(ref).$asArray();
}])

.factory('SearchSvc', ['$q', function($q){
  function SearchSvc() {}
  SearchSvc.prototype.searchByName = function(searchString) {
    var deffered = $q.defer();
    if (searchString.length >= 3) {
      // Figure out the best way to add a delay

      $.ajax({
        url: "http://api.mtgdb.info/search/" + searchString,
        success: function(data) {

          deffered.resolve(data);
        }
      });
    }

    return deffered.promise;

  };
  return (SearchSvc);
}])

.controller('SearchCtrl', ['cards', 'SearchSvc', '$scope', function(cards, SearchSvc, $scope){
  var self = this;

  var searchSvc = new SearchSvc();

  this.sets = cards;
  this.haves = [];
  this.wants = [];
  //var badSets = ['badSet'];

  this.cards = [];

  this.searchByName = function(){
    self.cards = [];
    searchSvc.searchByName($scope.searchForm).then(function(data){
      data.forEach(function(card){
        // Create an object of known online only sets and compare the set name
        // To the object and remove those results
        self.cards.push(card);
      });
    });
  };

// Add Item to either list
this.addItem = function(index){
  var list = self.haves;
  // See what check box has been checked
  if($('#haveCheck').prop('checked')){
  }else{
     list = self.wants;
  }
  if(list.length === 0){
    list.push(self.cards[index]);
  }else{
    var duplicate = false;
    list.some(function(value){
      var tempId = self.cards[index].id;
      if(value.id === tempId){
        duplicate = true;
      }
    });
    if(duplicate === false){
      list.push(self.cards[index]);
    }
  }

};


// Only one checkbox `checked` at a time
  $('.checkbox').on('change', function(){
    $('.checkbox').not(this).prop('checked', false);
  });


this.removeItem = function(index){

  var list = self.haves;

  for(var i = 0; i < list.length; i++){
    if (list[i].id == index){
      list.splice(i,1);
    }
  }

};
this.removeItemWant = function(index){
  for(var i = 0; i <self.wants.length; i++){
    if(self.wants[i].id == index){
      self.wants.splice(i,1);
    }
  }
};

}]);
