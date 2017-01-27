'use strict';

var _storybookUi = require('@kadira/storybook-ui');

var _storybookUi2 = _interopRequireDefault(_storybookUi);

var _provider = require('./provider');

var _provider2 = _interopRequireDefault(_provider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global document */

var rootEl = document.getElementById('root');
(0, _storybookUi2.default)(rootEl, new _provider2.default());