'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _function = require('./function');

var _function2 = _interopRequireDefault(_function);

var _react = require('react');

var PureComponent = (function (_Component) {
  function PureComponent() {
    _classCallCheck(this, PureComponent);

    if (_Component != null) {
      _Component.apply(this, arguments);
    }
  }

  _inherits(PureComponent, _Component);

  return PureComponent;
})(_react.Component);

exports['default'] = PureComponent;

PureComponent.prototype.shouldComponentUpdate = _function2['default'];
module.exports = exports['default'];