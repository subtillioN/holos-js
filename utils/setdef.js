/**
 * Created by jmorrison on 7/21/15.
 */

module.exports = function () {
    var _ = require("lodash");
    var setDefaults = _.partialRight(
        _.assign,
        function (value, other) {
            return _.isUndefined(value) ? other : value;
        });
    return setDefaults;
};