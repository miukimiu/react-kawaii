'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getParameterName;

var _recast = require('recast');

var _recast2 = _interopRequireDefault(_recast);

var _printValue = require('./printValue');

var _printValue2 = _interopRequireDefault(_printValue);

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

var types = _recast2.default.types.namedTypes;
function getParameterName(parameterPath) {
  switch (parameterPath.node.type) {
    case types.Identifier.name:
      return parameterPath.node.name;
    case types.AssignmentPattern.name:
      return getParameterName(parameterPath.get('left'));
    case types.ObjectPattern.name:
      return (0, _printValue2.default)(parameterPath);
    case types.RestElement.name:
      return '...' + getParameterName(parameterPath.get('argument'));
    default:
      throw new TypeError('Parameter name must be an Identifier, an AssignmentPattern an ' + ('ObjectPattern or a RestElement, got ' + parameterPath.node.type));
  }
}