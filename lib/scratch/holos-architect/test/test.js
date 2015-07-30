var assert = require("assert");

/*

 var app = require("../holos");

 console.log('app is ... ', app);
 process.on("loaded",function(evt){
 console.log('APP IS LOAFED!');
 console.log('app is ... ', app);
 runTests();
 });


 */


var H = require('../holos')
({
    host: this,
    id: 'anpheon',
    root_path: __dirname,
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
    console.log('HOLOS ARCHITECT INIT');
    console.log('version is ... ', version);
});

//function loadProgram() {


/*

 var cmds = {
 build: H.build,
 page: page
 };

 program

 .version(H.version.v)

 /!** BUILD **!/
 .arguments('<cmd> [env] [options...]')
 .option('<build>, [ D = dev, P = prod, L = local ]', 'builds the environment, D, P, or L')

 /!** PAGE **!/
 .option('<page>, [name]', 'builds a page called [name]')

 /!** ACTION **!/
 .action(function (cmd, env, options) {
 var fn = cmds[cmd];
 if (fn != undefined) {
 fn(env, options);
 }
 });

 program.parse(process.argv);

 // ROUTES

 function page(page, name) {
 console.log("page");
 console.log('page is ... ', page);
 }
 */

//}


console.log('NOW RUN TESTS ............ ');

describe('holos-architect::', function () {
    describe('initialized application', function () {
        it('should exist', function () {
            assert(H);
        });
        it('should contain eventbus', function () {
            assert(H.eventbus);
        })
    });
});


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