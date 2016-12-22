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
        data: null,
        append: false
    }, configuration, true);

}

Component.prototype.render = function (template, config, callback) {
    var template = Handlebars.compile(template);
    if ($(config.container).children().length > 0 && !config.append) {
        $(config.container).children().remove();
    }
    $(this.configuration.container).append(template(config.data));
    if (callback) callback($(config.container));
}

Component.prototype.mount = function (callback) {
    if (this.configuration.template) {
        this.render(this.configuration.template, this.configuration, callback);

    } else {
        $.get(this.configuration.templateUrl, function (component) {
            this.render(component, this.configuration, callback);
        }.bind(this));
    }
}