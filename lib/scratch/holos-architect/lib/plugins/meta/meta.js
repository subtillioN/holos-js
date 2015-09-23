"use strict";


var console = require("holodeck")(__filename);
module.exports = function (options, imports, register) {


    console.log('meta!!!!!!!!');



    register(null, {
        "meta": {
            omni: "zweeb"
        }
    });
};
//