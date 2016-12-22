(function () {
    'use strict'

    function mountServers(servers) {
        var serversDropdown = new Collapse('#servers', {
            componentName: 'Listagem de Servidores',
            id: 'servers',
            color: 'green',
            items: !servers ? [] : servers.map(function (server) {
                if (server.ServerName) {
                    return { displayName: server.ServerName, value: server.ServerName };
                }
            })
        });

        serversDropdown.mount(function (selected) {
            $.get('/Server/Connect', { serverName: selected }, function (data) {
                mountDatabases(selected, data.databases);
            })
        });
    }

    function mountDatabases(server, databases) {
        var treeview = new TreeView('#databases', {
            componentName: 'Bancos em ' + server,
            root: databases.map(function (db) { 
                return { nodeName: db.Name, id: db.ID, onOpen: mountTables } 
            })
        });

        treeview.mount();
    }

    function mountTables(serverName, serverID) {
        $.get('/Server/GetTables')
    }


    $(document).ready(function () {
        $.get('/api/ServerConnection', function (servers) {
            mountServers(servers);
        });
    });

})($);