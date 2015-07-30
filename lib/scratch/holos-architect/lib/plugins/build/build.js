var _;
var logger;
module.exports = function (options, imports, register) {
    var self = imports.base;


    //build.base.require({_:"_",logger:"logger"});

    //this = build.prototype;

    //for (var prop in imports.base) {
    //    this[prop] = imports.base[prop];
    //}

    logger.debug('_ is ... ', _);

    register(null, {
        "build": build
    });
};

