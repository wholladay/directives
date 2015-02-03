/* globals describe, beforeEach, module, it, inject, expect */
describe('myApp.view1 module', function() {
    'use strict';

    beforeEach(module('myApp.view1'));

    describe('view1 controller', function() {

        it('should ....', inject(function($controller) {
            //spec body
            var controller = $controller('attributeController');
            expect(controller).toBeDefined();
        }));

    });
});