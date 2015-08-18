"use strict";


console.log('LOADING ASPECT PLUGIN...');


module.exports = function (options, imports, register) {

    function setup(app, aspects) {
        //console.log('app is ... ', app);
        //console.log('aspects is ... ', aspects);
        var aspectConfigSrc = Rx.Observable.fromArray(aspects);


        aspectConfigSrc
            .filter(getGlobal)
            .map(applyGlobal)
            .forEach(function (x) {
                console.log(x);
            });
        aspectConfigSrc
            .filter(getLocal)
            .map(applyLocal)
            .forEach(function (x) {
                console.log(x);
            });

        function getGlobal(aspectConfig) {
            return aspectConfig.span === "global";
        }

        function applyGlobal(aspectConfig) {
            var A = pluckAspect(app, aspectConfig.name);
            console.log('A is ... ', A);
            if (A) {
                applyAllAspects(A, app, aspectConfig);
            }
            //_.forEach(app)
            return aspectConfig.name + ' :: GLOBAL !!!!!!!!!!!!';
        }

        function getLocal(aspect) {
            return aspect.span === "local";
        }

        //console.log('aspect is ... ', aspect);
        function applyLocal(aspect) {
            return aspect.name + ' :: LOCAL !!!!!!!!!!!!';
        }

        function applyAllAspects(A, app, aspectConfig) {
            //console.log('app.services.toString()  is ... ', app.services.toString() );
            _.each(app.services, function (plugin) {

                console.log('plugin is ... ', plugin.name);

                console.log('aspectConfig.affects is ... ', aspectConfig.affects);

                _.each(aspectConfig.affects, function (methodName) {
                    applyAspect(A, plugin, methodName);
                });
            });
        }

        function applyAspect(A, module, methodName) {
            //console.log('+++++ module.name is ... ', module.name);
            //console.log('applyAspect:: config is ... ', config);
            //console.log('__________________ module is ... ', module);
            if (module.hasOwnProperty(methodName)) {
                console.log('has '+methodName+' ... ', module.name);
                //method = module[config.name];
                module[methodName] = A.aspect(module, methodName);
            }
            return module;
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