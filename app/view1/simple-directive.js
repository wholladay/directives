'use strict';

angular.module('myApp.view1.simple', [])

        .directive('simpleName', ['$log', function($log) {
            return {
                restrict: 'AE',
                scope: {
                    name: '@',
                    person: '@'
                },
                template: '<div><p>simple-name directive name: {{name}}</p><button ng-click="setName()">Change Name</button><p>person: {{person}} name:{{person.name}} gender: {{person.gender}}</p></div>',
                replace: true,
                link: function(scope, element) {

                    function _setName() {
                        scope.name = 'Harry';
                    }

                    function _init() {
                        scope.setName = _setName;
                    }

                    _init();
                }
            };
        }]);