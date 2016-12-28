(function () {
    'use strict'

    var tabs = null;


    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function addTableDef(tableName) {
        tabs.addTab({
            title: 'Definição da tabela ' + tableName,
            id: getRandomIntInclusive(0, 9999)
        })
    }

    $(document).ready(function () {
        Sidebar.mount();
        Sidebar.onSelectTable(function (event) {
            var tableName = $(event.target).attr('data-target');
            addTableDef(tableName);
        })
        tabs = new Tabs('#tabs');
    });

})($);