'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.composeAll = exports.compose = exports.stub = exports.setStubbingMode = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.setDefaults = setDefaults;
exports.merge = merge;

var _reactStubber = require('react-stubber');

var _compose2 = require('./compose');

var _compose3 = _interopRequireDefault(_compose2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint import/prefer-default-export: 0 */
var setStubbingMode = exports.setStubbingMode = _reactStubber.setStubbingMode;
var stub = exports.stub = _reactStubber.stub;
var compose = exports.compose = _compose3.default;

function setDefaults() {
  var mainOptions = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return function (dataLoader) {
    var otherOptions = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var options = (0, _extends3.default)({}, mainOptions, otherOptions);

    return (0, _compose3.default)(dataLoader, options);
  };
}

function merge() {
  for (var _len = arguments.length, enhancers = Array(_len), _key = 0; _key < _len; _key++) {
    enhancers[_key] = arguments[_key];
  }

  // TODO: Try to get a single HOC merging all the composers together
  return function (Child) {
    return enhancers.reduce(function (C, enhancer) {
      return enhancer(C);
    }, Child);
  };
}

var composeAll = exports.composeAll = merge;