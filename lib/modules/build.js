module.exports = function (H) {

    var hpath = H.path.normalize(H.path.join(H.root_path, H.paths.holosmith));
    var holosmith = require(hpath)(H);

    H.build = build;

    function build(env, options) {
        env = H.env[env];
        H.version.bump(options[0]);
        logBuild(env);
        env.dest = env.dir+ H.id + "_" + H.version.v;
        var dir = env.dir+ H.id + "_" + H.version.v;
        forgePaths(env);
    }

    function forgePaths(env){
        H.mkdirp(env.dest, function (err) {
            if (err) console.error(err);
        });
    }

    function logBuild(env){
        console.log("building " + env.id +
            " version " + H.version.v +
            " at " + env.dir);
    }

    return H;
};