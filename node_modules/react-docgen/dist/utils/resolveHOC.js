'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = resolveHOC;

var _recast = require('recast');

var _recast2 = _interopRequireDefault(_recast);

var _isReactCreateClassCall = require('./isReactCreateClassCall');

var _isReactCreateClassCall2 = _interopRequireDefault(_isReactCreateClassCall);

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

var _recast$types = _recast2.default.types,
    NodePath = _recast$types.NodePath,
    types = _recast$types.namedTypes;

/**
 * If the path is a call expression, it recursively resolves to the
 * rightmost argument, stopping if it finds a React.createClass call expression
 *
 * Else the path itself is returned.
 */

function resolveHOC(path) {
  var node = path.node;
  if (types.CallExpression.check(node) && !(0, _isReactCreateClassCall2.default)(path)) {
    if (node.arguments.length) {
      return resolveHOC(path.get('arguments', node.arguments.length - 1));
    }
  }

  return path;
}