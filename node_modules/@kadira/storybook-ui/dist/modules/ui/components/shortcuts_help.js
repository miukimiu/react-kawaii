'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShortcutsHelp = exports.Shortcuts = exports.Keys = undefined;
exports.getShortcuts = getShortcuts;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commandStyle = {
  backgroundColor: '#eee',
  padding: '2px 7px',
  borderRadius: 2,
  lineHeight: '36px',
  marginRight: '9px'
};

var h4Style = {
  marginTop: 0,
  textAlign: 'center'
};

var modalStyles = {
  content: {
    left: '50%',
    bottom: 'initial',
    right: 'initial',
    width: 440,
    marginLeft: -220,
    border: 'none',
    overflow: 'visible',
    fontFamily: 'sans-serif',
    fontSize: 14
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.74902)'
  }
};

// manage two separate shortcut keys for
// 'mac' & other (windows, linux) platforms
function getShortcuts(platform) {
  // if it is mac platform
  if (platform && platform.indexOf('mac') !== -1) {
    return [{ name: 'Toggle Search Box', keys: ['⌘ ⇧ P', '⌃ ⇧ P'] }, { name: 'Toggle Action Logger position', keys: ['⌘ ⇧ J', '⌃ ⇧ J'] }, { name: 'Toggle Fullscreen Mode', keys: ['⌘ ⇧ F', '⌃ ⇧ F'] }, { name: 'Toggle Left Panel', keys: ['⌘ ⇧ L', '⌃ ⇧ L'] }, { name: 'Toggle Down Panel', keys: ['⌘ ⇧ D', '⌃ ⇧ D'] }, { name: 'Next Story', keys: ['⌘ ⇧ →', '⌃ ⇧ →'] }, { name: 'Previous Story', keys: ['⌘ ⇧ ←', '⌃ ⇧ ←'] }];
  }

  return [{ name: 'Toggle Search Box', keys: ['Ctrl + Shift + P'] }, { name: 'Toggle Action Logger position', keys: ['Ctrl + Shift + J'] }, { name: 'Toggle Fullscreen Mode', keys: ['Ctrl + Shift + F'] }, { name: 'Toggle Left Panel', keys: ['Ctrl + Shift + L'] }, { name: 'Toggle Down Panel', keys: ['Ctrl + Shift + D'] }, { name: 'Next Story', keys: ['Ctrl + Shift + →'] }, { name: 'Previous Story', keys: ['Ctrl + Shift + ←'] }];
}

var Keys = exports.Keys = function Keys(_ref) {
  var shortcutKeys = _ref.shortcutKeys;

  // if we have only one key combination for a shortcut
  if (shortcutKeys.length === 1) {
    return _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement(
        'b',
        { style: commandStyle },
        shortcutKeys[0]
      )
    );
  }

  // if we have multiple key combinations for a shortcut
  var keys = shortcutKeys.map(function (key, index, arr) {
    return _react2.default.createElement(
      'span',
      { key: index },
      _react2.default.createElement(
        'b',
        { style: commandStyle },
        key
      ),
      arr.length - 1 !== index ? _react2.default.createElement(
        'span',
        null,
        '/ \xA0'
      ) : ''
    );
  });

  return _react2.default.createElement(
    'span',
    null,
    keys
  );
};

Keys.propTypes = {
  shortcutKeys: _react2.default.PropTypes.array.isRequired
};

var Shortcuts = exports.Shortcuts = function Shortcuts(_ref2) {
  var appShortcuts = _ref2.appShortcuts;

  var shortcuts = appShortcuts.map(function (shortcut, index) {
    return _react2.default.createElement(
      'div',
      { key: index },
      _react2.default.createElement(Keys, { shortcutKeys: shortcut.keys }),
      shortcut.name
    );
  });

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      { style: h4Style },
      'Keyboard Shortcuts'
    ),
    shortcuts
  );
};

Shortcuts.propTypes = {
  appShortcuts: _react2.default.PropTypes.array.isRequired
};

var ShortcutsHelp = exports.ShortcutsHelp = function ShortcutsHelp(_ref3) {
  var isOpen = _ref3.isOpen,
      onClose = _ref3.onClose,
      platform = _ref3.platform;
  return _react2.default.createElement(
    _reactModal2.default,
    {
      isOpen: isOpen,
      onRequestClose: onClose,
      style: modalStyles,
      contentLabel: 'Shortcuts'
    },
    _react2.default.createElement(Shortcuts, { appShortcuts: getShortcuts(platform) })
  );
};

ShortcutsHelp.propTypes = {
  isOpen: _react2.default.PropTypes.bool,
  onClose: _react2.default.PropTypes.func,
  platform: _react2.default.PropTypes.string.isRequired
};

exports.default = ShortcutsHelp;