'use strict';

// Create our main mtgCentral module and injecting dependencies
var mtgApp = angular.module('mtgCentral', ['mtgcMain', 'mtgcList', 'ngCookies', 'ngSanitize', 'restangular', 'ui.router', 'uiRouterStyles', 'firebase'])

.constant('CONFIG', {
  Firebase: {
    baseUrl: 'https://mtg-central.firebaseio.com/'
  }
});

// // Facebook auth demo
// var ref = new Firebase('https://mtg-central.firebaseio.com/');
//
// console.debug(ref);
//
// /** // Only do this for login...
// ref.authWithOAuthPopup('facebook', function() {
//   console.debug(arguments);
// });
// */
//
// /** // Only do this for logout...
// ref.unauth();
// */
//
// var users = new Firebase('https://mtg-central.firebaseio.com/users');
//
// var authdUser = ref.getAuth();
// users.child(authdUser.uid).set({
//   uid: authdUser.uid,
//   facebook: authdUser.facebook,
//   fullName: authdUser.facebook.displayName,
//   avatarUrl: authdUser.facebook.cachedUserProfile.picture.data.url,
// });

// Configuring our routes
mtgApp.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider

  // Route to show our home page
  .state('home', {
    url: '/',
    templateUrl: 'app/main/main.html',
    controller: 'MainCtrl',
    data: {
      css: 'app/main/mainMTG.css'
    }
  })

  // Route to show the listings
  .state('list', {
    url: '/list',
    templateUrl: 'app/listings/listings.html',
    controller: 'ListCtrl',
    data: {
      css: 'app/listings/listings.css'
    }
  });

  // Catch all for routes
  // Send users to default route (home)
  $urlRouterProvider.otherwise('/');

});
