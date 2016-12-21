(function () {
    'use strict'

    $(document).ready(function () {
        var server = new Server('#servers', { componentName: 'Server!' });
        server.mount();
    })

})($);