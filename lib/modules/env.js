module.exports = function (H) {

    var eve = {
        _root: H.root_path,
        env: H.env ? H.env : {
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
            var key = eve.env[prop],
            folder = prop.toLowerCase();
            eve[key] = {
                src: H.paths.src,
                folder: folder,
                id: prop,
                key: key,
                dir: H.path.normalize(eve._root + H.paths.publish + "/" + folder + '/')
            };
            eve[prop] = key;
        }
    }

    init();
    H.env = eve;
    return H;

}
;

