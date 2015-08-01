module.exports = function (plugin) {
    var test = describe("'base'' should have all its functions", function () {
        "use strict";
        it("Base should ...", function testOn(item) {
            assert(false, "base function failed...");
        });
    });
    return test;
};