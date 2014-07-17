//'use strict';

function log(message) {
    if (windows && windows.console && windows.console.log) {
        console.log(message);
    }
}


//var sol = angular.module('sol', ['sol.controllers', 'sol.services'])
//    .config(function ($http, AuthorizationService) {

//        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//        // for form inputs)
//        if (window.cordova && window.cordova.plugins.Keyboard) {
//            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//        }
//        if (window.StatusBar) {
//            // org.apache.cordova.statusbar required
//            StatusBar.styleDefault();
//        }

//        $http.defaults.headers.common.Authorization = AuthorizationService.getAuthorizationHeader();
//    })


//var solApp = angular.module('solApp', ['$stateProvider', '$urlRouterProvider', '$locationProvider', 'ngRoute', 'sol.controllers', 'sol.services'])
var solApp = angular.module('solApp', ['ui.router', 'sol.controllers', 'sol.services'])
.run(function ($http, AuthorizationService) {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
    }

    $http.defaults.headers.common.Authorization = AuthorizationService.getAuthorizationHeader();
})

//.config(function ($stateProvider, $urlRouterProvider) {
//    $stateProvider

//      .state('app', {
//          url: "/app",
//          abstract: true,
//          templateUrl: "templates/main.html",
//          controller: 'AppCtrl'
//      })

//    .state('app.logout', {
//        url: "/logout",
//        views: {
//            'mainContent': {
//                controller: "LogoutCtrl"
//            }
//        }
//    })


//      .state('app.search', {
//          url: "/search",
//          views: {
//              'mainContent': {
//                  templateUrl: "templates/search.html"
//              }
//          }
//      })

//      .state('app.browse', {
//          url: "/browse",
//          views: {
//              'mainContent': {
//                  templateUrl: "templates/browse.html"
//              }
//          }
//      })

//      .state('app.playlists', {
//          url: "/playlists",
//          views: {
//              'mainContent': {
//                  templateUrl: "templates/playlists.html",
//                  controller: 'PlaylistsCtrl'
//              }
//          }
//      })

//      .state('app.single', {
//          url: "/playlists/:playlistId",
//          views: {
//              'mainContent': {
//                  templateUrl: "templates/playlist.html",
//                  controller: 'PlaylistCtrl'
//              }
//          }
//      })

//      .state('app.rozvrh', {
//          url: "/rozvrh",
//          views: {
//              'mainContent': {
//                  templateUrl: "templates/rozvrh.html",
//                  controller: 'RozvrhCtrl'
//              }
//          }
//      })

//    .state('app.rozvrh-detail', {
//        url: '/rozvrh/:rozvrhId',
//        views: {
//            'mainContent': {
//                templateUrl: 'templates/rozvrh-detail.html',
//                controller: 'RozvrhDetailCtrl'
//            }
//        }
//    })


//    // skolni-roky
//      .state('app.skolni-roky', {
//          url: "/skolni-roky",
//          views: {
//              'mainContent': {
//                  templateUrl: "templates/skolni-roky.html",
//                  controller: 'SkolniRokyCtrl'
//              }
//          }
//      })

//      .state('app.o-aplikaci', {
//          url: "/o-aplikaci",
//          views: {
//              'mainContent': {
//                  templateUrl: "templates/o-aplikaci.html"
//              }
//          }
//      })

//      .state('app.nastaveni', {
//          url: "/nastaveni",
//          views: {
//              'mainContent': {
//                  templateUrl: "templates/nastaveni.html"
//              }
//          }
//      })


//    .state('app.map', {
//        url: '/map',
//        views: {
//            'mainContent': {
//                templateUrl: 'templates/map.html',
//                controller: 'MapCtrl'
//            }
//        }
//    })

//    ;

//    // if none of the above states are matched, use this as the fallback
//    //$urlRouterProvider.otherwise('/app/playlists');
//    $urlRouterProvider.otherwise('/app/rozvrh');
//});



;



//// Declare app level module which depends on filters, and services
//var myApp = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ajoslin.mobile-navigate', 'ngMobile'])
//    .config(function ($compileProvider) {
//        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
//    })
//    .config(['$routeProvider', function ($routeProvider) {
//        $routeProvider.when('/', { templateUrl: 'partials/homeView.html', controller: 'HomeCtrl' });
//        $routeProvider.when('/view1', { templateUrl: 'partials/notificationView.html' });
//        $routeProvider.when('/view2', { templateUrl: 'partials/geolocationView.html' });
//        $routeProvider.when('/view3', { templateUrl: 'partials/accelerometerView.html' });
//        $routeProvider.when('/view4', { templateUrl: 'partials/deviceInfoView.html' });
//        $routeProvider.when('/view5', { templateUrl: 'partials/cameraView.html' });
//        $routeProvider.when('/view6', { templateUrl: 'partials/contactsView.html' });
//        $routeProvider.when('/view7', { templateUrl: 'partials/compassView.html' });
//        $routeProvider.when('/view8', { templateUrl: 'partials/hackerNewsView.html' });
//        $routeProvider.otherwise({ redirectTo: '/' });
//    }]);





///**
// * Created by HOD on 7. 7. 2014.
// */
//function alertInfo(event, ui) {
//    var strAlert = "";

//    for (var thing in event) {
//        strAlert += thing + " : " + event[thing] + "\n";
//    }
//    alert(strAlert);
//}




////ROZVRH

//;jQuery(function ($) {
//    $(document)
//        .on("pagecreate", "#rozvrh", function (event, ui) {
//            //console.log("create rozvrh");

//            $("#rozvrh")
//                .swipeleft(function () {
//                    //console.log("swipeleft");
//                    $.mobile.pageContainer.pagecontainer("change", "dochazka.html", {});
//                })
//                .swiperight(function () {
//                    //console.log("swiperight");
//                    $.mobile.pageContainer.pagecontainer("change", "hodnoceni.html", {});
//                });
//        })
//        .on("pagecreate", "#dochazka", function (event, ui) {
//            //console.log("create dochazka");

//            $("#dochazka")
//                .swipeleft(function () {
//                    //console.log("swipeleft");
//                    $.mobile.pageContainer.pagecontainer("change", "hodnoceni.html", {});
//                })
//                .swiperight(function () {
//                    //console.log("swiperight");
//                    $.mobile.pageContainer.pagecontainer("change", "rozvrh.html", {});
//                });
//        })
//        .on("pagecreate", "#hodnoceni", function (event, ui) {
//            //console.log("create hodnoceni");

//            $("#hodnoceni")
//                .swipeleft(function () {
//                    //console.log("swipeleft");
//                    $.mobile.pageContainer.pagecontainer("change", "rozvrh.html", {});
//                })
//                .swiperight(function () {
//                    //console.log("swiperight");
//                    $.mobile.pageContainer.pagecontainer("change", "dochazka.html", {});
//                });
//        });
//});

