"use strict";

module.exports = function (options, imports, register) {
    var self = {};

    var eve = {
        _root: options.paths.root,
        env: options.env ? options.env : {
            PROD: "P",
            TEST: "T",
            DEV: "D",
            LOC: "L"
        },
        getEnv: getEnv
    };


    function init() {
        index();
    }

    function getEnv(id) {
        var env = false;
        try {
            env = eve[id];
        }
        catch (ex) {
        }
        if (!env) {
            env = eve.default;
        }
        return env;
    }

    function index() {
        for (var prop in eve.env) {
            var key = eve.env[prop],
            folder = prop.toLowerCase();
            eve[key] = {
                src: options.paths.src,
                folder: folder,
                id: prop,
                key: key,
                dir: path.normalize(eve._root + options.paths.publish + "/" + folder + '/')
            };
            eve[prop] = key;
        }

    }

    index();

    register(null, {
        "env": eve
    });
};