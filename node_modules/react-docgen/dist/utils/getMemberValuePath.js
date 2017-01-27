'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _LOOKUP_METHOD; /*
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

exports.default = getMemberValuePath;

var _getMemberExpressionValuePath = require('./getMemberExpressionValuePath');

var _getMemberExpressionValuePath2 = _interopRequireDefault(_getMemberExpressionValuePath);

var _getClassMemberValuePath = require('./getClassMemberValuePath');

var _getClassMemberValuePath2 = _interopRequireDefault(_getClassMemberValuePath);

var _getPropertyValuePath = require('./getPropertyValuePath');

var _getPropertyValuePath2 = _interopRequireDefault(_getPropertyValuePath);

var _recast = require('recast');

var _recast2 = _interopRequireDefault(_recast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var types = _recast2.default.types.namedTypes;


var SYNONYMS = {
  getDefaultProps: 'defaultProps',
  defaultProps: 'getDefaultProps'
};

var LOOKUP_METHOD = (_LOOKUP_METHOD = {}, (0, _defineProperty3.default)(_LOOKUP_METHOD, types.ArrowFunctionExpression.name, _getMemberExpressionValuePath2.default), (0, _defineProperty3.default)(_LOOKUP_METHOD, types.FunctionExpression.name, _getMemberExpressionValuePath2.default), (0, _defineProperty3.default)(_LOOKUP_METHOD, types.FunctionDeclaration.name, _getMemberExpressionValuePath2.default), (0, _defineProperty3.default)(_LOOKUP_METHOD, types.VariableDeclaration.name, _getMemberExpressionValuePath2.default), (0, _defineProperty3.default)(_LOOKUP_METHOD, types.ObjectExpression.name, _getPropertyValuePath2.default), (0, _defineProperty3.default)(_LOOKUP_METHOD, types.ClassDeclaration.name, _getClassMemberValuePath2.default), (0, _defineProperty3.default)(_LOOKUP_METHOD, types.ClassExpression.name, _getClassMemberValuePath2.default), _LOOKUP_METHOD);

function isSupportedDefinitionType(_ref) {
  var node = _ref.node;

  return types.ObjectExpression.check(node) || types.ClassDeclaration.check(node) || types.ClassExpression.check(node) ||

  // potential stateless function component
  types.VariableDeclaration.check(node) || types.ArrowFunctionExpression.check(node) || types.FunctionDeclaration.check(node) || types.FunctionExpression.check(node);
}

/**
 * This is a helper method for handlers to make it easier to work either with
 * an ObjectExpression from `React.createClass` class or with a class
 * definition.
 *
 * Given a path and a name, this function will either return the path of the
 * property value if the path is an ObjectExpression, or the value of the
 * ClassProperty/MethodDefinition if it is a class definition (declaration or
 * expression).
 *
 * It also normalizes the names so that e.g. `defaultProps` and
 * `getDefaultProps` can be used interchangeably.
 */
function getMemberValuePath(componentDefinition, memberName) {
  if (!isSupportedDefinitionType(componentDefinition)) {
    throw new TypeError('Got unsupported definition type. Definition must be one of ' + 'ObjectExpression, ClassDeclaration, ClassExpression,' + 'VariableDeclaration, ArrowFunctionExpression, FunctionExpression, or ' + 'FunctionDeclaration. Got "' + componentDefinition.node.type + '"' + 'instead.');
  }

  var lookupMethod = LOOKUP_METHOD[componentDefinition.node.type];
  var result = lookupMethod(componentDefinition, memberName);
  if (!result && SYNONYMS[memberName]) {
    return lookupMethod(componentDefinition, SYNONYMS[memberName]);
  }
  return result;
}