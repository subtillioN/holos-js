module.exports = function (plugin) {
    var test = describe("'page'' should have all its functions", function () {
        "use strict";
        it("Page should ...", function testOn(item) {
            assert(false, "page function failed...");
        });
    });
    return test;
};