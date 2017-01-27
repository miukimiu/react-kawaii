'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

exports.default = compose;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _lodash = require('lodash.pick');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactStubber = require('react-stubber');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function compose(dataLoader) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  return function (Child) {
    var _options$errorHandler = options.errorHandler;
    var errorHandler = _options$errorHandler === undefined ? function (err) {
      throw err;
    } : _options$errorHandler;
    var _options$loadingHandl = options.loadingHandler;
    var loadingHandler = _options$loadingHandl === undefined ? function () {
      return null;
    } : _options$loadingHandl;
    var _options$env = options.env;
    var env = _options$env === undefined ? {} : _options$env;
    var _options$pure = options.pure;
    var pure = _options$pure === undefined ? false : _options$pure;
    var _options$propsToWatch = options.propsToWatch;
    var propsToWatch = _options$propsToWatch === undefined ? null : _options$propsToWatch;
    var _options$shouldSubscr = options.shouldSubscribe;
    var shouldSubscribe = _options$shouldSubscr === undefined ? null : _options$shouldSubscr;
    var _options$shouldUpdate = options.shouldUpdate;
    var shouldUpdate = _options$shouldUpdate === undefined ? null : _options$shouldUpdate;

    var Container = function (_React$Component) {
      (0, _inherits3.default)(Container, _React$Component);

      function Container(props) {
        var _ref;

        (0, _classCallCheck3.default)(this, Container);

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = Container.__proto__ || (0, _getPrototypeOf2.default)(Container)).call.apply(_ref, [this, props].concat(args)));

        _this.state = {};
        _this.propsCache = {};

        _this._subscribe(props);
        return _this;
      }

      (0, _createClass3.default)(Container, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          this._mounted = true;
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
          this._subscribe(props);
        }
      }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
          if (shouldUpdate) {
            return shouldUpdate(this.props, nextProps);
          }

          if (!pure) {
            return true;
          }

          return !(0, _shallowequal2.default)(this.props, nextProps) || this.state.error !== nextState.error || !(0, _shallowequal2.default)(this.state.data, nextState.data);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this._unmounted = true;
          this._unsubscribe();
        }
      }, {
        key: '_shouldSubscribe',
        value: function _shouldSubscribe(props) {
          var firstRun = !this._cachedWatchingProps;
          var nextProps = (0, _lodash2.default)(props, propsToWatch);
          var currentProps = this._cachedWatchingProps || {};
          this._cachedWatchingProps = nextProps;

          if (firstRun) return true;
          if (typeof shouldSubscribe === 'function') {
            return shouldSubscribe(currentProps, nextProps);
          }

          if (propsToWatch === null) return true;
          if (propsToWatch.length === 0) return false;
          return !(0, _shallowequal2.default)(currentProps, nextProps);
        }
      }, {
        key: '_subscribe',
        value: function _subscribe(props) {
          var _this2 = this;

          if (!this._shouldSubscribe(props)) return;

          var onData = function onData(error, data) {
            if (_this2._unmounted) {
              throw new Error('Tyring set data after component(' + Container.displayName + ') has unmounted.');
            }

            var payload = { error: error, data: data };

            if (!_this2._mounted) {
              _this2.state = (0, _extends3.default)({}, _this2.state, payload);
              return;
            }

            _this2.setState(payload);
          };

          // We need to do this before subscribing again.
          this._unsubscribe();
          this._stop = dataLoader(props, onData, env);
        }
      }, {
        key: '_unsubscribe',
        value: function _unsubscribe() {
          if (this._stop) {
            this._stop();
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var _this3 = this;

          var props = this.props;
          var _state = this.state;
          var data = _state.data;
          var error = _state.error;


          if (error) {
            return errorHandler(error);
          }

          if (!data) {
            return loadingHandler();
          }

          var finalProps = (0, _extends3.default)({}, props, data);

          var setChildRef = function setChildRef(c) {
            _this3.child = c;
          };

          return _react2.default.createElement(Child, (0, _extends3.default)({ ref: setChildRef }, finalProps));
        }
      }]);
      return Container;
    }(_react2.default.Component);

    Container.__komposerData = {
      dataLoader: dataLoader, options: options
    };

    (0, _utils.inheritStatics)(Container, Child);
    return (0, _reactStubber.mayBeStubbed)(Container);
  };
}