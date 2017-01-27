'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapper = undefined;

var _search_box = require('../components/search_box');

var _search_box2 = _interopRequireDefault(_search_box);

var _gen_podda_loader = require('../libs/gen_podda_loader');

var _gen_podda_loader2 = _interopRequireDefault(_gen_podda_loader);

var _compose = require('../../../compose');

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapper = exports.mapper = function mapper(state, props, _ref) {
  var actions = _ref.actions;

  var actionMap = actions();
  return {
    showSearchBox: state.shortcutOptions.showSearchBox,
    stories: state.stories,
    onSelectStory: actionMap.api.selectStory,
    handleEvent: actionMap.shortcuts.handleEvent
  };
};

exports.default = (0, _compose2.default)((0, _gen_podda_loader2.default)(mapper))(_search_box2.default);