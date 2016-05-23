'use strict';
/*
 * Utility functions
 */

/**
 * Returns a new observable composed of the number of duplicates of the source.
 *

 */
function meta(source, num) {
    var empty = Rx.Observable.fromArray(new Array(num));
    return empty
        .map(function(requestUrl) {
            return Rx.Observable.from(source);
        });
}

module.exports = meta;
