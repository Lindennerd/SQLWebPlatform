function Dropdown(container, info) {
    'use strict'

    Component.call(this, {
        container: container,
        data: info,
        templateUrl: '/Components/DropdownComponent'
    });

}

Dropdown.prototype = Object.create(Component.prototype);
Dropdown.prototype.constructor = Dropdown;

Dropdown.prototype.mount = function (onSelect) {
    Component.prototype.mount.call(this, function (container) {
        $('a', container).click(function (event) {
            event.preventDefault();
            if (onSelect) onSelect($(event.target).attr('data-target'));
        });
    });
}