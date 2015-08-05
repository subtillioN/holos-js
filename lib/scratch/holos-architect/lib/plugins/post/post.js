"use strict";
var log;
module.exports = function (options, imports, register) {
    var self = imports.base;

    console.log('options is ... ', options);
    //options.kenny();

    //log = self.logger.get(__filename);

    register(null, {
        "post": self
    });
};

