"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var fs = _interopRequire(require("fs"));

var path = _interopRequire(require("path"));

var features = fs.readdirSync(path.join(path.dirname(require.resolve("caniuse-db/package.json")), "features-json")).map(function (file) {
  return "\"" + file.replace(".json", "") + "\": function() { return require(\"caniuse-db/features-json/" + file + "\")}";
});

fs.writeFileSync(path.join(__dirname, "..", "features.js"), "module.exports = {" + features.join(",\n") + "}");