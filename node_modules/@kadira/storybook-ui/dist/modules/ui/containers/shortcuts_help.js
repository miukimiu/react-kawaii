'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapper = undefined;

var _shortcuts_help = require('../components/shortcuts_help');

var _shortcuts_help2 = _interopRequireDefault(_shortcuts_help);

var _gen_podda_loader = require('../libs/gen_podda_loader');

var _gen_podda_loader2 = _interopRequireDefault(_gen_podda_loader);

var _compose = require('../../../compose');

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapper = exports.mapper = function mapper(state, props, _ref) {
  var actions = _ref.actions;

  var actionMap = actions();
  var data = {
    isOpen: state.showShortcutsHelp,
    onClose: actionMap.ui.toggleShortcutsHelp,
    platform: window.navigator.platform.toLowerCase()
  };

  return data;
};

exports.default = (0, _compose2.default)((0, _gen_podda_loader2.default)(mapper))(_shortcuts_help2.default);