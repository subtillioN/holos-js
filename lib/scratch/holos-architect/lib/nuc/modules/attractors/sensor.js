'use strict';
/*
 * Utility functions
 */

/**
 * Returns a signal, the monadic unit of a channel.
 *

 */
function signal(source, path) {
    var signal = Rx.Observable.from(source);
    signal.path = path;
    module.exports = signal;
}