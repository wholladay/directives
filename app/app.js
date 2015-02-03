// Declare app level module which depends on views, and components
/* globals angular */
angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]).
        config(['$routeProvider', function($routeProvider) {
            'use strict';
            $routeProvider.otherwise({redirectTo: '/attribute'});
        }]);
