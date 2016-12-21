function Server(container, info) {
    'use strict'
    
    Component.call(this, {
        container: container,
        data: info,
        templateUrl: 'Components/ServerComponent'
    });

}

Server.prototype = Object.create(Component.prototype);
Server.prototype.constructor = Server;

Server.prototype.connect = function () {
    console.log('say hello '+this.configuration.container);
}