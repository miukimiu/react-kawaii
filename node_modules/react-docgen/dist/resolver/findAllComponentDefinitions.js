'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findAllReactCreateClassCalls;

var _isReactComponentClass = require('../utils/isReactComponentClass');

var _isReactComponentClass2 = _interopRequireDefault(_isReactComponentClass);

var _isReactCreateClassCall = require('../utils/isReactCreateClassCall');

var _isReactCreateClassCall2 = _interopRequireDefault(_isReactCreateClassCall);

var _isStatelessComponent = require('../utils/isStatelessComponent');

var _isStatelessComponent2 = _interopRequireDefault(_isStatelessComponent);

var _normalizeClassDefinition = require('../utils/normalizeClassDefinition');

var _normalizeClassDefinition2 = _interopRequireDefault(_normalizeClassDefinition);

var _resolveToValue = require('../utils/resolveToValue');

var _resolveToValue2 = _interopRequireDefault(_resolveToValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Given an AST, this function tries to find all object expressions that are
 * passed to `React.createClass` calls, by resolving all references properly.
 */
function findAllReactCreateClassCalls(ast, recast) {
  var types = recast.types.namedTypes;
  var definitions = [];

  function classVisitor(path) {
    if ((0, _isReactComponentClass2.default)(path)) {
      (0, _normalizeClassDefinition2.default)(path);
      definitions.push(path);
    }
    return false;
  }

  function statelessVisitor(path) {
    if ((0, _isStatelessComponent2.default)(path)) {
      definitions.push(path);
    }
    return false;
  }

  recast.visit(ast, {
    visitFunctionDeclaration: statelessVisitor,
    visitFunctionExpression: statelessVisitor,
    visitArrowFunctionExpression: statelessVisitor,
    visitClassExpression: classVisitor,
    visitClassDeclaration: classVisitor,
    visitCallExpression: function visitCallExpression(path) {
      if (!(0, _isReactCreateClassCall2.default)(path)) {
        return false;
      }
      var resolvedPath = (0, _resolveToValue2.default)(path.get('arguments', 0));
      if (types.ObjectExpression.check(resolvedPath.node)) {
        definitions.push(resolvedPath);
      }
      return false;
    }
  });

  return definitions;
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