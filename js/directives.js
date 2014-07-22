//'use strict';

///* Directives */
//angular.module('myApp.directives', [])
//    .directive('appVersion', ['version', function (version) {
//        return function (scope, elm, attrs) {
//            elm.text(version);
//        }
//    }])


solApp.directive('jqueryMobileTpl', function () {
    console.log('jqueryMobileTpl');
    return {

        link: function (scope, elm, attr) {
            console.log('jqueryMobileTpl - link');
            elm.trigger('create');
        }
    };
});


solApp.directive('repeatDone', function () {
    return function (scope, element, attrs) {
        // When the last element is rendered
        if (scope.$last) {
            element.parent().parent().trigger('create');
        }
    }
});
