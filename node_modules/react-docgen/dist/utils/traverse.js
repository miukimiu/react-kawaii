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

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.traverseShallow = traverseShallow;

var _recast = require('recast');

var _recast2 = _interopRequireDefault(_recast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A helper function that doesn't traverse into nested blocks / statements by
 * default.
 */
function traverseShallow(ast, visitors) {
  _recast2.default.visit(ast, (0, _extends3.default)({}, defaultVisitors, visitors));
}

var ignore = function ignore() {
  return false;
};
var defaultVisitors = {
  visitFunctionDeclaration: ignore,
  visitFunctionExpression: ignore,
  visitClassDeclaration: ignore,
  visitClassExpression: ignore,
  visitIfStatement: ignore,
  visitWithStatement: ignore,
  visitSwitchStatement: ignore,
  visitWhileStatement: ignore,
  visitDoWhileStatement: ignore,
  visitForStatement: ignore,
  visitForInStatement: ignore,
  visitForOfStatement: ignore,
  visitExportDeclaration: ignore,
  visitExportNamedDeclaration: ignore,
  visitExportDefaultDeclaration: ignore,
  visitConditionalExpression: ignore
};