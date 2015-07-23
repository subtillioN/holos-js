/**
 *
 * @param options.args_origin sets the origin in the args where the routing begins.  Defaults to second arg, which matches the pattern 'node {filename} {arg1} {arg2} ...
 * @param options.root_process overrided the process in use
 * @returns {{args: args, getFileName: getFileName, getRoot: getRoot, getFilePath: getFilePath, getRootPath: getRootPath}}
 */
module.exports = function (options) {
    var process_utils = {
        args: args,
        getFileName: getFileName,
        getRoot: getRoot,
        getFilePath: getFilePath,
        getRootPath: getRootPath
    };

    var _params = process.argv;

    var _args_origin = options.args_origin ? options.args_origin : 2;

    //console.log('_args_origin is ... ', _args_origin);

    function args(i) {
        var arg = _params[i + _args_origin];
        return _checkArg(arg);
    }

    function _checkArg(arg) {
        return (arg != "undefined" || arg != undefined) ? arg : "";
    }

    function getFileName() {
        var f = getFilePath();
        return f.substring(f.lastIndexOf("/") + 1);
    }

    function getRoot() {
        var root = args(0);
        return root ? root + '/' : './';
    }

    function getFilePath() {
        return args(-1);
    }

    function getRootPath() {
        var f = getFilePath();
        return f.substring(0, f.lastIndexOf("/")) + '/';
    }

    return process_utils;
};