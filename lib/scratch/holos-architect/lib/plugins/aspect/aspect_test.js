"use strict";
module.exports = function (aspect) {
    var test = describe("'aspect'' should have all its functions", function () {
        //it("Eventbus should emit and absorb events", function testOn(done) {
        //    var check = false;
        //    aspect.on("test_event", function (data) {
        //        check = true;
        //        done();
        //    });
        //    aspect.emit("test_event");
        //    assert(check, "aspect 'emit and absorb events' failed...");
        //});
        //it("Eventbus should pass data through events", function testOn(done) {
        //    var check = false,
        //        test_data = {data1:"one",data2:[1,2,3]};
        //    aspect.on("test_event2", function (data) {
        //        check = (data == test_data);
        //        done();
        //    });
        //    aspect.emit("test_event2",test_data);
        //    assert(check, "aspect 'pass data through events'' failed...");
        //});
    });
    return test;
};