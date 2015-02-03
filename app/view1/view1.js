'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.view1.simple'])

        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/view1', {
                templateUrl: 'view1/view1.html',
                controller: 'View1Ctrl'
            });
        }])

        .controller('View1Ctrl', ['$scope', function($scope) {

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
