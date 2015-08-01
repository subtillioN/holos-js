module.exports = function (H) {
    return [
        {
            packagePath: "./lib/plugins/env",
            paths: H.paths,
            env: H.env
        },
        {
            packagePath: "./lib/plugins/build",
            numberOfGuests: 8
        },

        // plugins without options can use this shorthand
        "./lib/plugins/base",
        "./lib/plugins/logger",
        "./lib/plugins/page",
        "./lib/plugins/post",
        "./lib/plugins/eventbus",
        "./lib/plugins/version"
    ];
};