module.exports = [
    {
        packagePath: "./lib/plugins/env"
    },
    {
        packagePath: "./lib/plugins/build",
        numberOfGuests: 8
    },

    // plugins without options can use this shorthand
    "./lib/plugins/eventbus",
    "./lib/plugins/version"
];