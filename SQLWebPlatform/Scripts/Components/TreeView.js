function TreeView(container, info) {
    'use strict'

    Component.call(this, {
        container: container,
        data: info,
        templateUrl: '/Components/TreeViewComponent'
    });

}

TreeView.prototype = Object.create(Component.prototype);
TreeView.prototype.constructor = Dropdown;

TreeView.prototype.mount = function (callback) {
    $.get(this.configuration.templateUrl, function (component) {
        $(this.configuration.container).children().remove();
        var template = Handlebars.compile(component);
        $.each(this.configuration.data.root, function (index, node) {
            $(this.configuration.container).append(template(node));
            $('[data-target="node-' + node.id + '"]').click(function (ev) {
                ev.preventDefault();
                node.onOpen(node.nodeName, node.id);
            });

        }.bind(this));
    }.bind(this));
}