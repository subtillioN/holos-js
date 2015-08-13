var l4config = function (filename) {
    return {
        "appenders": [
            {
                "type": "console",
                "layout": {
                    "type": "pattern",
                    "pattern": "%[%r (%x{name}) %p %c -%] %m%n",
                    "tokens": {
                        "name": filename
                    }
                }
            }
        ]
    };
};

var l4 = require('log4js');
function getLogger(name) {
    console.log("getLogger");
    console.log('name is ... ', name);
    l4.configure(l4config(name), {});
    return l4.getLogger();
}

module.exports = function (options, imports, register) {

    console.log('loading logger...');
    var log = {
        get: getLogger,
        aspect: function (module, methodName) {
            //console.log('methodName is ... ', methodName);
            return getLogger(module.name);
        }
    };

    register(null, {
        "logger": log
    });
};

