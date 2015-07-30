module.exports = function (options, imports, register) {
    var bus = imports.base;
    
    // react on events in other plugins
    //bus.on("log_version", function () {
    //    console.log("this is the version");
    //});
    
    // nothing to expose

    register(null, {
        "version": {
            empty:""
        }
    });
};