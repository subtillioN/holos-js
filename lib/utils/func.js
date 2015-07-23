module.exports = function (opt) {
    var file_tools = {
        runFunc: runFunc
    };

    function runFunc(fn, arg1, arg2, arg3) {
        if (typeof fn === 'function') {
            fn(arg1, arg2, arg3);
        }
    }

    return file_tools;
};