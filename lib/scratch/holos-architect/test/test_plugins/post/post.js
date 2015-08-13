"use strict";
var log;
module.exports = function (options, imports, register) {
    console.log("!!! post");
    register(null, {
        "post": {self:"less"}
    });
};

