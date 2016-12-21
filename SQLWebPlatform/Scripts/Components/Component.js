Handlebars.registerHelper('ifCond', function (v1, v2, options) {
    if (v1 === v2) {
        return options.fn(this);
    }
    return options.inverse(this);
});

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
        var template = Handlebars.compile(this.configuration.template);
        $(this.configuration.container).append(template(this.configuration.data));
        if (callback) callback($(this.configuration.container));

    } else {
        $.get(this.configuration.templateUrl, function (component) {
            var template = Handlebars.compile(component);
            $(this.configuration.container).append(template(this.configuration.data));
            if (callback) callback($(this.configuration.container));

        }.bind(this));
    }
}