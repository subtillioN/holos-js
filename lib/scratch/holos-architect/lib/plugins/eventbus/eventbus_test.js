"use strict";
module.exports = function (eventbus) {
    var test = describe("'eventbus'' should have all its functions", function () {
        it("Eventbus should emit and absorb events", function testOn(done) {
            var check = false;
            eventbus.on("test_event", function (data) {
                check = true;
                done();
            });
            eventbus.emit("test_event");
            assert(check, "eventbus 'emit and absorb events' failed...");
        });
        it("Eventbus should pass data through events", function testOn(done) {
            var check = false,
                test_data = {data1:"one",data2:[1,2,3]};
            eventbus.on("test_event2", function (data) {
                check = (data == test_data);
                done();
            });
            eventbus.emit("test_event2",test_data);
            assert(check, "eventbus 'pass data through events'' failed...");
        });
    });
    return test;
};