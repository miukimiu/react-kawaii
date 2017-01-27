'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

exports.getDocblock = getDocblock;
exports.getDoclets = getDoclets;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

/**
 * Helper functions to work with docblock comments.
 */

var DOCLET_PATTERN = /^@(\w+)(?:$|\s((?:[^](?!^@\w))*))/gmi;

function parseDocblock(str) {
  var lines = str.split('\n');
  for (var i = 0, l = lines.length; i < l; i++) {
    lines[i] = lines[i].replace(/^\s*\*\s?/, '');
  }
  return lines.join('\n').trim();
}

var DOCBLOCK_HEADER = /^\*\s/;

/**
 * Given a path, this function returns the closest preceding docblock if it
 * exists.
 */
function getDocblock(path) {
  var comments = [];
  if (path.node.leadingComments) {
    comments = path.node.leadingComments.filter(function (comment) {
      return comment.type === 'CommentBlock' && DOCBLOCK_HEADER.test(comment.value);
    });
  } else if (path.node.comments) {
    comments = path.node.comments.filter(function (comment) {
      return comment.leading && comment.type === 'CommentBlock' && DOCBLOCK_HEADER.test(comment.value);
    });
  }

  if (comments.length > 0) {
    return parseDocblock(comments[comments.length - 1].value);
  }
  return null;
}

/**
 * Given a string, this functions returns an object with doclet names as keys
 * and their "content" as values.
 */
function getDoclets(str) {
  var doclets = (0, _create2.default)(null);
  var match = DOCLET_PATTERN.exec(str);

  for (; match; match = DOCLET_PATTERN.exec(str)) {
    doclets[match[1]] = match[2] || true;
  }

  return doclets;
}