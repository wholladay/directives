/* globals describe, beforeEach, module, it, inject, expect */
describe('myApp.version module', function() {
    'use strict';
    beforeEach(module('myApp.version'));

    describe('version service', function() {
        it('should return current version', inject(function(version) {
            expect(version).toEqual('0.1');
        }));
    });
});
