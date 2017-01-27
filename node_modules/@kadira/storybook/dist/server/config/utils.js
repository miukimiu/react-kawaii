'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nodePaths = exports.nodeModulesPaths = exports.excludePaths = exports.includePaths = exports.OccurenceOrderPlugin = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.loadEnv = loadEnv;

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OccurenceOrderPlugin =
// for webpack 2
exports.OccurenceOrderPlugin = _webpack2.default.optimize.OccurrenceOrderPlugin ||
// for webpack 1
_webpack2.default.optimize.OccurenceOrderPlugin;

var includePaths = exports.includePaths = [_path2.default.resolve('./')];

var excludePaths = exports.excludePaths = [_path2.default.resolve('./node_modules')];

var nodeModulesPaths = exports.nodeModulesPaths = _path2.default.resolve('./node_modules');

var nodePaths = exports.nodePaths = (process.env.NODE_PATH || '').split(process.platform === 'win32' ? ';' : ':').filter(Boolean).map(function (p) {
  return _path2.default.resolve('./', p);
});

// Load environment variables starts with STORYBOOK_ to the client side.
function loadEnv() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var defaultNodeEnv = options.production ? 'production' : 'development';
  var env = {
    NODE_ENV: process.env.NODE_ENV || defaultNodeEnv,
    // This is to support CRA's public folder feature.
    // In production we set this to dot(.) to allow the browser to access these assests
    // even when deployed inside a subpath. (like in GitHub pages)
    // In development this is just empty as we always serves from the root.
    PUBLIC_URL: options.production ? '.' : ''
  };

  (0, _keys2.default)(process.env).filter(function (name) {
    return (/^STORYBOOK_/.test(name)
    );
  }).forEach(function (name) {
    env[name] = process.env[name];
  });

  return {
    'process.env': (0, _stringify2.default)(env)
  };
}