module.exports = function (plugin) {
    var test = describe("'post'' should have all its functions", function () {
        "use strict";
        it("Post should ...", function testOn(item) {
            assert(false, "post function failed...");
        });
    });
    return test;
};