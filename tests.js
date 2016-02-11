'use strict';

describe('nl2br-filter', function () {
    var $filter;

    beforeEach(function () {
        module('nl2br-filter');

        inject(function (_$filter_) {
            $filter = _$filter_;
        });
    });

    it('should escape HTML', function () {
        var testStr = '<script></script>';
        var result = $filter('nl2br')(testStr);

        expect(result.$$unwrapTrustedValue()).toEqual('&lt;script&gt;&lt;/script&gt;');
    });

    it('should convert newlines to <br>-tags', function () {
        var testStr = 'row1\nrow2';
        var result = $filter('nl2br')(testStr);

        expect(result.$$unwrapTrustedValue()).toEqual('row1<br>row2');
    });

    it('should return `undefined` if the input is undefined', function () {
        var testStr;
        var result = $filter('nl2br')(testStr);

        expect(result).toBeUndefined();
    });
});
