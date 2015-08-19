"use strict";
var EventEmitter = require("events").EventEmitter;
var console = require("holodeck")(__filename);
module.exports = function (options, imports, register) {
    var emitter = new EventEmitter();

    register(null, {
        "eventbus": {
            emit: emitter.emit,
            on: emitter.on
        }
    });
};
//