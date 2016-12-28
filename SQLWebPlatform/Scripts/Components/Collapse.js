function Collapse(container, info) {
    'use strict'

    Component.call(this, {
        container: container,
        data: info,
        templateUrl: 'Components/CollapseComponent'
    });

}

Collapse.prototype = Object.create(Component.prototype);
Collapse.prototype.constructor = Collapse;

Collapse.prototype.mount = function (onClick) {
    var self = this;
    Component.prototype.mount.call(this, function (container) {
        $('a', container).click(function (ev) {
            ev.preventDefault();
            if (onClick) onClick(ev.target);
        });

        $('#collapse-button-' + self.configuration.data.id).click(function (ev) {
            if ($('#collapse-content-' + self.configuration.data.id).hasClass('w3-show')) {
                $('#collapse-content-' + self.configuration.data.id).removeClass('w3-show');
            } else {
                $('#collapse-content-' + self.configuration.data.id).addClass('w3-show');
            }
        });
    });
}