"use strict";
module.exports = function (options, imports, register) {
    var bus = imports.eventbus;

    var base = {
        events: bus,
        logger: imports.logger,
        proto: {},
        def: _.partialRight(
            _.assign,
            function (value, other) {
                return _.isUndefined(value) ? other : value;
            })
    };

    console.log('base.name is ... ', base.name);

    register(null, {
        "base": base
    });
};

