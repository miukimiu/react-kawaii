'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recast = require('recast');

var _recast2 = _interopRequireDefault(_recast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var types = _recast2.default.types.namedTypes;

/**
 * Returns true of the path is an unreachable TypePath
 */
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

exports.default = function (path) {
  return !path || types.Identifier.check(path.node) || types.ImportDeclaration.check(path.node) || types.CallExpression.check(path.node);
};