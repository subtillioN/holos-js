"use strict";
module.exports = function (options, imports, register) {
    var bus = imports.eventbus;

    var base = {
        log: "null"
        //def: _.partialRight(
        //    _.assign,
        //    function (value, other) {
        //        return _.isUndefined(value) ? other : value;
        //    })
    };

    register(null, {
        "base": base
    });
};

