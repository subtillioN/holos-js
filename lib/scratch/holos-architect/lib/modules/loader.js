/**
 * Created by jmorrison on 7/22/15.
 */
var normalizedPath = require("path").join(__dirname, "routes");

require("fs").readdirSync(normalizedPath).forEach(function(file) {
    require("./routes/" + file);
});