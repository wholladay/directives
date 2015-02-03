/* globals angular */
angular.module('myApp.view1', ['ngRoute', 'myApp.view1.simple'])

        .config(['$routeProvider', function($routeProvider) {
            'use strict';
            $routeProvider.when('/attribute', {
                templateUrl: 'attribute/attribute.html',
                controller: 'attributeController'
            });
        }])

        .controller('attributeController', ['$scope', function($scope) {
            'use strict';

            function _setName() {
                $scope.name = 'Tom';
            }

            function _setName2() {
                $scope.name = 'Dick';
            }

            function _init() {
                $scope.person = {
                    name: 'Susan',
                    gender: 'F'
                };
                $scope.setName = _setName;
                $scope.setName2 = _setName2;
            }

            _init();
        }]);
