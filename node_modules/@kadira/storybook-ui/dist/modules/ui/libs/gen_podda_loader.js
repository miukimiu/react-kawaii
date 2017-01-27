"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = genPoddaLoader;
function genPoddaLoader(fn) {
  return function (props, onData, env) {
    var _env$context = env.context(),
        clientStore = _env$context.clientStore;

    var processState = function processState() {
      try {
        var state = clientStore.getAll();
        var data = fn(state, props, env);
        onData(null, data);
      } catch (ex) {
        onData(ex);
      }
    };

    processState();
    return clientStore.subscribe(processState);
  };
}