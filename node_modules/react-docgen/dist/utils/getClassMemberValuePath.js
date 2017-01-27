'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClassMemberValuePath;

var _getNameOrValue = require('./getNameOrValue');

var _getNameOrValue2 = _interopRequireDefault(_getNameOrValue);

var _recast = require('recast');

var _recast2 = _interopRequireDefault(_recast);

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
function getClassMemberValuePath(classDefinition, memberName) {
  // Fortunately it seems like that all members of a class body, be it
  // ClassProperty or MethodDefinition, have the same structure: They have a
  // "key" and a "value"
  return classDefinition.get('body', 'body').filter(function (memberPath) {
    return (!memberPath.node.computed || types.Literal.check(memberPath.node.key)) && (0, _getNameOrValue2.default)(memberPath.get('key')) === memberName && memberPath.node.kind !== 'set';
  }).map(function (memberPath) {
    return memberPath.get('value');
  })[0];
}