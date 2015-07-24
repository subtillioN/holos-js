module.exports = function (H) {

    var smith = require(H.path.normalize(H.root_path, H.paths.holosmith));

    //var gulp=require("gulp"),
    //    gsmith=require("gulpsmith");

    H.build = build;

    function build(env, options) {
        env = H.env[env];
        H.version.bump(options[0]);
        console.log('env is ... ', env);
        console.log("building " + env.id +
            " version " + H.version.v +
            " at " + env.dir);
        var dir = env.dir+ H.id + "_" + H.version.v;
        forgePaths(env, dir);
    }

    function forgePaths(env, dir){
        if (!_makePath(env.dir)) {
            _makePath(H.path.normalize(env.dir+"/.."));
            _makePath(env.dir);
            if(!_makePath(dir)){
                rm('-rf', dir);
                _makePath(dir);
            }
        }
    }

    function _makePath(dir) {
        /**
         *
         *

         var exec = require('child_process').exec;
         exec('node -v', function(error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});
         */


        return !!mkdir(dir);
    }

    return H;
};