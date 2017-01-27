'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storyFilter = storyFilter;

var _fuzzysearch = require('fuzzysearch');

var _fuzzysearch2 = _interopRequireDefault(_fuzzysearch);

var _lodash = require('lodash.sortby');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sort(stories, sortStoriesByKind) {
  if (!sortStoriesByKind) return stories;

  return (0, _lodash2.default)(stories, ['kind']);
}

function storyFilter(stories, filter, selectedKind, sortStoriesByKind) {
  if (!stories) return null;
  var sorted = sort(stories, sortStoriesByKind);
  if (!filter) return sorted;

  return sorted.filter(function (kindInfo) {
    if (kindInfo.kind === selectedKind) return true;
    var needle = filter.toLocaleLowerCase();
    var hstack = kindInfo.kind.toLocaleLowerCase();
    return (0, _fuzzysearch2.default)(needle, hstack);
  });
}