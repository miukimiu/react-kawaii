'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _ActionLogger = require('../../components/ActionLogger/');

var _ActionLogger2 = _interopRequireDefault(_ActionLogger);

var _ = require('../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActionLogger = function (_React$Component) {
  _inherits(ActionLogger, _React$Component);

  function ActionLogger(props) {
    var _Object$getPrototypeO;

    _classCallCheck(this, ActionLogger);

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ActionLogger)).call.apply(_Object$getPrototypeO, [this, props].concat(args)));

    _this.state = { actions: [] };
    _this._actionListener = function (action) {
      return _this.addAction(action);
    };
    return _this;
  }

  _createClass(ActionLogger, [{
    key: 'addAction',
    value: function addAction(action) {
      action.data.args = action.data.args.map(function (arg) {
        return JSON.parse(arg);
      });
      var actions = [].concat(_toConsumableArray(this.state.actions));
      var previous = actions.length && actions[0];
      if (previous && (0, _deepEqual2.default)(previous.data, action.data)) {
        previous.count++;
      } else {
        action.count = 1;
        actions.unshift(action);
      }
      this.setState({ actions: actions });
    }
  }, {
    key: 'clearActions',
    value: function clearActions() {
      this.setState({ actions: [] });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.channel.on(_.EVENT_ID, this._actionListener);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.channel.removeListener(_.EVENT_ID, this._actionListener);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = {
        actions: this.state.actions,
        onClear: function onClear() {
          return _this2.clearActions();
        }
      };
      return _react2.default.createElement(_ActionLogger2.default, props);
    }
  }]);

  return ActionLogger;
}(_react2.default.Component);

exports.default = ActionLogger;