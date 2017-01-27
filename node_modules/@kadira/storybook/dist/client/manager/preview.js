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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iframeStyle = {
  width: '100%',
  height: '100%',
  border: 0,
  margin: 0,
  padding: 0
};

var Preview = function (_Component) {
  (0, _inherits3.default)(Preview, _Component);

  function Preview() {
    (0, _classCallCheck3.default)(this, Preview);
    return (0, _possibleConstructorReturn3.default)(this, (Preview.__proto__ || (0, _getPrototypeOf2.default)(Preview)).apply(this, arguments));
  }

  (0, _createClass3.default)(Preview, [{
    key: 'shouldComponentUpdate',

    /* eslint-disable class-methods-use-this */
    value: function shouldComponentUpdate() {
      // When the manager is re-rendered, due to changes in the layout (going full screen / changing
      // addon panel to right) Preview section will update. If its re-rendered the whole html page
      // inside the html is re-rendered making the story to re-mount.
      // We dont have to re-render this component for any reason since changes are communicated to
      // story using the channel and necessary changes are done by it.
      return false;
    }
    /* eslint-enable class-methods-use-this */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('iframe', {
        id: 'storybook-preview-iframe',
        style: iframeStyle,
        src: this.props.url
      });
    }
  }]);
  return Preview;
}(_react.Component);

Preview.propTypes = {
  url: _react2.default.PropTypes.string
};

exports.default = Preview;