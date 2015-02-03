/* globals angular */
angular.module('myApp.version.interpolate-filter', [])

        .filter('interpolate', ['version', function(version) {
            'use strict';
            return function(text) {
                return String(text).replace(/%VERSION%/mg, version);
            };
        }]);
