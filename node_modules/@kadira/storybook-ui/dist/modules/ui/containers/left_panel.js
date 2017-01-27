'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapper = undefined;

var _left_panel = require('../components/left_panel');

var _left_panel2 = _interopRequireDefault(_left_panel);

var _filters = require('../libs/filters');

var filters = _interopRequireWildcard(_filters);

var _gen_podda_loader = require('../libs/gen_podda_loader');

var _gen_podda_loader2 = _interopRequireDefault(_gen_podda_loader);

var _compose = require('../../../compose');

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapper = exports.mapper = function mapper(state, props, _ref) {
  var actions = _ref.actions;

  var actionMap = actions();
  var stories = state.stories,
      selectedKind = state.selectedKind,
      selectedStory = state.selectedStory,
      uiOptions = state.uiOptions,
      storyFilter = state.storyFilter;
  var name = uiOptions.name,
      url = uiOptions.url,
      sortStoriesByKind = uiOptions.sortStoriesByKind;


  var data = {
    stories: filters.storyFilter(stories, storyFilter, selectedKind, sortStoriesByKind),
    selectedKind: selectedKind,
    selectedStory: selectedStory,
    onSelectStory: actionMap.api.selectStory,

    storyFilter: storyFilter,
    onStoryFilter: actionMap.ui.setStoryFilter,

    openShortcutsHelp: actionMap.ui.toggleShortcutsHelp,
    name: name,
    url: url
  };

  return data;
};

exports.default = (0, _compose2.default)((0, _gen_podda_loader2.default)(mapper))(_left_panel2.default);