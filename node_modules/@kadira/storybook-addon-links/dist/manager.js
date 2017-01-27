'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;

var _storybookAddons = require('@kadira/storybook-addons');

var _storybookAddons2 = _interopRequireDefault(_storybookAddons);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function register() {
  _storybookAddons2.default.register(_.ADDON_ID, function (api) {
    var channel = _storybookAddons2.default.getChannel();
    channel.on(_.EVENT_ID, function (selection) {
      api.selectStory(selection.kind, selection.story);
    });
  });
}