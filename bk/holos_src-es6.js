module.exports = function(opt) {
  var _ = require("lodash");
  var setDefaults = _.partialRight(_.assign, function(value, other) {
    return _.isUndefined(value) ? other : value;
  });
  var H = setDefaults({
    path: require('./utils/path')(opt),
    setDefaults: setDefaults,
    toRequire: ["env", "meta"].concat(opt.require || []),
    require: _r,
    modules_root: "./",
    module_paths: {
      func: "utils/",
      path: "utils/",
      print: "utils/",
      proc: "utils/",
      address: "",
      env: "",
      meta: ""
    },
    toString: function() {
      return "Holos";
    }
  }, opt);
  H.root_path = H.path.getRootPath();
  //console.log('_______ H is ... ', H);
  //console.log('_______ ');
  //console.log('_______ ');
  //console.log('_______ ');
  //console.log('H.dir is ... ', H.dir);
  if (H.toRequire) {} else {}
  function getModulePath(id) {
    return H.modules_root + H.module_paths[id] + id;
  }
  function getOptions(id, o) {
    var opt = o || {};
    opt = H.setDefaults({
      id: "Holos",
      setDefaults: H.setDefaults,
      H: H,
      id: opt.id,
      paths: H.setDefaults({
        dir: H.root_path,
        file: H.path ? H.path.getFileName() : undefined,
        shellRoot: H.path.shellPath(H.root_path)
      }, H.paths),
      echo: function(echo) {
        echo(this.id + echo);
      }
    }, H);
    switch (id) {
      case "func":
        break;
      case "path":
        break;
      case "print":
        break;
      case "proc":
        break;
      case "address":
        break;
      case "env":
        break;
      case "meta":
        break;
      default:
    }
    return opt;
  }
  function getRConfig(id) {
    var rConfig = {
      path: getModulePath(id),
      opt: getOptions(id)
    };
    return {
      path: getModulePath(id),
      opt: getOptions(id)
    };
  }
  function loadHolos() {
    //console.log('loadHolos :: ');
    for (var prop in H.toRequire) {
      var id = H.toRequire[prop];
      var config = getRConfig(id);
      H.require(config.path, config.opt, id);
    }
  }
  function _r(path, opt, id) {
    H[id] = require(path)(opt);
    //console.log('_____ ' + id + " " + 'module loaded ?', H[id] != undefined);
  }
  loadHolos();
  return H;
};
