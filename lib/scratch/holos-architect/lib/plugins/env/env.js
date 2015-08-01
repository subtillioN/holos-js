var log;
module.exports = function (options, imports, register) {
    var self = imports.base;
    log = self.logger.get(__filename);
    //log.debug('options is ... ', options);

    //options.paths
    //options.env


    //log.debug('options.paths.root is ... ', options.paths.root);


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
            //echo('env.js error :: Could not find the environment for ' + id);
            env = eve.default;
        }
        return env;
    }

    function index() {
        for (var prop in eve.env) {
            log.debug('prop is ... ', prop);
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

        self = _.extend(self, eve);

        //log.debug('self is ... ', self);
        log.debug('self.name is ... ', self.name);
    }

    //init();

    index();


    register(null, {
        "env": self
    });
};