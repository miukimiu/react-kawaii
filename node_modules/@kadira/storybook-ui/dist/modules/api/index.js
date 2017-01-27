'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions2 = require('./actions');

var _actions3 = _interopRequireDefault(_actions2);

var _init_api = require('./configs/init_api');

var _init_api2 = _interopRequireDefault(_init_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  actions: _actions3.default,
  defaultState: {
    uiOptions: {
      name: 'REACT STORYBOOK',
      url: 'https://github.com/kadirahq/react-storybook',
      sortStoriesByKind: false
    }
  },
  load: function load(_ref, _actions) {
    var clientStore = _ref.clientStore,
        provider = _ref.provider;

    (0, _init_api2.default)(provider, clientStore, _actions);
  }
};