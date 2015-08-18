"use strict";
module.exports = function (base) {
    var test = describe("'base'' should have all its functions", function () {
        it("Base should have working logger function", function testOn(done) {
            var check = false;
            try {
                //var log = base.logger.get(__filename);
                base.log.debug(":: base testing...");
                assert(base.log.debug);
                check = true;
                done();
            }
            catch (ex) {
            }
            assert(check, "base logger debug failed...");

        });
    });
    return test;
};