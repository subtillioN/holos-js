//--------------------------------------------------------------------------
//
//  HOLOS ORIGINAL
//
//--------------------------------------------------------------------------

///*


module.exports = function (opt) {
    var _ = require("lodash");
    var Q = require('q');
    var async = require('async');
    var path = require('path');
    var fs = require('fs');
    var mkdirp = require('mkdirp');

    var log4js = require('log4js');
    var logger = log4js.getLogger();
    logger.setLevel('ERROR');
    logger.debug("Some debug messages");




    var def = _.partialRight(
        _.assign,
        function (value, other) {
            return _.isUndefined(value) ? other : value;
        });


    var H = def({
        id: "holos",
        setDefaults: def,
        //toRequire: [
        //    "version",
        //    //"path",
        //    //"proc",
        //    //"address",
        //    "env",
        //    "meta",
        //    //"program",
        //    "build"
        //].concat(opt.require || []),
        //require: _r,
        root_path: path.normalize(opt.root_path) + "/" || "./",
        modules_root: "./",
        //module_paths: {
        //    version: "modules/",
        //    //func: "utils/",
        //    //path: "utils/",
        //    //print: "utils/",
        //    //proc: "utils/",
        //    //address: "modules/",
        //    env: "modules/",
        //    meta: "modules/",
        //    build: "modules/"
        //},
        events: {
            ON_INIT: "holos:init"
        },
        promises: {
            onInit: null
        },
        paths: def(opt.paths,
            {
                src: './src',
                publish: '/../publish/',
                build: './',
                meta: '/meta.json',
                holosmith: '/holosmith.js'
            }
        ),
        path: path,
        async: async,
        fs: fs,
        mkdirp: mkdirp,
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
        //console.log("H :: loadPlugins");

        var architect = require("architect");
        var events = require("events").EventEmitter;
        var config = require("./config.js");
        console.log('config is ... ', config);



// Create relative tree
        var tree = architect.resolveConfig(config, __dirname);

        var app = architect.createApp(tree, function () {
            console.log("Application started!!!");
            //console.log('app.services.hub.emit is ... ', app.services.hub.emit);
            //console.log('app is ... ', app);
            process.emit("loaded");

            processPlugins(app);

        });
// Start application!
        H.app = app;
        /*
         for (var prop in H.toRequire) {
         var id = H.toRequire[prop];
         var config = getRConfig(id);
         H.require(config.path, id);
         }
         if (H.env) {
         H.getEnv = H.env.getEnv;
         }

         */
    }

    function processPlugins(app) {

        //console.log('app.config is ... ', app.hub);
        //
        //console.log('app.services.eventbus is ... ', app.services.eventbus);
        //H.eventbus =


        H.eventbus = app.services.eventbus;

    }

    function logObject(obj){
        for(var prop in obj) {


            console.log('_______ ');
            console.log('app :: '+prop+' is ... ');

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
    //            console.log('H.meta.data is ... ', H.meta.data);
    //        })
    //    ], function onComplete(args) {
    //        console.log('args is ... ', args);
    //    });

    H.onInit.then(function (version) {
        //console.log('H.onInit.then...');
        //H.meta.parse(function (error, meta) {
        //    H.meta.logTitle();
        //});
    });

    loadPlugins();

    return H;

};


//*/



