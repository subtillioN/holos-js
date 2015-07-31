var EventEmitter = require("events").EventEmitter;

module.exports = function (options, imports, register) {
    var emitter = new EventEmitter();
    var logger = imports.logger.get(__filename);

    register(null, {
        "eventbus": {
            emit: emitter.emit,
            on: emitter.on
        }
    });
};
//