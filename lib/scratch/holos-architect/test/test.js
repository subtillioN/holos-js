var assert = require("assert");
var expect = require("chai").expect;
var _ = require('lodash');


var H = require('../holos')
({
    host: this,
    id: 'anpheon',
    root_path: __dirname,
    plugins: require('./test_config'),
    js: "./js",
    env: {
        PROD: "P",
        TEST: "T",
        DEV: "D",
        LOC: "L"
    },
    paths: {
        src: "src"
    }
});

H.onInit.then(function (version) {
    //console.log('HOLOS ARCHITECT INIT');
    //console.log('version is ... ', version);
});


describe('holos-architect :: ', function () {
    describe('initialized application', function () {
        it('should exist', function () {
            assert(H);
        });

    });
    describe('plugins :: ', function () {
        _.each(H.plugins_default, function (plugin) {
            it('should contain ' + plugin, function testPlugins(done) {
                assert(H[plugin], "Plugin '" + plugin + "' was not loaded");
                require("../lib/plugins/" + plugin + "/" + plugin + "_test.js")(H[plugin]);
                done();
            });
        });
    });

    describe('aspects :: ', function () {
        //H.aspect.
        _.each(H.plugins_default, function (plugin) {
            //todo('logger >>> ' + plugin);
        });


        //H.build.debug("WTF");
    });


    describe('nuc :: ', function () {
        //console.log('H is ... ', H);
    });


});


function todo(item) {
    it('TODO :: ' + item, function todo() {assert(true, "")})
}


/*

 #SYNC CODE

 describe('Array', function() {
 describe('#indexOf()', function() {
 it('should return -1 when the value is not present', function() {
 [1,2,3].indexOf(5).should.equal(-1);
 [1,2,3].indexOf(0).should.equal(-1);
 });
 });
 });


 #ASYNC CODE

 ## WITH CALLBACK
 describe('User', function() {
 describe('#save()', function() {
 it('should save without error', function(done) {
 var user = new User('Luna');
 user.save(done);
 });
 });
 });



 ## WITH PROMISE

 beforeEach(function() {
 return db.clear()
 .then(function() {
 return db.save([tobi, loki, jane]);
 });
 });

 describe('#find()', function() {
 it('respond with matching records', function() {
 return db.find({ type: 'User' }).should.eventually.have.length(3);
 });
 });



 */