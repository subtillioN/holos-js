module.exports = function (opt) {
    var proc = require('./proc')(opt);

    //console.log('proc is ... ', proc);

    var path_utils = {
        shellPath: shellPath,
        getFileName: proc.getFileName,
        getRoot: proc.getRoot,
        getRootPath: proc.getRootPath,
        getFilePath: proc.getFilePath,
        process_utils:proc
    };

    /**
     * returns a safe shell path
     * @param path
     * @returns {string}
     */
    function shellPath(path) {
        return path.split(' ').join('\\ ');
    }

    return path_utils;
};