'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = resolveToValue;

var _recast = require('recast');

var _recast2 = _interopRequireDefault(_recast);

var _getMemberExpressionRoot = require('./getMemberExpressionRoot');

var _getMemberExpressionRoot2 = _interopRequireDefault(_getMemberExpressionRoot);

var _getPropertyValuePath = require('./getPropertyValuePath');

var _getPropertyValuePath2 = _interopRequireDefault(_getPropertyValuePath);

var _expressionTo = require('./expressionTo');

var _traverse = require('./traverse');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _recast$types = _recast2.default.types,
    NodePath = _recast$types.NodePath,
    builders = _recast$types.builders,
    types = _recast$types.namedTypes; /*
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

function buildMemberExpressionFromPattern(path) {
  var node = path.node;
  if (types.Property.check(node)) {
    var objPath = buildMemberExpressionFromPattern(path.parent);
    if (objPath) {
      return new NodePath(builders.memberExpression(objPath.node, node.key, types.Literal.check(node.key)), objPath);
    }
  } else if (types.ObjectPattern.check(node)) {
    return buildMemberExpressionFromPattern(path.parent);
  } else if (types.VariableDeclarator.check(node)) {
    return path.get('init');
  }
  return null;
}

function findScopePath(paths, path) {
  if (paths.length < 1) {
    return;
  }
  var resultPath = paths[0];
  var parentPath = resultPath.parent;

  if (types.ImportDefaultSpecifier.check(parentPath.node) || types.ImportSpecifier.check(parentPath.node) || types.ImportNamespaceSpecifier.check(parentPath.node) || types.VariableDeclarator.check(parentPath.node) || types.TypeAlias.check(parentPath.node)) {
    resultPath = parentPath;
  } else if (types.Property.check(parentPath.node)) {
    // must be inside a pattern
    var memberExpressionPath = buildMemberExpressionFromPattern(parentPath);
    if (memberExpressionPath) {
      return memberExpressionPath;
    }
  }

  if (resultPath.node !== path.node) {
    return resolveToValue(resultPath);
  }
}

/**
 * Tries to find the last value assigned to `name` in the scope created by
 * `scope`. We are not descending into any statements (blocks).
 */
function findLastAssignedValue(scope, name) {
  var results = [];

  (0, _traverse.traverseShallow)(scope.path.node, {
    visitAssignmentExpression: function visitAssignmentExpression(path) {
      var node = path.node;
      // Skip anything that is not an assignment to a variable with the
      // passed name.
      if (!types.Identifier.check(node.left) || node.left.name !== name || node.operator !== '=') {
        return this.traverse(path);
      }
      results.push(path.get('right'));
      return false;
    }
  });

  if (results.length === 0) {
    return null;
  }
  return resolveToValue(results.pop());
}

/**
 * If the path is an identifier, it is resolved in the scope chain.
 * If it is an assignment expression, it resolves to the right hand side.
 * If it is a member expression it is resolved to it's initialization value.
 *
 * Else the path itself is returned.
 */
function resolveToValue(path) {
  var node = path.node;
  if (types.VariableDeclarator.check(node)) {
    if (node.init) {
      return resolveToValue(path.get('init'));
    }
  } else if (types.MemberExpression.check(node)) {
    var resolved = resolveToValue((0, _getMemberExpressionRoot2.default)(path));
    if (types.ObjectExpression.check(resolved.node)) {
      var memberParts = (0, _expressionTo.Array)(path).slice(1);
      var init = memberParts.reduce(function (propertyPath, propertyName) {
        propertyPath = resolveToValue(propertyPath);
        return types.ObjectExpression.check(propertyPath.node) ? (0, _getPropertyValuePath2.default)(propertyPath, propertyName) : null;
      }, resolved);
      return init ? resolveToValue(init) : path;
    }
  } else if (types.ImportDefaultSpecifier.check(node) || types.ImportNamespaceSpecifier.check(node) || types.ImportSpecifier.check(node)) {
    return path.parentPath;
  } else if (types.AssignmentExpression.check(node)) {
    if (node.operator === '=') {
      return resolveToValue(path.get('right'));
    }
  } else if (types.Identifier.check(node)) {
    if ((types.ClassDeclaration.check(path.parentPath.node) || types.ClassExpression.check(path.parentPath.node) || types.Function.check(path.parentPath.node)) && path.parentPath.get('id') === path) {
      return path.parentPath;
    }

    var scope = path.scope.lookup(node.name);
    var resolvedPath = void 0;
    if (scope) {
      // The variable may be assigned a different value after initialization.
      // We are first trying to find all assignments to the variable in the
      // block where it is defined (i.e. we are not traversing into statements)
      resolvedPath = findLastAssignedValue(scope, node.name);
      if (!resolvedPath) {
        var bindings = scope.getBindings()[node.name];
        resolvedPath = findScopePath(bindings, path);
      }
    } else {
      scope = path.scope.lookupType(node.name);
      if (scope) {
        var _types = scope.getTypes()[node.name];
        resolvedPath = findScopePath(_types, path);
      }
    }
    return resolvedPath || path;
  }

  return path;
}