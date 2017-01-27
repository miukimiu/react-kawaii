'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.keyEventToOptions = keyEventToOptions;

var _lodash = require('lodash.pick');

var _lodash2 = _interopRequireDefault(_lodash);

var _key_events = require('../../../libs/key_events');

var _actions = require('../../api/actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function keyEventToOptions(currentOptions, event) {
  switch (event) {
    case _key_events.features.FULLSCREEN:
      return { goFullScreen: !currentOptions.goFullScreen };
    case _key_events.features.DOWN_PANEL:
      return { showDownPanel: !currentOptions.showDownPanel };
    case _key_events.features.LEFT_PANEL:
      return { showLeftPanel: !currentOptions.showLeftPanel };
    case _key_events.features.SEARCH:
      return { showSearchBox: !currentOptions.showSearchBox };
    case _key_events.features.DOWN_PANEL_IN_RIGHT:
      return { downPanelInRight: !currentOptions.downPanelInRight };
    default:
      return {};
  }
}

exports.default = {
  handleEvent: function handleEvent(context, event) {
    var clientStore = context.clientStore;

    switch (event) {
      case _key_events.features.NEXT_STORY:
        _actions2.default.api.jumpToStory(context, 1);
        break;
      case _key_events.features.PREV_STORY:
        _actions2.default.api.jumpToStory(context, -1);
        break;
      default:
        clientStore.update(function (state) {
          var newOptions = keyEventToOptions(state.shortcutOptions, event);
          var updatedOptions = (0, _extends3.default)({}, state.shortcutOptions, newOptions);

          return {
            shortcutOptions: updatedOptions
          };
        });
    }
  },
  setOptions: function setOptions(_ref, options) {
    var clientStore = _ref.clientStore;

    clientStore.update(function (state) {
      var updatedOptions = (0, _extends3.default)({}, state.shortcutOptions, (0, _lodash2.default)(options, (0, _keys2.default)(state.shortcutOptions)));

      return {
        shortcutOptions: updatedOptions
      };
    });
  }
};