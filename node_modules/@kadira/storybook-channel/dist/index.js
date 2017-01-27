"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Channel = function () {
  function Channel(_ref) {
    var transport = _ref.transport;

    _classCallCheck(this, Channel);

    this._sender = this._randomId();
    this._transport = transport;
    this._transport.setHandler(this._handleEvent.bind(this));
    this._listeners = {};
  }

  _createClass(Channel, [{
    key: "addListener",
    value: function addListener(type, listener) {
      this.on(type, listener);
    }
  }, {
    key: "emit",
    value: function emit(type) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var event = { type: type, args: args, from: this._sender };
      this._transport.send(event);
    }
  }, {
    key: "eventNames",
    value: function eventNames() {
      return Object.keys(this._listeners);
    }
  }, {
    key: "listenerCount",
    value: function listenerCount(type) {
      var listeners = this._listeners[type];
      return listeners ? listeners.length : 0;
    }
  }, {
    key: "listeners",
    value: function listeners(type) {
      return this._listeners[type];
    }
  }, {
    key: "on",
    value: function on(type, listener) {
      this._listeners[type] = this._listeners[type] || [];
      this._listeners[type].push(listener);
    }
  }, {
    key: "once",
    value: function once(type, listener) {
      var onceListener = this._onceListener(type, listener);
      this.on(type, onceListener);
    }
  }, {
    key: "prependListener",
    value: function prependListener(type, listener) {
      this._listeners[type] = this._listeners[type] || [];
      this._listeners[type].unshift(listener);
    }
  }, {
    key: "prependOnceListener",
    value: function prependOnceListener(type, listener) {
      var onceListener = this._onceListener(type, listener);
      this.prependListener(type, onceListener);
    }
  }, {
    key: "removeAllListeners",
    value: function removeAllListeners(type) {
      if (!type) {
        this._listeners = {};
      } else if (this._listeners[type]) {
        delete this._listeners[type];
      }
    }
  }, {
    key: "removeListener",
    value: function removeListener(type, listener) {
      var listeners = this._listeners[type];
      if (listeners) {
        this._listeners[type] = listeners.filter(function (l) {
          return l !== listener;
        });
      }
    }
  }, {
    key: "_randomId",
    value: function _randomId() {
      // generates a random 13 character string
      return Math.random().toString(16).slice(2);
    }
  }, {
    key: "_handleEvent",
    value: function _handleEvent(event) {
      var listeners = this._listeners[event.type];
      if (event.from !== this._sender && listeners) {
        listeners.forEach(function (fn) {
          return fn.apply(undefined, _toConsumableArray(event.args));
        });
      }
    }
  }, {
    key: "_onceListener",
    value: function _onceListener(type, listener) {
      var _this = this;

      var onceListener = function onceListener() {
        _this.removeListener(type, onceListener);
        return listener.apply(undefined, arguments);
      };
      return onceListener;
    }
  }]);

  return Channel;
}();

exports.default = Channel;