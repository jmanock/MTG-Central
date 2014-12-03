'use strict';

angular.module('mtgCentral', ['ngAnimate', 'ngCookies', 'restangular', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
// Facebook auth demo
/*var ref = new Firebase('https://mtg-central.firebaseio.com/');

console.debug(ref);

 // Only do this for login...
ref.authWithOAuthPopup('facebook', function() {
console.debug(arguments);
});


/** // Only do this for logout...
ref.unauth();
*/
/*
var users = new Firebase('https://mtg-central.firebaseio.com/users');

var authdUser = ref.getAuth();
users.child(authdUser.uid).set({
  uid: authdUser.uid,
  facebook: authdUser.facebook,
  fullName: authdUser.facebook.displayName,
  avatarUrl: authdUser.facebook.cachedUserProfile.picture.data.url,
});*/
