(function () {
    'use strict'

    $(document).ready(function () {
        $.get('/api/ServerConnection', function (servers) {
            var selectableList = new SelectableList('#servers', {
                title: 'Listagem de Servidores',
                items: $(servers).map(function (index, server) {
                    return { item: server.ServerName };
                })
            });

            selectableList.mount();
        });
        //var server = new Server('#servers', { componentName: 'Server!' });
        //server.mount();
    });

})($);