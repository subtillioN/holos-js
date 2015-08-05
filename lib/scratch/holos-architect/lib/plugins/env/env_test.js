"use strict";
var expect    = require("chai").expect;

module.exports = function (env) {
    //console.log('env is ... ', env);
    var testEnv = env.getEnv('P');
    var test = describe("'env'' should have all its functions", function () {
        it("testEnv.id should equal 'PROD'", function testOn(done) {
            expect(testEnv.id).to.equal("PROD");
            done();
        });
        it("testEnv.dir should be correct", function testOn(done) {
            expect(testEnv.dir).to.equal("/Users/jmorrison/Google Drive/anpheon.org/root/build/modules/holos/lib/scratch/holos-architect/publish/prod/");
            //console.log('testEnv is ... ', testEnv);
            done();
        });
    });
    return test;
};