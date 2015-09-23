module.exports = function (H) {
    console.log('config');
    return [
        //{
        //    packagePath: "./lib/nuc"
        //},
        //{
        //    packagePath: "./lib/plugins/env",
        //    paths: H.paths,
        //    env: H.env
        //},
        {
            packagePath: "./lib/plugins/build",
            paths: H.paths
        },

        // plugins without options can use this shorthand
        "./lib/plugins/base",
        "./lib/plugins/meta",
        "./lib/plugins/aspect",
        "./lib/plugins/eventbus",
        "./lib/plugins/v"
    ];
};