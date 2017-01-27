"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

exports.default = function (_ref, actionMap) {
  var provider = _ref.provider;

  var panels = (0, _keys2.default)(provider.getPanels());

  if (panels.length > 0) {
    actionMap.ui.selectDownPanel(panels[0]);
  }
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }