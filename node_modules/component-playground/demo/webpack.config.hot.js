"use strict";

var cloneDeep = require("lodash/cloneDeep");
var merge = require("lodash/merge");
var omit = require("lodash/omit");
var base = require("./webpack.config.dev");

// Update our own module version.
var mod = cloneDeep(base.module);
// First loader needs react hot.
mod.loaders[0].loaders = ["react-hot"].concat(mod.loaders[0].loaders);

module.exports = merge({}, omit(base, "entry", "module"), {
  entry: {
    app: ["webpack/hot/dev-server", "./demo/app.jsx"]
  },

  module: mod
});
