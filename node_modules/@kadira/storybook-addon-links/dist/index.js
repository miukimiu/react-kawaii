'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _manager = require('./manager');

Object.defineProperty(exports, 'register', {
  enumerable: true,
  get: function get() {
    return _manager.register;
  }
});

var _preview = require('./preview');

Object.defineProperty(exports, 'linkTo', {
  enumerable: true,
  get: function get() {
    return _preview.linkTo;
  }
});
var ADDON_ID = exports.ADDON_ID = 'kadirahq/storybook-addon-links';
var EVENT_ID = exports.EVENT_ID = ADDON_ID + '/link-to-message';