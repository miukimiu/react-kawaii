'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = printValue;

var _recast = require('recast');

var _recast2 = _interopRequireDefault(_recast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Prints the given path without leading or trailing comments.
 */
function printValue(path) {
  if (path.node.comments) {
    path.node.comments.length = 0;
  }
  return _recast2.default.print(path).code;
} /*
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