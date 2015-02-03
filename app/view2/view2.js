/* globals angular */
angular.module('myApp.view2', ['ngRoute'])

        .config(['$routeProvider', function($routeProvider) {
            'use strict';
            $routeProvider.when('/view2', {
                templateUrl: 'view2/view2.html',
                controller: 'View2Ctrl'
            });
        }])

        .controller('View2Ctrl', [function() {

        }]);