_ = require("lodash");
Q = require('q');
async = require('async');
path = require('path');
fs = require('fs');
assert = require("assert");
mkdirp = require("mkdirp");
//var logger = console;

Rx = require("rx");

module.exports = function (opt) {

    var def = _.partialRight(
        _.assign,
        function (value, other) {
            return _.isUndefined(value) ? other : value;
        });


    var H = def({
        id: "holos",
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
        plugins_default: [
            "base",
            "build",
            "env",
            "eventbus",
            "aspect"
        ],
        aspects: [
            {
                name: "logger",
                span: "global",
                depth: ["root"],
                affects: ["log"]
            },
            {
                name: "fu",
                span: "global",
                depth: ["root"],
                affects: ["logger"]
            },
            {
                name: "bar",
                span: "local",
                depth: ["root"],
                affects: ["log"]
            }
        ],
        toString: function () {
            return "Holos"
        }
    }, opt);

    function loadPlugins() {
        var architect = require("architect");
        //var events = require("events").EventEmitter;
        var config = require("./config.js")(H);
        if (H.plugins) {
            config = config.concat(H.plugins);
        }
        //console.log('config is ... ', config);
        var tree = architect.resolveConfig(config, __dirname);
        var app = architect.createApp(tree, function () {
            process.emit("loaded");
            processPlugins(app);
        });
        H.app = app;
    }

    function processPlugins(app) {
        //console.log('app.services is ... ', app.services);
        app = app.services.aspect.setup(app, H.aspects);
        _.extend(H, app.services);
    }

    //function setAspects(app) {
    //
    //
    //    var source = Rx.Observable.fromArray(H.aspects);
    //
    //    source.filter(
    //        function getGlobal (aspect) {
    //            //console.log('aspect is ... ', aspect);
    //            return aspect.span==="global";
    //        })
    //        .map(function (aspect) {
    //            return aspect.name + '!!!!!!!!!!!!';
    //        })
    //        .forEach(function (x) {
    //            console.log(x);
    //        });
    //
    //
    //    //function getAspects(){
    //    //_.each(H.aspects, function (conf) {
    //    //    console.log('aspect is ... ', conf);
    //        //console.log('aspect.scope is ... ', aspect.scope);
    //        //var A = pluckAspect(app, conf.name);
    //
    //
    //
    //
    //
    //        //var
    //
    //
    //        //console.log('A is ... ', A);
    //
    //
    //    //});
    //    //}
    //
    //    function pluckAspect(app, aspect) {
    //        var A = app.services[aspect];
    //        delete app.services[aspect];
    //        return A;
    //    }
    //
    //
    //    function setGlobal(A, service, aspect) {
    //
    //        if (aspect.depth == "global") {
    //            _.each(app.services, function (service) {
    //                //setEffects(aspect,)
    //
    //            })
    //        }
    //
    //    }
    //
    //    function setEffects(aspect) {
    //
    //    }
    //
    //    return app;
    //}


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



