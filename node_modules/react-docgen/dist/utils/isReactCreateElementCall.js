'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isReactCreateElementCall;

var _isReactModuleName = require('./isReactModuleName');

var _isReactModuleName2 = _interopRequireDefault(_isReactModuleName);

var _match = require('./match');

var _match2 = _interopRequireDefault(_match);

var _recast = require('recast');

var _recast2 = _interopRequireDefault(_recast);

var _resolveToModule = require('./resolveToModule');

var _resolveToModule2 = _interopRequireDefault(_resolveToModule);

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

var types = _recast2.default.types.namedTypes;

/**
 * Returns true if the expression is a function call of the form
 * `React.createElement(...)`.
 */

function isReactCreateElementCall(path) {
  if (types.ExpressionStatement.check(path.node)) {
    path = path.get('expression');
  }

  if (!(0, _match2.default)(path.node, { callee: { property: { name: 'createElement' } } })) {
    return false;
  }
  var module = (0, _resolveToModule2.default)(path.get('callee', 'object'));
  return Boolean(module && (0, _isReactModuleName2.default)(module));
}