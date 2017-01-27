'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (provider, clientStore, actions) {
  var callbacks = new _events.EventEmitter();
  var currentKind = void 0;
  var currentStory = void 0;

  var providerApi = {
    onStory: function onStory(cb) {
      callbacks.on('story', cb);
      if (currentKind && currentStory) {
        // Using a setTimeout to call the callback to make sure it's
        // not called on current event-loop. When users add callbacks
        // they usually expect it to be called in a future event loop.
        setTimeout(function () {
          return cb(currentKind, currentStory);
        }, 0);
      }
      return function stopListening() {
        callbacks.removeListener('story', cb);
      };
    },


    setStories: actions.api.setStories,
    selectStory: actions.api.selectStory,
    handleShortcut: actions.shortcuts.handleEvent,
    setQueryParams: actions.api.setQueryParams,

    setOptions: function setOptions() {
      var _actions$api, _actions$shortcuts;

      (_actions$api = actions.api).setOptions.apply(_actions$api, arguments);
      (_actions$shortcuts = actions.shortcuts).setOptions.apply(_actions$shortcuts, arguments);
    },
    getQueryParam: function getQueryParam(key) {
      var state = clientStore.getAll();
      if (state.customQueryParams) {
        return state.customQueryParams[key];
      }
      return undefined;
    }
  };

  provider.handleAPI(providerApi);

  // subscribe to redux store and trigger onStory's callback
  clientStore.subscribe(function () {
    var state = clientStore.getAll();
    if (!state.selectedKind) return;

    if (state.selectedKind === currentKind && state.selectedStory === currentStory) {
      // No change in the selected story so avoid emitting 'story'
      return;
    }

    currentKind = state.selectedKind;
    currentStory = state.selectedStory;
    callbacks.emit('story', state.selectedKind, state.selectedStory);
    // providerApi._onStoryCallback(api.selectedKind, api.selectedStory);
  });
};

var _events = require('events');