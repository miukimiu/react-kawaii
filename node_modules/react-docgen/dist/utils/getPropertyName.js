'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPropertyName;

var _getNameOrValue = require('./getNameOrValue');

var _getNameOrValue2 = _interopRequireDefault(_getNameOrValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * In an ObjectExpression, the name of a property can either be an identifier
 * or a literal (or dynamic, but we don't support those). This function simply
 * returns the value of the literal or name of the identifier.
 */
function getPropertyName(propertyPath) {
  if (propertyPath.node.computed) {
    throw new TypeError('Propery name must be an Identifier or a Literal');
  }

  return (0, _getNameOrValue2.default)(propertyPath.get('key'), false);
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