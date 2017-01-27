'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  actions: _actions2.default,
  defaultState: {
    shortcutOptions: {
      goFullScreen: false,
      showLeftPanel: true,
      showDownPanel: true,
      showSearchBox: false,
      downPanelInRight: false
    }
  }
};