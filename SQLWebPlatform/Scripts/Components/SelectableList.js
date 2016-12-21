function SelectableList(container, info) {
    'use strict'

    Component.call(this, {
        container: container,
        data: info,
        templateUrl: '/Components/SelectableListComponent'
    });

}

SelectableList.prototype = Object.create(Component.prototype);
SelectableList.prototype.constructor = SelectableList;

SelectableList.prototype.mount = function (onSelect, onDeselect) {
    Component.prototype.mount.call(this, function (container) {
        $('li', container).click(function (event) {
            if ($(event.target).hasClass('active')) {
                $(event.target).removeClass('active');
                if (onDeselect) onDeselect($(event.target));
            } else {
                $(event.target).addClass('active');
                $(event.target).siblings().removeClass('active');
                if (onSelect) onSelect($(event.target));
            }
        })
    });
}