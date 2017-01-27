'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.action = action;
exports.decorateAction = decorateAction;

var _storybookAddons = require('@kadira/storybook-addons');

var _storybookAddons2 = _interopRequireDefault(_storybookAddons);

var _jsonStringifySafe = require('json-stringify-safe');

var _jsonStringifySafe2 = _interopRequireDefault(_jsonStringifySafe);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _format(arg) {
  if (arg && typeof arg.preventDefault !== 'undefined') {
    return (0, _jsonStringifySafe2.default)('[SyntheticEvent]');
  }
  return (0, _jsonStringifySafe2.default)(arg);
}

function action(name) {
  return function () {
    for (var _len = arguments.length, _args = Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    var args = Array.from(_args).map(_format);
    var channel = _storybookAddons2.default.getChannel();
    var randomId = Math.random().toString(16).slice(2);
    channel.emit(_.EVENT_ID, {
      id: randomId,
      data: { name: name, args: args }
    });
  };
}

function decorateAction(decorators) {
  return function (name) {
    var callAction = action(name);
    return function () {
      for (var _len2 = arguments.length, _args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        _args[_key2] = arguments[_key2];
      }

      var decorated = decorators.reduce(function (args, fn) {
        return fn(args);
      }, _args);
      callAction.apply(undefined, _toConsumableArray(decorated));
    };
  };
}