"use strict";

module.exports = function (build) {
    build = build.test;
    console.log('build is ... ', build);


    //build.log.debug("logging from build");

    var test = describe("'build'' should have all its functions", function () {
        //it("Build should contain 'env'", function testOn(done) {
        //    assert(build.env, "build does not contain 'env'");
        //    done();
        //});
    });
    return test;
};