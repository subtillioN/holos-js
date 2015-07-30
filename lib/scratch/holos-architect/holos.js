var architect = require("architect");
var events = require("events").EventEmitter;
var config = [
    {
        packagePath: "./lib/plugins/cook"
    },
    {
        packagePath: "./lib/plugins/do-cooking",
        numberOfGuests: 8
    },

    // plugins without options can use this shorthand
    "./lib/plugins/eventbus",
    "./lib/plugins/cooking-reactor"
];

// Create relative tree
var tree = architect.resolveConfig(config, __dirname);

var app = architect.createApp(tree, function () {
    console.log("Application started");
    //console.log('app.services.hub.emit is ... ', app.services.hub.emit);
    process.emit("loaded");
});
// Start application!
exports.app = app;





