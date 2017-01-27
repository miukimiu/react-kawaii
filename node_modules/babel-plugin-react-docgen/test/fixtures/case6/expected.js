'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.hoc = hoc;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function hoc(Inner) {
  var C1 = function C1(props) {
    return _react2.default.createElement(ActualC1, props);
  };
  var C2 = function C2(props) {
    return _react2.default.createElement(ActualC2, props);
  };
  return {
    C1: C1,
    C2: C2
  };
}

var ActualC1 = function (_React$Component) {
  _inherits(ActualC1, _React$Component);

  function ActualC1() {
    _classCallCheck(this, ActualC1);

    return _possibleConstructorReturn(this, (ActualC1.__proto__ || Object.getPrototypeOf(ActualC1)).apply(this, arguments));
  }

  _createClass(ActualC1, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null);
    }
  }]);

  return ActualC1;
}(_react2.default.Component);

var ActualC2 = function (_React$Component2) {
  _inherits(ActualC2, _React$Component2);

  function ActualC2() {
    _classCallCheck(this, ActualC2);

    return _possibleConstructorReturn(this, (ActualC2.__proto__ || Object.getPrototypeOf(ActualC2)).apply(this, arguments));
  }

  _createClass(ActualC2, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null);
    }
  }]);

  return ActualC2;
}(_react2.default.Component);
