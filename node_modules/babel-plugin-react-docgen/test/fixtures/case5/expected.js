'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Second = function Second() {
  return _react2.default.createElement(
    'div',
    null,
    'Sample'
  );
};

var First = function First(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    null,
    children,
    _react2.default.createElement(Second, null)
  );
};

First.propTypes = {
  children: _react.PropTypes.node
};

exports.default = First;
First.__docgenInfo = {
  'description': '',
  'props': {
    'children': {
      'type': {
        'name': 'node'
      },
      'required': false,
      'description': ''
    }
  }
};

if (typeof STORYBOOK_REACT_CLASSES !== 'undefined') {
  STORYBOOK_REACT_CLASSES['test/fixtures/case5/actual.js'] = {
    name: 'First',
    docgenInfo: First.__docgenInfo,
    path: 'test/fixtures/case5/actual.js'
  };
}
