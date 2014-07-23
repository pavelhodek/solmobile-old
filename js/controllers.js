//'use strict';

/* Controllers */


angular.module('solApp.controllers', [])

    .controller('GlobalCtrl', function ($scope, $rootScope) {
        $rootScope.userName = 'hod';
        $rootScope.selectedDate = new Date();

        $rootScope.incrementSelectedDate = function () {
            $rootScope.selectedDate.setDate($rootScope.selectedDate.getDate() + 1);
        }

        $rootScope.decrementSelectedDate = function () {
            $rootScope.selectedDate.setDate($rootScope.selectedDate.getDate() - 1);
        }

        $rootScope.decrementSelectedDate = function (daysToAdd) {
            $rootScope.selectedDate.setDate($rootScope.selectedDate.getDate() + daysToAdd);
        }

    })

    .controller('SkolniRokyCtrl', function ($scope, SkolniRokyService) {

        SkolniRokyService.all()
            .success(function (data) { console.log(data); $scope.skolniRoky = data; })
            .error(function (data) { console.log(data); })
        ;
        
    })

    .controller('ZapisHodnoceniCtrl', function ($scope, $rootScope, $log, ZapisHodnoceniService) {
        $scope.pokus = "ABCD";

        $scope.popisHodiny = '27.7.2014 (3.): ČJL (Český jazyk a literatura) - prostě nějaká rozumně dlouhá informace do záhlaví';

        var udalostID = '';

        var xx = ZapisHodnoceniService.getByUdalostId(udalostID)
        xx.then(
            function (result) {
                //$log.log(result);
                $scope.data = result;
            },
            function (error) {
                $log.error(error);
            });


            //.success(function (data) {
            //    $log.log(data);
            //    $scope.data = data;
            //})
            //.error(function (data) {
            //    $log.error(data);
            //});





        $scope.prednastavitDlePredchozi = function () {
            $log.info('prednastavitDlePredchozi');
        };

        $scope.ulozit = function () {
            $log.info('ulozit');               
        }

        $scope.storno = function () {
            $log.info('storno');
        }

    })


    //.controller('HomeCtrl', function ($scope, navSvc, $rootScope) {
    //    $rootScope.showSettings = false;
    //    $scope.slidePage = function (path, type) {
    //        console.log('slidePage');
    //        navSvc.slidePage(path, type);
    //        console.log('slidePage - OK');
    //    };
    //    $scope.back = function () {
    //        navSvc.back();
    //    };
    //    $scope.changeSettings = function () {
    //        $rootScope.showSettings = true;
    //    };
    //    $scope.closeOverlay = function () {
    //        $rootScope.showSettings = false;
    //    };

    //    $scope.openPopup = function (page, popupId){
    //        $('#' + popupId).html($(page.el)).popup('open');
    //    }

    //})



//angular.module('sol.controllers', [])
//    .controller('SkolniRokyCtrl', function ($scope, SkolniRokyService) {
//        SkolniRokyService.all().success(function (data) { $scope.skolniRoky = data });
//    })





//function HomeCtrl($scope, navSvc, $rootScope) {
//    $rootScope.showSettings = false;
//    $scope.slidePage = function (path, type) {
//        navSvc.slidePage(path, type);
//    };
//    $scope.back = function () {
//        navSvc.back();
//    };
//    $scope.changeSettings = function () {
//        $rootScope.showSettings = true;
//    };
//    $scope.closeOverlay = function () {
//        $rootScope.showSettings = false;
//    };
//}

//function NotificationCtrl($scope) {
//    $scope.alertNotify = function () {
//        navigator.notification.alert("Sample Alert", function () { console.log("Alert success") }, "My Alert", "Close");
//    };

//    $scope.beepNotify = function () {
//        navigator.notification.beep(1);
//    };

//    $scope.vibrateNotify = function () {
//        navigator.notification.vibrate(3000);
//    };

//    $scope.confirmNotify = function () {
//        navigator.notification.confirm("My Confirmation", function () { console.log("Confirm Success") }, "Are you sure?", ["Ok", "Cancel"]);
//    };
//}

//function GeolocationCtrl($scope, navSvc, $rootScope) {
//    navigator.geolocation.getCurrentPosition(function (position) {
//        $scope.position = position;
//        $scope.$apply();
//    }, function (e) { console.log("Error retrieving position " + e.code + " " + e.message) });

//    $scope.back = function () {
//        navSvc.back();
//    };
//}

//function AccelerCtrl($scope) {
//    navigator.accelerometer.getCurrentAcceleration(function (acceleration) {
//        $scope.acceleration = acceleration;
//    }, function (e) { console.log("Error finding acceleration " + e) });
//}

//function DeviceCtrl($scope) {
//    $scope.device = device;
//}

//function CompassCtrl($scope) {
//    navigator.compass.getCurrentHeading(function (heading) {
//        $scope.heading = heading;
//        $scope.$apply();
//    }, function (e) { console.log("Error finding compass " + e.code) });
//}

//function HackerNewsCtrl($scope, $rootScope) {

//    // load in data from hacker news unless we already have
//    if (!$rootScope.items) {

//        jx.load('http://api.ihackernews.com/page', function (data) {
//            console.log(JSON.stringify(data));
//            $rootScope.items = data.items;
//            $scope.$apply();
//        }, 'json');

//    } else {
//        console.log('data already loaded');
//    }

//    $scope.loadItem = function (item) {
//        navigator.notification.alert(item.url, function () { console.log("Alert success") }, "My Alert", "Close");
//    };
//}


//function ContactsCtrl($scope) {
//    $scope.find = function () {
//        $scope.contacts = [];
//        var options = new ContactFindOptions();
//        //options.filter=""; //returns all results
//        options.filter = $scope.searchTxt;
//        options.multiple = true;
//        var fields = ["displayName", "name", "phoneNumbers"];
//        navigator.contacts.find(fields, function (contacts) {
//            $scope.contacts = contacts;
//            $scope.$apply();
//        }, function (e) { console.log("Error finding contacts " + e.code) }, options);
//    }
//}

//function CameraCtrl($scope) {
//    $scope.takePic = function () {
//        var options = {
//            quality: 50,
//            destinationType: Camera.DestinationType.DATA_URL,
//            sourceType: 1, // 0:Photo Library, 1=Camera, 2=Saved Photo Album
//            encodingType: 0 // 0=JPG 1=PNG
//        }
//        // Take picture using device camera and retrieve image as base64-encoded string
//        navigator.camera.getPicture(onSuccess, onFail, options);
//    }
//    var onSuccess = function (imageData) {
//        console.log("On Success! ");
//        $scope.picData = "data:image/jpeg;base64," + imageData;
//        $scope.$apply();
//    };
//    var onFail = function (e) {
//        console.log("On fail " + e);
//    };
//}

