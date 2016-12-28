function Tabs(container, loadContent) {
    'use strict'

    this.container = container;
    this.tabs = new Array();
    this.loadContent = loadContent;


    $(this.container).append($('<ul>', { class: 'w3-navbar w3-green' }));
}

Tabs.prototype.removeTab = function (tab) {
    this.tabs.splice(tab, 1);
}

Tabs.prototype.addTab = function (tab) {
    this.tabs.push(tab);
    $.get('/components/tabcomponent', function (template) {
        var content = Handlebars.compile(template)(tab);
        $('ul', this.container).append(content);

        $('#' + tab.id).click(function (ev) {
            ev.preventDefault();
            if (this.loadContent) this.loadContent();

            $('li', this.container).addClass('w3-green');
            $(ev.target).parent().parent().removeClass('w3-green');
        }.bind(this));

        $('#close-' + tab.id).click(function (ev) {
            ev.preventDefault();
            $('#' + tab.id).remove();
            $('#close-' + tab.id).remove();
            this.removeTab(tab);
        }.bind(this));

    }.bind(this));
}