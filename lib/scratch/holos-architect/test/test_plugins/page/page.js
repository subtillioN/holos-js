"use strict";
var log;
module.exports = function (options, imports, register) {
    console.log("!!!page");
    register(null, {
        "page": {test_page:"blah"}
    });
};

