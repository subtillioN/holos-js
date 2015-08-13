'use strict';
/*
 * Useful for Model-View-Intent binding function.
 */
module.exports = function () {
    var args = Array.prototype.slice.call(arguments);
    for (var i = 0; i < args.length; i++) {
        if (extant(args[i])) {

        }
    }

    //TODO:: ...


    function extant(obsr) {
        return !!obsr;
    }

};
