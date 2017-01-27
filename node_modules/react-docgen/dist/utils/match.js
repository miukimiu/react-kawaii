'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = match;

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
 *
 */

/**
 * This function takes an AST node and matches it against "pattern". Pattern
 * is simply a (nested) object literal and it is traversed to see whether node
 * contains those (nested) properties with the provided values.
 */
function match(node, pattern) {
  if (!node) {
    return false;
  }
  for (var prop in pattern) {
    if (!node[prop]) {
      return false;
    }
    if (pattern[prop] && (0, _typeof3.default)(pattern[prop]) === 'object') {
      if (!match(node[prop], pattern[prop])) {
        return false;
      }
    } else if (node[prop] !== pattern[prop]) {
      return false;
    }
  }
  return true;
}