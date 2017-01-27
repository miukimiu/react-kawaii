'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linkTo = exports.action = exports.getStorybook = exports.configure = exports.addDecorator = exports.setAddon = exports.storiesOf = undefined;

var _storybookAddonActions = require('@kadira/storybook-addon-actions');

Object.defineProperty(exports, 'action', {
  enumerable: true,
  get: function get() {
    return _storybookAddonActions.action;
  }
});

var _storybookAddonLinks = require('@kadira/storybook-addon-links');

Object.defineProperty(exports, 'linkTo', {
  enumerable: true,
  get: function get() {
    return _storybookAddonLinks.linkTo;
  }
});

var _preview = require('./preview');

var previewApi = _interopRequireWildcard(_preview);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var storiesOf = exports.storiesOf = previewApi.storiesOf;
var setAddon = exports.setAddon = previewApi.setAddon;
var addDecorator = exports.addDecorator = previewApi.addDecorator;
var configure = exports.configure = previewApi.configure;
var getStorybook = exports.getStorybook = previewApi.getStorybook;

// NOTE export these to keep backwards compatibility