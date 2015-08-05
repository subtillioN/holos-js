_ = require("lodash");
Q = require('q');
async = require('async');
path = require('path');
fs = require('fs');
assert = require("assert");
mkdirp = require("mkdirp");
var logger = console;


module.exports = function (opt) {
    //var mkdirp = require('mkdirp');

    var def = _.partialRight(
        _.assign,
        function (value, other) {
            return _.isUndefined(value) ? other : value;
        });


    var H = def({
        id: "holos",
        //setDefaults: def,
        //root_path: path.normalize(opt.root_path) + "/" || "./",
        //modules_root: "./",
        events: {
            ON_INIT: "holos:init"
        },
        promises: {
            onInit: null
        },
        paths: def(opt.paths,
            {
                root: path.normalize(opt.root_path) + "/" || "./",
                src: './src',
                publish: '/../publish/',
                build: './',
                meta: '/meta.json',
                holosmith: '/holosmith.js'
            }
        ),
        //mkdirp: mkdirp,
        toString: function () {
            return "Holos"
        }
    }, opt);


    /*function getModulePath(id) {
     return H.modules_root + H.module_paths[id] + id;
     }

     function getRConfig(id) {
     return {path: getModulePath(id)};
     }*/

    function loadPlugins() {
        var architect = require("architect");
        //var events = require("events").EventEmitter;
        var config = require("./config.js")(H);
        var tree = architect.resolveConfig(config, __dirname);
        var app = architect.createApp(tree, function () {
            process.emit("loaded");
            processPlugins(app);
        });
        H.app = app;
    }

    function processPlugins(app) {
        _.extend(H, app.services)
    }

    function logObject(obj) {
        for (var prop in obj) {


            console.log('_______ ');
            console.log('app :: ' + prop + ' is ... ');
            console.log(' ... ', app[prop]);

        }
    }

    //function _r(path, id) {
    //    require(path)(H);
    //}


    //TODO:: ADD parseMeta to the parrallel async here...
    H.onInit = Q.all([
        //H.version.now()
    ]);


    //TODO:: modify to use async.auto ... or architecT
    //    H.onInit = async.auto([
    //        H.version.now(),
    //        H.meta.parse("0.0.1", function (error, meta) {
    //            logger.debug('H.meta.data is ... ', H.meta.data);
    //        })
    //    ], function onComplete(args) {
    //        logger.debug('args is ... ', args);
    //    });

    H.onInit.then(function (version) {
        //logger.debug('H.onInit.then...');
        //H.meta.parse(function (error, meta) {
        //    H.meta.logTitle();
        //});
    });

    loadPlugins();

    return H;

};


//*/



