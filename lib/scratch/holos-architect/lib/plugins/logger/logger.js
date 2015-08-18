var l4config = function (filename) {
    return {
        "appenders": [
            {
                "type": "console",
                "layout": {
                    "type": "pattern",
                    "pattern": "%[%r (%x{name}) %p %c -%] %m%n",
                    "tokens": {
                        "name": function () {
                            return filename.slice(filename.lastIndexOf(path.sep) + 1, filename.length - 3);
                        }
                    }
                }
            }
        ]
    };
};

var l4 = require('log4js');
function getLogger(filename){
    l4.configure(l4config(filename), {});
    return l4.getLogger();
}

module.exports = function (options, imports, register) {
    var log = {
        get: getLogger
    };

    register(null, {
        "logger": log
    });
};

