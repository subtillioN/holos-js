module.exports = function (H) {
    return [
        {
            packagePath: "./lib/nuc"
        },
        {
            packagePath: "./lib/plugins/env",
            paths: H.paths,
            env: H.env
        },
        {
            packagePath: "./lib/plugins/build",
            paths: H.paths
        },

        // plugins without options can use this shorthand
        "./lib/plugins/base",
        "./lib/plugins/aspect",
        "./lib/aspects/logger",
        "./lib/plugins/eventbus",
        "./lib/plugins/enversion"
    ];
};