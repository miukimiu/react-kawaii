'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.changeUrl = changeUrl;
exports.updateStore = updateStore;
exports.handleInitialUrl = handleInitialUrl;

exports.default = function (_ref, actions) {
  var clientStore = _ref.clientStore;

  // handle initial URL
  handleInitialUrl(actions, window.location);

  // subscribe to clientStore and change the URL
  clientStore.subscribe(function () {
    return changeUrl(clientStore);
  });
  changeUrl(clientStore);

  // handle back button
  window.onpopstate = function () {
    config.insidePopState = true;
    handleInitialUrl(actions, window.location);
    config.insidePopState = false;
  };
};

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = exports.config = {
  insidePopState: false
};

function changeUrl(clientStore) {
  // Do not change the URL if we are inside a popState event.
  if (config.insidePopState) return;

  var data = clientStore.getAll();
  if (!data.selectedKind) return;

  var selectedKind = data.selectedKind,
      selectedStory = data.selectedStory,
      customQueryParams = data.customQueryParams;
  var _data$shortcutOptions = data.shortcutOptions,
      full = _data$shortcutOptions.goFullScreen,
      down = _data$shortcutOptions.showDownPanel,
      left = _data$shortcutOptions.showLeftPanel,
      panelRight = _data$shortcutOptions.downPanelInRight;
  var downPanel = data.selectedDownPanel;


  var urlObj = (0, _extends3.default)({}, customQueryParams, {
    selectedKind: selectedKind,
    selectedStory: selectedStory,
    full: Number(full),
    down: Number(down),
    left: Number(left),
    panelRight: Number(panelRight),
    downPanel: downPanel
  });

  var url = '?' + _qs2.default.stringify(urlObj);

  var state = (0, _extends3.default)({}, urlObj, {
    full: full,
    down: down,
    left: left,
    panelRight: panelRight,
    url: url
  });

  window.history.pushState(state, '', url);
}

function updateStore(queryParams, actions) {
  var selectedKind = queryParams.selectedKind,
      selectedStory = queryParams.selectedStory,
      _queryParams$full = queryParams.full,
      full = _queryParams$full === undefined ? 0 : _queryParams$full,
      _queryParams$down = queryParams.down,
      down = _queryParams$down === undefined ? 1 : _queryParams$down,
      _queryParams$left = queryParams.left,
      left = _queryParams$left === undefined ? 1 : _queryParams$left,
      _queryParams$panelRig = queryParams.panelRight,
      panelRight = _queryParams$panelRig === undefined ? 0 : _queryParams$panelRig,
      downPanel = queryParams.downPanel,
      customQueryParams = (0, _objectWithoutProperties3.default)(queryParams, ['selectedKind', 'selectedStory', 'full', 'down', 'left', 'panelRight', 'downPanel']);


  if (selectedKind && selectedStory) {
    actions.api.selectStory(selectedKind, selectedStory);
  }

  actions.shortcuts.setOptions({
    goFullScreen: Boolean(Number(full)),
    showDownPanel: Boolean(Number(down)),
    showLeftPanel: Boolean(Number(left)),
    downPanelInRight: Boolean(Number(panelRight))
  });

  if (downPanel) {
    actions.ui.selectDownPanel(downPanel);
  }
  actions.api.setQueryParams(customQueryParams);
}

function handleInitialUrl(actions, location) {
  var queryString = location.search.substring(1);
  if (!queryString || queryString === '') return;

  var parsedQs = _qs2.default.parse(queryString);
  updateStore(parsedQs, actions);
}