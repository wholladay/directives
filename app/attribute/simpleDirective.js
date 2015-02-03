/* globals angular */
angular.module('myApp.view1.simple', [])

        .directive('simpleName', function() {
            'use strict';
            return {
                restrict: 'AE',
                scope: {
                    name: '@',
                    person: '@'
                },
                templateUrl: 'attribute/simple.html',
                replace: true,
                link: function(scope) {

                    function _setName() {
                        scope.name = 'Harry';
                    }

                    function _init() {
                        scope.setName = _setName;
                    }

                    _init();
                }
            };
        });