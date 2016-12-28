var Sidebar = (function () {
    'use strict'

    var selectTableEvent = null;

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

        serversDropdown.mount(function (target) {
            var selected = $(target).attr('data-target');
            $.get('/Server/Connect', { serverName: selected }, function (data) {
                mountDatabases(selected, data.databases);
            })
        });
    }

    function mountDatabases(server, databases) {
        var databasesCollapse = new Collapse('#databases', {
            componentName: 'Bancos em ' + server,
            id: 'databases',
            color: 'blue',
            items: databases.map(function (db) {
                return { displayName: db.Name, value: db.Name }
            })
        });

        databasesCollapse.mount(mountTables);
    }

    function mountTables(target) {
        var databaseName = $(target).attr('data-target');
        $('#databases .w3-btn-block').text('Selecionado ' + databaseName);
        $('#databases .w3-btn-block').click();
        $.get('/Server/GetTables', { databaseName: databaseName }, function (tables) {
            var tablesCollapse = new Collapse('#tables', {
                componentName: 'Tabelas de ' + databaseName,
                id: 'tables',
                color: 'yellow',
                items: tables.data.map(function (tb) {
                    return { displayName: tb.Name, value: tb.Name }
                })
            })

            tablesCollapse.mount(function (selected) {
                selected.dispatchEvent(selectTableEvent);
            });
        });
    }


    function init() {
        $.get('/api/ServerConnection', function (servers) {
            mountServers(servers);
        });
    }

    return {
        mount: init,
        onSelectTable: function (callback) {
            selectTableEvent = document.createEvent('Event');
            selectTableEvent.initEvent('selectTable', true, true);
            document.addEventListener('selectTable', callback);

        }
    }

})($)