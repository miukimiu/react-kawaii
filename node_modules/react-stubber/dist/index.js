'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.mayBeStubbed = mayBeStubbed;
exports.setStubbingMode = setStubbingMode;
exports.stub = stub;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stubbingMode = false;

function mayBeStubbed(Comp) {
  if (stubbingMode) {
    var _ret = function () {
      var displayName = Comp.displayName || Comp.name || 'Component';
      return {
        v: function (_React$Component) {
          (0, _inherits3.default)(StubComponent, _React$Component);

          function StubComponent() {
            (0, _classCallCheck3.default)(this, StubComponent);
            return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(StubComponent).apply(this, arguments));
          }

          (0, _createClass3.default)(StubComponent, [{
            key: 'render',
            value: function render() {
              if (StubComponent.__getComponent) {
                return StubComponent.__getComponent(this.props);
              }

              var label = '<' + displayName + '/>';
              return _react2.default.createElement(
                'span',
                null,
                label
              );
            }
          }]);
          return StubComponent;
        }(_react2.default.Component)
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
  }

  return Comp;
}

function setStubbingMode(mode) {
  stubbingMode = mode; /* eslint no-param-reassign:0 */
}

function stub(Comp, fn) {
  Comp.__getComponent = fn;
}