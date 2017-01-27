'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactInspector = require('react-inspector');

var _reactInspector2 = _interopRequireDefault(_reactInspector);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActionLogger = function (_Component) {
  _inherits(ActionLogger, _Component);

  function ActionLogger() {
    _classCallCheck(this, ActionLogger);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ActionLogger).apply(this, arguments));
  }

  _createClass(ActionLogger, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var latest = this.refs.latest;
      if (latest) {
        (function () {
          var borderLeft = _style2.default.action.borderLeft;
          latest.style.borderLeft = 'solid 5px #aaa';
          setTimeout(function () {
            latest.style.borderLeft = borderLeft;
          }, 300);
        })();
      }
    }
  }, {
    key: 'renderAction',
    value: function renderAction(action, i) {
      var ref = i ? '' : 'latest';
      var counter = _react2.default.createElement(
        'div',
        { style: _style2.default.counter },
        action.count
      );
      return _react2.default.createElement(
        'div',
        { ref: ref, key: action.id, style: _style2.default.action },
        _react2.default.createElement(
          'div',
          { style: _style2.default.countwrap },
          action.count > 1 && counter
        ),
        _react2.default.createElement(
          'div',
          { style: _style2.default.inspector },
          _react2.default.createElement(_reactInspector2.default, {
            showNonenumerable: true,
            name: action.data.name,
            data: action.data.args || action.data
          })
        )
      );
    }
  }, {
    key: 'getActionData',
    value: function getActionData() {
      var _this2 = this;

      return this.props.actions.map(function (action, i) {
        return _this2.renderAction(action, i);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: _style2.default.wrapper },
        _react2.default.createElement(
          'pre',
          { style: _style2.default.actions },
          this.getActionData()
        ),
        _react2.default.createElement(
          'button',
          { style: _style2.default.button, onClick: this.props.onClear },
          'CLEAR'
        )
      );
    }
  }]);

  return ActionLogger;
}(_react.Component);

ActionLogger.propTypes = {
  onClear: _react2.default.PropTypes.func,
  actions: _react2.default.PropTypes.array
};

exports.default = ActionLogger;