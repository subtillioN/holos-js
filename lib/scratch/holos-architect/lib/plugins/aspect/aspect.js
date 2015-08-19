"use strict";


//console.log('LOADING ASPECT PLUGIN...');

var aop = require('aop');
//console.log('aop is ... ', aop);

module.exports = function (options, imports, register) {

    function setup(app, aspectConfig) {
        //console.log('app is ... ', app);
        //console.log('aspects is ... ', aspects);
        var confSrc = Rx.Observable.fromArray(aspectConfig);


        confSrc
            .filter(getFunction)
            .map(applyFunction)
            .forEach(function (fn) {
                //console.log(fn);
                console.log('fn is ... ', fn);
            });
        confSrc
            .filter(getGlobal)
            .map(applyGlobal)
            .forEach(function (x) {
                console.log(x);
            });
        confSrc
            .filter(getLocal)
            .map(applyLocal)
            .forEach(function (x) {
                console.log(x);
            });

        function applyAllAspects(aspect, app, conf) {
            console.log("applyAllAspects");
            _.each(app.services, function (plugin) {

                console.log('plugin is ... ', plugin.name);

                console.log('conf.affects is ... ', conf.affects);

                _.each(conf.affects, function (methodName) {
                    applyAspect(aspect, plugin, methodName);
                });
            });
        }

        function applyAspect(aspect, module, methodName) {
            console.log("_______ applyAspect");
            //console.log('aspect is ... ', aspect);
            //console.log('module is ... ', module);
            //console.log('methodName is ... ', methodName);
            if (module.hasOwnProperty(methodName)) {
                console.log('_______________ has ' + methodName + ' ... ', module.name);
                console.log('APPLY ASPECT');

                aop.before(module, methodName, function(){
                    console.log('HELLO?');
                    return arguments; // modify the parameters,
                });




                //method = module[config.name];
                module[methodName] = aspect.aspect(module, methodName);
            }
            return module;
        }

        function getFunction(conf) {
            return getSpan(conf, "function");
        }

        function applyFunction(conf) {
            console.log("applyFunction");
            var aspect = pluckAspect(app, conf.name);
            console.log('aspect is ... ', aspect);
            if (aspect) {
                applyAllAspects(aspect, app, conf);
            }
            //_.forEach(app)
            return conf.name + ' :: FUNC !!!!!!!!!!!!';
        }

        function getGlobal(conf) {
            return conf.span === "global";
        }

        function applyGlobal(conf) {
            var aspect = pluckAspect(app, conf.name);
            console.log('aspect is ... ', aspect);
            if (aspect) {
                applyAllAspects(aspect, app, conf);
            }
            //_.forEach(app)
            return conf.name + ' :: GLOBAL !!!!!!!!!!!!';
        }

        function getLocal(conf) {
            return conf.span === "local";
        }

        //console.log('aspect is ... ', aspect);
        function applyLocal(conf) {
            return conf.name + ' :: LOCAL !!!!!!!!!!!!';
        }

        function getSpan(conf, span) {
            return conf.span === span
        }


        //function getAspects(){
        //_.each(H.aspects, function (conf) {
        //    console.log('aspect is ... ', conf);
        //console.log('aspect.scope is ... ', aspect.scope);
        //var A = pluckAspect(app, conf.name);


        //var


        //console.log('A is ... ', A);


        //});
        //}

        function pluckAspect(app, name) {
            var A = app.services[name];
            delete app.services[name];
            return A;
        }

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
        return app;
    }

    register(null, {
        "aspect": {
            setup: setup
        }
    });
};
//