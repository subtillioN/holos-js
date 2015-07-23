module.exports = function (opt) {

    require('./Holos.__proto__');

    class H extends
    HolosModule
    {
    //    H(opt){
    //        super({
    //            //root_process: "",
    //            //dir: opt.dir,
    //            //js: opt.js,
    //            //env: opt.env,
    //            path: require('./utils/path')(opt),
    //            setDefaults: setDefaults,
    //            toRequire: [
    //                //"path",
    //                //"proc",
    //                //"address",
    //                "env",
    //                "meta"
    //            ].concat(opt.require || []),
    //            require: _r,
    //            ////root_path: opt.root_path || "./",
    //            modules_root: "./",
    //
    //            module_paths: {
    //                func: "utils/",
    //                path: "utils/",
    //                print: "utils/",
    //                proc: "utils/",
    //                address: "",
    //                env: "",
    //                meta: ""
    //            },
    //            toString: function () {
    //                return "Holos"
    //            }
    //        }, opt);
    //    }
    //}

    // = setDefaults(;

    H.root = H.path.getRootPath();

    //console.log('_______ H is ... ', H);
    //console.log('_______ ');
    //console.log('_______ ');
    //console.log('_______ ');
    //console.log('H.dir is ... ', H.dir);


    if (H.toRequire) {
        //TODO loop over subset
    }
    else {


    }

    getModulePath(id)
    {
        return H.modules_root + H.module_paths[id] + id;
    }

    getOptions(id, o)
    {
        var opt = o || {};
        opt = H.setDefaults({
            id: "Holos",
            setDefaults: H.setDefaults,
            H: H,
            id: opt.id,
            //root_process: H.root_process,
            paths: H.setDefaults({
                //root_path: H.root_path,
                dir: H.root_path,
                //js: H.js,
                file: H.path ? H.path.getFileName() : undefined,
                shellRoot: H.path.shellPath(H.root_path)
            }, H.paths),
            echo: function (echo) {
                echo(this.id + echo);
            }

            //file: H.path ? H.path.getFileName() : undefined,
            //shellRoot: H.path.shellPath(H.root_path)
            //env: H.env

        }, H);
        switch (id) {
            case "func":
                break;
            case "path":
                break;
            case "print":
                break;
            case "proc":
                break;
            case "address":
                break;
            case "env":
                break;
            case "meta":
                break;
            default:

        }
        return opt;


        /*

         A.paths = {
         id: A.id,
         root_path: A.root_path,
         dir: A.root_path,
         js: A.root_path,
         file: path.getFileName(),
         shellRoot: path.shellPath(A.root_path)
         };

         A.meta = require(A.root_path + 'modules/holos/holos-meta')(A.paths);

         */

    }

    getRConfig(id)
    {
        rConfig = {path: getModulePath(id), opt: getOptions(id)};
        return {path: getModulePath(id), opt: getOptions(id)};
    }

    /*
     H.toRequire[prop]
     */

    loadHolos()
    {
        //console.log('loadHolos :: ');
        //console.log('H.toRequire is ... ', H.toRequire);

        for (var prop in H.toRequire) {
            //console.log('prop is ... ', prop);
            var id = H.toRequire[prop];
            //console.log('id is ... ', id);
            var config = getRConfig(id);

            //console.log('config is ... ', config);
            //
            //console.log('config.path is ... ', config.path);

            //H[id] = require(config.path)(config.opt);

            H.require(config.path, config.opt, id);
        }
    }

    _r(path, opt, id)
    {

        H[id] = require(path)(opt);

        //var module;
        //try {
        //    module = require(path)(options);
        //    if (id != undefined) {
        //        H[id] = module;
        //        console.log('assigning ' + id + ' to H');
        //    }
        //    console.log('_____ module loaded ', H[id]);
        //}
        //catch (ex) {
        //    console.log('   ... path not found: ', path);
        //}
        //
        //console.log('_____ ' + id + " " +
            'module loaded ?', H[id] != undefined);
        //
        //return module;

    }

    loadHolos();

    //console.log('H.path is ... ', H.path);


    //var path = require('./utils/path')({root_process: root_process});

    //console.log('path is ... ', path);

    //H.setDefaults = function(opt){
    //    var defaults = _.partialRight(
    //        _.assign,
    //        function (value, other) {
    //            return _.isUndefined(value) ? other : value;
    //        }
    //    );
    //};


    return H;


    /*
     var t = 0;
     var o = 2;
     for (var prop in opt) {
     eve.length++;

     //mkdir(env.ENV);
     }
     */
};