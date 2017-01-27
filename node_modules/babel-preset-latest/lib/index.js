"use strict";

exports.__esModule = true;

exports.default = function (context) {
  var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  return {
    presets: [opts.es2015 !== false && [_babelPresetEs2.default.buildPreset, opts.es2015], opts.es2016 !== false && _babelPresetEs4.default, opts.es2017 !== false && _babelPresetEs6.default].filter(Boolean) };
};

var _babelPresetEs = require("babel-preset-es2015");

var _babelPresetEs2 = _interopRequireDefault(_babelPresetEs);

var _babelPresetEs3 = require("babel-preset-es2016");

var _babelPresetEs4 = _interopRequireDefault(_babelPresetEs3);

var _babelPresetEs5 = require("babel-preset-es2017");

var _babelPresetEs6 = _interopRequireDefault(_babelPresetEs5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports["default"];