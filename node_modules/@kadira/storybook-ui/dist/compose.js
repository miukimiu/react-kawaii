'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setActions = exports.setContext = undefined;

var _reactKomposer = require('react-komposer');

var _context = void 0;
var _actions = void 0;

var setContext = exports.setContext = function setContext(c) {
  _context = c;
};

var setActions = exports.setActions = function setActions(a) {
  _actions = a;
};

var compose = (0, _reactKomposer.setDefaults)({
  propsToWatch: [],
  pure: true,
  env: {
    context: function context() {
      return _context;
    },
    actions: function actions() {
      return _actions;
    }
  }
});

exports.default = compose;