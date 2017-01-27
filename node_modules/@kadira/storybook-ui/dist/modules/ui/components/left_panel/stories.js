'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var listStyle = (0, _extends3.default)({}, _theme.baseFonts);

var listStyleType = {
  listStyleType: 'none',
  paddingLeft: 0
};

var kindStyle = {
  fontSize: 15,
  padding: '10px 0px',
  cursor: 'pointer',
  borderBottom: '1px solid #EEE'
};

var storyStyle = {
  fontSize: 13,
  padding: '8px 0px 8px 10px',
  cursor: 'pointer'
};

var Stories = function (_React$Component) {
  (0, _inherits3.default)(Stories, _React$Component);

  function Stories() {
    var _ref;

    (0, _classCallCheck3.default)(this, Stories);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = Stories.__proto__ || (0, _getPrototypeOf2.default)(Stories)).call.apply(_ref, [this].concat(args)));

    _this.renderKind = _this.renderKind.bind(_this);
    _this.renderStory = _this.renderStory.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Stories, [{
    key: 'fireOnKind',
    value: function fireOnKind(kind) {
      var onSelectStory = this.props.onSelectStory;

      if (onSelectStory) onSelectStory(kind, null);
    }
  }, {
    key: 'fireOnStory',
    value: function fireOnStory(story) {
      var _props = this.props,
          onSelectStory = _props.onSelectStory,
          selectedKind = _props.selectedKind;

      if (onSelectStory) onSelectStory(selectedKind, story);
    }
  }, {
    key: 'renderStory',
    value: function renderStory(story) {
      var selectedStory = this.props.selectedStory;

      var style = (0, _extends3.default)({ display: 'block' }, storyStyle);
      var props = {
        onClick: this.fireOnStory.bind(this, story)
      };

      if (story === selectedStory) {
        style.fontWeight = 'bold';
      }

      return _react2.default.createElement(
        'li',
        { key: story },
        _react2.default.createElement(
          'a',
          { title: 'Open ' + story, style: style, onClick: props.onClick },
          story
        )
      );
    }
  }, {
    key: 'renderKind',
    value: function renderKind(_ref2) {
      var kind = _ref2.kind,
          stories = _ref2.stories;
      var selectedKind = this.props.selectedKind;

      var style = (0, _extends3.default)({ display: 'block' }, kindStyle);
      var onClick = this.fireOnKind.bind(this, kind);

      if (kind === selectedKind) {
        style.fontWeight = 'bold';
        return _react2.default.createElement(
          'li',
          { key: kind },
          _react2.default.createElement(
            'a',
            { title: 'Open ' + kind, style: style, onClick: onClick },
            kind
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'ul',
              { style: listStyleType },
              stories.map(this.renderStory)
            )
          )
        );
      }

      return _react2.default.createElement(
        'li',
        { key: kind },
        _react2.default.createElement(
          'a',
          { title: 'Open ' + kind, style: style, onClick: onClick },
          kind
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var stories = this.props.stories;

      return _react2.default.createElement(
        'div',
        { style: listStyle },
        _react2.default.createElement(
          'ul',
          { style: listStyleType },
          stories.map(this.renderKind)
        )
      );
    }
  }]);
  return Stories;
}(_react2.default.Component);

Stories.propTypes = {
  stories: _react2.default.PropTypes.array.isRequired,
  selectedKind: _react2.default.PropTypes.string.isRequired,
  selectedStory: _react2.default.PropTypes.string.isRequired,
  onSelectStory: _react2.default.PropTypes.func
};

exports.default = Stories;