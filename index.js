'use strict';

angular.module('nl2br-filter', [])
.filter('nl2br', ['$sce', function ($sce) {
    function escapeHTML(html) {
        var div = document.createElement('div');
        div.innerText = html;

        return div.innerHTML;
    }

    return function (input) {
        if (typeof input === 'undefined') {
            return input;
        }

        var sanitizedInput = escapeHTML(input);
        var html = sanitizedInput.replace(/\n/g, '<br>');

        return $sce.trustAsHtml(html);
    };
}]);
