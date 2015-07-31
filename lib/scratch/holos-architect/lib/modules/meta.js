module.exports = function meta(H) {

    var moment = require('moment');
    var jsonfile = require('jsonfile');
    jsonfile.spaces = 2;

    var M = {id: H.id + ".meta"};

    M.logTitle = function (verbose) {
        logger.debug(M.data.title_alt);
        logger.debug(M.data.tagline);
        logger.debug("Version " + H.version.v);
        var t = M.data.title_alt + '\r' + M.data.tagline;
        return t;
    };

    M.parseMeta = function parseMeta(path, callback) {
        jsonfile.readFile(path, function (err, meta) {
            if (err) {
                logger.debug('META: READ ERROR at ... '+path);
            }
            else {
                meta.modified = M.now(meta.time_stamp_fmt);
                meta.version = H.version.v+"";
                M.data = meta;
                M.writeFile(path, callback);
            }
        });
    };

    M.writeFile = function writeFile(path, callback){
        jsonfile.writeFile(path, M.data, function (error, result) {
            if (error) {
                logger.debug('META: WRITE ERROR ... at ...'+path);
            }
            else {
                callback(error, M.data);
            }
        });
    };

    M.now = function now(fmt) {
        return moment().format(fmt ? fmt : "YYYY");
    };

    // Please add to tags as you see fit ...
    // ... any content author of posts, or any author quoted or cited herein.  Please add ones I miss...
    // Anyone who helps with the website and would like recognition... you, editing anything right now, automatically add yourself.

    M.parse = function parse(callback) {
        M.parseMeta(H.path.normalize(H.root_path + H.paths.meta), callback);
    };

    H.meta = M;

    return H;
};