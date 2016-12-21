function Component(configuration) {
    'use strict'

    this.configuration = $.extend({
        container: '#App',
        template: null,
        templateUrl: null,
        data: null
    }, configuration, true)
}

Component.prototype.mount = function (callback) {
    if (this.configuration.template) {
        $(this.configuration.container).append(Mustache.render(this.configuration.template, this.configuration.data));
        if(callback) callback();

    } else {
        $.get(this.configuration.templateUrl, function (component) {
            $(this.configuration.container).append(Mustache.render(component, this.configuration.data));
            if (callback) callback();

        }.bind(this));
    }
}