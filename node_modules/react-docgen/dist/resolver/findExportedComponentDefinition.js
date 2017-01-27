'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findExportedComponentDefinition;

var _isExportsOrModuleAssignment = require('../utils/isExportsOrModuleAssignment');

var _isExportsOrModuleAssignment2 = _interopRequireDefault(_isExportsOrModuleAssignment);

var _isReactComponentClass = require('../utils/isReactComponentClass');

var _isReactComponentClass2 = _interopRequireDefault(_isReactComponentClass);

var _isReactCreateClassCall = require('../utils/isReactCreateClassCall');

var _isReactCreateClassCall2 = _interopRequireDefault(_isReactCreateClassCall);

var _isStatelessComponent = require('../utils/isStatelessComponent');

var _isStatelessComponent2 = _interopRequireDefault(_isStatelessComponent);

var _normalizeClassDefinition = require('../utils/normalizeClassDefinition');

var _normalizeClassDefinition2 = _interopRequireDefault(_normalizeClassDefinition);

var _resolveExportDeclaration = require('../utils/resolveExportDeclaration');

var _resolveExportDeclaration2 = _interopRequireDefault(_resolveExportDeclaration);

var _resolveToValue = require('../utils/resolveToValue');

var _resolveToValue2 = _interopRequireDefault(_resolveToValue);

var _resolveHOC = require('../utils/resolveHOC');

var _resolveHOC2 = _interopRequireDefault(_resolveHOC);

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

var ERROR_MULTIPLE_DEFINITIONS = 'Multiple exported component definitions found.';

function ignore() {
  return false;
}

function isComponentDefinition(path) {
  return (0, _isReactCreateClassCall2.default)(path) || (0, _isReactComponentClass2.default)(path) || (0, _isStatelessComponent2.default)(path);
}

function resolveDefinition(definition, types) {
  if ((0, _isReactCreateClassCall2.default)(definition)) {
    // return argument
    var resolvedPath = (0, _resolveToValue2.default)(definition.get('arguments', 0));
    if (types.ObjectExpression.check(resolvedPath.node)) {
      return resolvedPath;
    }
  } else if ((0, _isReactComponentClass2.default)(definition)) {
    (0, _normalizeClassDefinition2.default)(definition);
    return definition;
  } else if ((0, _isStatelessComponent2.default)(definition)) {
    return definition;
  }
  return null;
}

/**
 * Given an AST, this function tries to find the exported component definition.
 *
 * The component definition is either the ObjectExpression passed to
 * `React.createClass` or a `class` definition extending `React.Component` or
 * having a `render()` method.
 *
 * If a definition is part of the following statements, it is considered to be
 * exported:
 *
 * modules.exports = Definition;
 * exports.foo = Definition;
 * export default Definition;
 * export var Definition = ...;
 */
function findExportedComponentDefinition(ast, recast) {
  var types = recast.types.namedTypes;
  var definition;

  function exportDeclaration(path) {
    var definitions = (0, _resolveExportDeclaration2.default)(path, types).reduce(function (acc, definition) {
      if (isComponentDefinition(definition)) {
        acc.push(definition);
      } else {
        var resolved = (0, _resolveToValue2.default)((0, _resolveHOC2.default)(definition));
        if (isComponentDefinition(resolved)) {
          acc.push(resolved);
        }
      }
      return acc;
    }, []);

    if (definitions.length === 0) {
      return false;
    }
    if (definitions.length > 1 || definition) {
      // If a file exports multiple components, ... complain!
      throw new Error(ERROR_MULTIPLE_DEFINITIONS);
    }
    definition = resolveDefinition(definitions[0], types);
    return false;
  }

  recast.visit(ast, {
    visitFunctionDeclaration: ignore,
    visitFunctionExpression: ignore,
    visitClassDeclaration: ignore,
    visitClassExpression: ignore,
    visitIfStatement: ignore,
    visitWithStatement: ignore,
    visitSwitchStatement: ignore,
    visitCatchCause: ignore,
    visitWhileStatement: ignore,
    visitDoWhileStatement: ignore,
    visitForStatement: ignore,
    visitForInStatement: ignore,

    visitExportDeclaration: exportDeclaration,
    visitExportNamedDeclaration: exportDeclaration,
    visitExportDefaultDeclaration: exportDeclaration,

    visitAssignmentExpression: function visitAssignmentExpression(path) {
      // Ignore anything that is not `exports.X = ...;` or
      // `module.exports = ...;`
      if (!(0, _isExportsOrModuleAssignment2.default)(path)) {
        return false;
      }
      // Resolve the value of the right hand side. It should resolve to a call
      // expression, something like React.createClass
      path = (0, _resolveToValue2.default)(path.get('right'));
      if (!isComponentDefinition(path)) {
        path = (0, _resolveToValue2.default)((0, _resolveHOC2.default)(path));
        if (!isComponentDefinition(path)) {
          return false;
        }
      }
      if (definition) {
        // If a file exports multiple components, ... complain!
        throw new Error(ERROR_MULTIPLE_DEFINITIONS);
      }
      definition = resolveDefinition(path, types);
      return false;
    }
  });

  return definition;
}