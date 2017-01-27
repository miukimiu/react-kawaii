'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DownPanel = function (_Component) {
  (0, _inherits3.default)(DownPanel, _Component);

  function DownPanel() {
    (0, _classCallCheck3.default)(this, DownPanel);
    return (0, _possibleConstructorReturn3.default)(this, (DownPanel.__proto__ || (0, _getPrototypeOf2.default)(DownPanel)).apply(this, arguments));
  }

  (0, _createClass3.default)(DownPanel, [{
    key: 'renderTab',
    value: function renderTab(name, panel) {
      var _this2 = this;

      var tabStyle = _style2.default.tablink;
      if (this.props.selectedPanel === name) {
        tabStyle = (0, _assign2.default)({}, _style2.default.tablink, _style2.default.activetab);
      }

      var onClick = function onClick() {
        return function (e) {
          e.preventDefault();
          _this2.props.onPanelSelect(name);
        };
      };

      var title = panel.title;
      if (typeof title === 'function') {
        title = title();
      }

      return _react2.default.createElement(
        'a',
        {
          href: '#',
          key: name,
          style: tabStyle,
          onClick: onClick()
        },
        title
      );
    }
  }, {
    key: 'renderTabs',
    value: function renderTabs() {
      var _this3 = this;

      return (0, _keys2.default)(this.props.panels).map(function (name) {
        var panel = _this3.props.panels[name];
        return _this3.renderTab(name, panel);
      });
    }
  }, {
    key: 'renderPanels',
    value: function renderPanels() {
      var _this4 = this;

      return (0, _keys2.default)(this.props.panels).sort().map(function (name) {
        var panelStyle = { display: 'none' };
        var panel = _this4.props.panels[name];
        if (name === _this4.props.selectedPanel) {
          (0, _assign2.default)(panelStyle, { flex: 1, display: 'flex' });
        }
        return _react2.default.createElement(
          'div',
          { key: name, style: panelStyle },
          panel.render()
        );
      });
    }
  }, {
    key: 'renderEmpty',
    value: function renderEmpty() {
      return _react2.default.createElement(
        'div',
        { style: _style2.default.empty },
        'no panels available'
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.panels || !(0, _keys2.default)(this.props.panels).length) {
        return this.renderEmpty();
      }
      return _react2.default.createElement(
        'div',
        { style: _style2.default.wrapper },
        _react2.default.createElement(
          'div',
          { style: _style2.default.tabbar },
          this.renderTabs()
        ),
        _react2.default.createElement(
          'div',
          { style: _style2.default.content },
          this.renderPanels()
        )
      );
    }
  }]);
  return DownPanel;
}(_react.Component);

DownPanel.propTypes = {
  panels: _react2.default.PropTypes.object,
  onPanelSelect: _react2.default.PropTypes.func,
  selectedPanel: _react2.default.PropTypes.string
};

exports.default = DownPanel;