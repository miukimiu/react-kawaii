'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (injectDeps, _ref) {
  var clientStore = _ref.clientStore,
      provider = _ref.provider,
      domNode = _ref.domNode;

  // generate preview
  var Preview = function Preview() {
    var state = clientStore.getAll();
    var preview = provider.renderPreview(state.selectedKind, state.selectedStory);
    return preview;
  };

  var root = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_layout2.default, {
      leftPanel: function leftPanel() {
        return _react2.default.createElement(_left_panel2.default, null);
      },
      preview: function preview() {
        return _react2.default.createElement(Preview, null);
      },
      downPanel: function downPanel() {
        return _react2.default.createElement(_down_panel2.default, null);
      }
    }),
    _react2.default.createElement(_shortcuts_help2.default, null),
    _react2.default.createElement(_search_box2.default, null)
  );
  _reactDom2.default.render(root, domNode);
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _layout = require('./containers/layout');

var _layout2 = _interopRequireDefault(_layout);

var _left_panel = require('./containers/left_panel');

var _left_panel2 = _interopRequireDefault(_left_panel);

var _down_panel = require('./containers/down_panel');

var _down_panel2 = _interopRequireDefault(_down_panel);

var _shortcuts_help = require('./containers/shortcuts_help');

var _shortcuts_help2 = _interopRequireDefault(_shortcuts_help);

var _search_box = require('./containers/search_box');

var _search_box2 = _interopRequireDefault(_search_box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }