"use strict";
var console = require("holodeck")(__filename);
module.exports = function (options, imports, register) {
    var self = imports.base;

    register(null, {
        "v": self
    });
};