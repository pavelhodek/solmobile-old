//'use strict';

/* Services */

var solAppServices = angular.module('solApp.services', []);


solAppServices.factory('navSvc', function ($navigate) {
    return {
        slidePage: function (path, type) {
            $navigate.go(path, type);
        },
        back: function () {
            $navigate.back();
        }
    }
});


solAppServices.factory('SkolniRokyService', function ($http, $q, AuthorizationService) {
    // Might use a resource here that returns a JSON array


    // PhoneGap application
    // Web page
    // production

    //var serviceURL = "http://10.0.2.2/SOLWebApi/api/";
    var serviceURL = "http://localhost/SOLWebApi/api/";
    var serviceURL = "http://172.20.2.26/SOLWebApi/api/";


    return {
        all: function () {
            console.log('SkolniRokyService - all');
            var url = serviceURL + 'SkolniRoky';

            console.log(AuthorizationService.getAuthorizationHeader());

            $http.defaults.headers.common.Authorization = AuthorizationService.getAuthorizationHeader();
            //return {};
            return $http.get(url);
        }
    };

})


solAppServices.factory('AuthorizationService', function ($http) {

    function setAuthorizationHeader() {
        $http.defaults.headers.common.Authorization = getAuthorizationHeader();
    }

    function getAuthorizationHeader() {
        var username = localStorage.getItem("username");
        var password = localStorage.getItem("password");

        var basicAuthHash = base64.encode(username + ":" + password); // window.btoa("ada:xx");

        //console.log('getAuthorizationHeader login: ' + username + " / " + password);


        return 'Basic ' + basicAuthHash;
    }


    function clearLogin() {
        var username = localStorage.removeItem("username");
        var password = localStorage.removeItem("password");
    }


    return {
        setAuthorizationHeader: setAuthorizationHeader,
        getAuthorizationHeader: getAuthorizationHeader,


        logout: function () {
            clearLogin();
        },


        storeLogin: function (username, password) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);

            setAuthorizationHeader();
        }
    }
})



//// Simple value service.
//angular.module('myApp.services', []).
//  value('version', '0.1');


//// phonegap ready service - listens to deviceready
//myApp.factory('phonegapReady', function () {
//    return function (fn) {
//        var queue = [];
//        var impl = function () {
//            queue.push(Array.prototype.slice.call(arguments));
//        };

//        document.addEventListener('deviceready', function () {
//            queue.forEach(function (args) {
//                fn.apply(this, args);
//            });
//            impl = fn;
//        }, false);

//        return function () {
//            return impl.apply(this, arguments);
//        };
//    };
//});





//myApp.factory('geolocation', function ($rootScope, phonegapReady) {
//    return {
//        getCurrentPosition: function (onSuccess, onError, options) {
//            navigator.geolocation.getCurrentPosition(function () {
//                var that = this,
//                args = arguments;

//                if (onSuccess) {
//                    $rootScope.$apply(function () {
//                        onSuccess.apply(that, args);
//                    });
//                }
//            }, function () {
//                var that = this,
//                args = arguments;

//                if (onError) {
//                    $rootScope.$apply(function () {
//                        onError.apply(that, args);
//                    });
//                }
//            },
//                options);
//        }
//    };
//});

//myApp.factory('accelerometer', function ($rootScope, phonegapReady) {
//    return {
//        getCurrentAcceleration: phonegapReady(function (onSuccess, onError) {
//            navigator.accelerometer.getCurrentAcceleration(function () {
//                var that = this,
//                    args = arguments;

//                if (onSuccess) {
//                    $rootScope.$apply(function () {
//                        onSuccess.apply(that, args);
//                    });
//                }
//            }, function () {
//                var that = this,
//                args = arguments;

//                if (onError) {
//                    $rootScope.$apply(function () {
//                        onError.apply(that, args);
//                    });
//                }
//            });
//        })
//    };
//});

//myApp.factory('notification', function ($rootScope, phonegapReady) {
//    return {
//        alert: phonegapReady(function (message, alertCallback, title, buttonName) {
//            navigator.notification.alert(message, function () {
//                var that = this,
//                    args = arguments;

//                $rootScope.$apply(function () {
//                    alertCallback.apply(that, args);
//                });
//            }, title, buttonName);
//        }),
//        confirm: phonegapReady(function (message, confirmCallback, title, buttonLabels) {
//            navigator.notification.confirm(message, function () {
//                var that = this,
//                    args = arguments;

//                $rootScope.$apply(function () {
//                    confirmCallback.apply(that, args);
//                });
//            }, title, buttonLabels);
//        }),
//        beep: function (times) {
//            navigator.notification.beep(times);
//        },
//        vibrate: function (milliseconds) {
//            navigator.notification.vibrate(milliseconds);
//        }
//    };
//});

//myApp.factory('navSvc', function ($navigate) {
//    return {
//        slidePage: function (path, type) {
//            $navigate.go(path, type);
//        },
//        back: function () {
//            $navigate.back();
//        }
//    }
//});

//myApp.factory('compass', function ($rootScope, phonegapReady) {
//    return {
//        getCurrentHeading: phonegapReady(function (onSuccess, onError) {
//            navigator.compass.getCurrentHeading(function () {
//                var that = this,
//                    args = arguments;

//                if (onSuccess) {
//                    $rootScope.$apply(function () {
//                        onSuccess.apply(that, args);
//                    });
//                }
//            }, function () {
//                var that = this,
//                    args = arguments;

//                if (onError) {
//                    $rootScope.$apply(function () {
//                        onError.apply(that, args);
//                    });
//                }
//            });
//        })
//    };
//});

//myApp.factory('contacts', function ($rootScope, phonegapReady) {
//    return {
//        findContacts: phonegapReady(function (onSuccess, onError) {
//            var options = new ContactFindOptions();
//            options.filter = "";
//            options.multiple = true;
//            var fields = ["displayName", "name"];
//            navigator.contacts.find(fields, function (r) {
//                console.log("Success" + r.length); var that = this,
//                    args = arguments;
//                if (onSuccess) {
//                    $rootScope.$apply(function () {
//                        onSuccess.apply(that, args);
//                    });
//                }
//            }, function () {
//                var that = this,
//                    args = arguments;

//                if (onError) {
//                    $rootScope.$apply(function () {
//                        onError.apply(that, args);
//                    });
//                }
//            }, options)
//        })
//    }
//});