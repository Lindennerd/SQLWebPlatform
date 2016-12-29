function Tabs(container, loadContent) {
    'use strict'

    this.container = container;
    this.tabs = new Array();
    this.loadContent = loadContent;
}

Tabs.prototype.removeTab = function (tab) {
    this.tabs.splice(tab, 1);
}

Tabs.prototype.addTab = function (tab) {
    this.tabs.push(tab);
    $.get('/components/tabcomponent', function (template) {
        var content = Handlebars.compile(template)(tab);
        $(this.container).append(content);

        $('#close-' + tab.id).click(function (ev) {
            ev.preventDefault();

            $('#tab-' + tab.id).remove();
            this.removeTab(tab);
        }.bind(this))

    }.bind(this));
}