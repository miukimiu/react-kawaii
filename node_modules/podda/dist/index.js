'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Podda = function () {
  function Podda() {
    var defaults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, Podda);

    this.data = _immutable2.default.Map(defaults); //eslint-disable-line
    this.callbacks = [];
    this.watchCallbacks = {};
  }

  (0, _createClass3.default)(Podda, [{
    key: 'fireSubscriptions',
    value: function fireSubscriptions() {
      var _this = this;

      this.callbacks.forEach(function (cb) {
        cb(_this.getAll());
      });
    }
  }, {
    key: 'fire',
    value: function fire(key, value) {
      var watchCallbacks = this.watchCallbacks[key] || [];
      watchCallbacks.forEach(function (callback) {
        callback(value);
      });
    }
  }, {
    key: '_set',
    value: function _set(key, value) {
      this.data = this.data.set(key, _immutable2.default.fromJS(value));
      this.fire(key, value);
    }
  }, {
    key: 'set',
    value: function set(key, value) {
      this._set(key, value);
      this.fireSubscriptions();
    }
  }, {
    key: 'update',
    value: function update(fn) {
      var _this2 = this;

      var currentState = this.data.toJS();
      var newFields = fn(currentState);
      if (newFields === null || newFields === undefined) {
        throw new Error('You must provide an object with updated values for Podda.set(fn)');
      }

      (0, _keys2.default)(newFields).forEach(function (key) {
        _this2._set(key, newFields[key]);
      });
      this.fireSubscriptions();
    }
  }, {
    key: 'get',
    value: function get(key) {
      var value = this.data.get(key);
      if (value === null || value === undefined) {
        return value;
      }

      return value.toJS ? value.toJS() : value;
    }
  }, {
    key: 'getAll',
    value: function getAll() {
      return this.data.toJS();
    }
  }, {
    key: 'subscribe',
    value: function subscribe(cb) {
      var _this3 = this;

      this.callbacks.push(cb);
      var stopped = false;

      var stop = function stop() {
        if (stopped) return;
        var index = _this3.callbacks.indexOf(cb);
        _this3.callbacks.splice(index, 1);
        stopped = true;
      };

      return stop;
    }
  }, {
    key: 'watch',
    value: function watch(key, callback) {
      if (!this.watchCallbacks[key]) {
        this.watchCallbacks[key] = [];
      }

      var callbacks = this.watchCallbacks[key];
      callbacks.push(callback);

      var stopped = false;
      function stop() {
        if (stopped) return;

        var index = callbacks.indexOf(callback);
        callbacks.splice(index, 1);
        stopped = true;
      }

      return stop;
    }
  }, {
    key: 'watchFor',
    value: function watchFor(key, expectedValue, callback) {
      var callbackAndCheck = function callbackAndCheck(value) {
        if (value === expectedValue) {
          callback(value);
        }
      };

      return this.watch(key, callbackAndCheck);
    }
  }, {
    key: 'registerAPI',
    value: function registerAPI(method, fn) {
      var _this4 = this;

      if (this[method]) {
        throw new Error('Cannot add an API for the existing API: "' + method + '".');
      }

      this[method] = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return fn.apply(undefined, [_this4].concat(args));
      };
    }
  }]);
  return Podda;
}();

exports.default = Podda;