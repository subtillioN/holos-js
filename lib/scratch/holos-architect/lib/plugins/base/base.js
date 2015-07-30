var _ = require("lodash");
var Q = require('q');
var async = require('async');
var path = require('path');
var fs = require('fs');
var assert = require("assert");
var log4js = require('log4js');

var logger = log4js.getLogger();
//logger.setLevel('ERROR');
logger.debug("base bebugging");

module.exports = function (options, imports, register) {
    var bus = imports.eventbus;


    var base = {
        events: bus,
        _: _,
        Q: Q,
        async: async,
        path: path,
        fs: fs,
        assert: assert,
        logger: logger,
        proto:{

        }
        //cook: function(dish) {
        //   bus.emit("cooking", dish);
        //},
        //swear: function (insult) {
        //console.log(insult + "!!");
        //}
    };

    //function extend(plugin) {
    //    //if(!plugin){
    //    //    plugin = {};
    //    //}
    //
    //    plugin = _.extend(plugin, base);
    //
    //    //plugin.prototype = base;
    //    return plugin;
    //}

    register(null, {
        "base": base
    });
};

