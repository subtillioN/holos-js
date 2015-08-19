"use strict";
var env,
path = require("path"),
enversion;
var console = require("holodeck")(__filename);

console.info("INFO");
module.exports = function buildFn(options, imports, register) {
    var __name = "build";
    var self = imports.base,
    paths = options.paths;
    enversion = imports.enversion;
    self.env = imports.env;
    console.log(' squared ...');


    function build(env, options) {
        console.log('+');
        env = self.env[env];

        console.log('build');
        enversion.bump(options[0]);
        console.log('enversion is ... ', enversion);
        logBuild(env);
        //env.dest = env.dir + H.id + "_" + H.enversion.v;
        //var dir = env.dir + H.id + "_" + H.enversion.v;
        //forgePaths(env);
    }

    function forgePaths(env) {
        //H.mkdirp(env.dest, function (err) {
        //    if (err) console.error(err);
        //});
    }

    function logBuild(env) {
        console.log(
            "building " + env.id +
                //" enversion " + H.enversion.v +
            " at " + env.dir
        );
    }

    //function debug() {
    //    var args = Array.prototype.slice.call(arguments);
    //    console.log.apply(console, [__name+" :: "].concat(args));
    //}


    register(null, {
        "build": {
            run: build,
            "test": {
                build: build,
                forgePaths: forgePaths,
                logBuild: logBuild
            }
        }
    });
};