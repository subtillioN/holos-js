var assert = require("assert");
var app = require("../holos");

console.log('app is ... ', app);
process.on("loaded",function(evt){
    console.log('APP IS LOAFED!');
    console.log('app is ... ', app);
    runTests();


});

function runTests(){

}


describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(5));
            assert.equal(-1, [1, 2, 3].indexOf(0));
        });
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