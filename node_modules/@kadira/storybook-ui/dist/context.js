"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (clientStore, domNode, provider) {
  return {
    clientStore: clientStore,
    domNode: domNode,
    provider: provider
  };
};