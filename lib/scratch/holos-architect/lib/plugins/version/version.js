var logger;
module.exports = function (options, imports, register) {
    var self = imports.base;

    logger = self.logger.get(__filename);

    register(null, {
        "version": self
    });
};