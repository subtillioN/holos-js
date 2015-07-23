/**
 *
 * @param options.args_origin sets the origin in the args where the routing begins.  Defaults to second arg, which matches the pattern 'node {filename} {arg1} {arg2} ...
 * @param options.root_process overrided the process in use
 * @returns {{args: args, getFileName: getFileName, getRoot: getRoot, getFilePath: getFilePath, getRootPath: getRootPath}}
 */
module.exports = function (options) {
    console.log('options.root_dir is ... ', options.root_dir);
    var project_utils = {
        //__proto__: {
        //
        //}

         js: "./js",
         env: {
         PROD: "P",
         TEST: "T",
         DEV: "D",
         LOC: "L"
         },
         paths: {
             root_path: './',
             dir: '',
             js: './js/',
             file: '',
             shellRoot: ''
         }






    };



    return project_utils;
};