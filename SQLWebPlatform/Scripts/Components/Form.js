function Form(container, info) {
    'use strict'

    Component.call(this, {
        container: container,
        data: info,
        templateUrl: '/Components/FormComponent'
    });

}

Form.prototype = Object.create(Component.prototype);
Form.prototype.constructor = Form;