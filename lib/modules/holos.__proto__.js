module.exports = function () {
    var _ = require("lodash");
    var proto = {
        setDefaults:setDefaults
    };


    //function req() {
    //    this._ = require("lodash");
    //}



    function setDefaults() {

        return _.partialRight(
            _.assign,
            function (value, other) {
                return _.isUndefined(value) ? other : value;
            });

        //isSuper() {
        //   return true;
        // }

        /*methodA() {
         return true;
         }*/
    }

    return proto;
}();








