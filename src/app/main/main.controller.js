'use strict';

angular.module('mtgCentral')

.factory('Firebase', function(CONFIG){
  var ref = new Firebase(CONFIG.Firebase.baseUrl);
})

.factory('Auth', function (Auth, CONFIG, $firebaseAuth, $firebase){

  var auth = $firebaseAuth(ref);

  });

  return {
    onAuth: function(cb){
      auth.$onAuth(function(user){
        cb(getUser(user));
      });
    },
    login: function(){
      return auth.$authwithOAuthPopup('facebook');
    },
    logout: function(){
      console.debug('Logging out from Auth!');
      auth.$unauth();
    },
    getUser: function(){
      var authdUser = ref.getAuth();

      if(authdUser === null){
        return null;
      }

      return $firebase(ref
        .child('users')
        .child(authdUser.uid))
        .asObject();
    }
  };
})

.factory('AuthdUser', function(CONFIG, $firebase, Auth){
  var ref = new Firebase(CONFIG.Firebase.baseUrl);

  var authdUser = ref.getAuth();




})

.controller('MainCtrl', function (Auth) {
  var self = this;

  Auth.onAuth(function(data){
    self.user = data;
  });

  this.login = Auth.login;

  this.logout = Auth.logout;

});
