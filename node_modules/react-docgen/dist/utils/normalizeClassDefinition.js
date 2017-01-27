'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

exports.default = normalizeClassDefinition;

var _getMemberExpressionRoot = require('../utils/getMemberExpressionRoot');

var _getMemberExpressionRoot2 = _interopRequireDefault(_getMemberExpressionRoot);

var _getMembers3 = require('../utils/getMembers');

var _getMembers4 = _interopRequireDefault(_getMembers3);

var _recast = require('recast');

var _recast2 = _interopRequireDefault(_recast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _recast$types = _recast2.default.types,
    types = _recast$types.namedTypes,
    builders = _recast$types.builders; /*
                                        * Copyright (c) 2015, Facebook, Inc.
                                        * All rights reserved.
                                        *
                                        * This source code is licensed under the BSD-style license found in the
                                        * LICENSE file in the root directory of this source tree. An additional grant
                                        * of patent rights can be found in the PATENTS file in the same directory.
                                        *
                                        * 
                                        */

var ignore = function ignore() {
  return false;
};

/**
 * Given a class definition (i.e. `class` declaration or expression), this
 * function "normalizes" the definition, by looking for assignments of static
 * properties and converting them to ClassProperties.
 *
 * Example:
 *
 * class MyComponent extends React.Component {
 *   // ...
 * }
 * MyComponent.propTypes = { ... };
 *
 * is converted to
 *
 * class MyComponent extends React.Component {
 *   // ...
 *   static propTypes = { ... };
 * }
 */
function normalizeClassDefinition(classDefinition) {
  var variableName;
  if (types.ClassDeclaration.check(classDefinition.node)) {
    variableName = classDefinition.node.id.name;
  } else if (types.ClassExpression.check(classDefinition.node)) {
    var parentPath = classDefinition.parentPath;

    while (parentPath.node !== classDefinition.scope.node && !types.BlockStatement.check(parentPath.node)) {
      if (types.VariableDeclarator.check(parentPath.node) && types.Identifier.check(parentPath.node.id)) {
        variableName = parentPath.node.id.name;
        break;
      } else if (types.AssignmentExpression.check(parentPath.node) && types.Identifier.check(parentPath.node.left)) {
        variableName = parentPath.node.left.name;
        break;
      }
      parentPath = parentPath.parentPath;
    }
  }

  if (!variableName) {
    return;
  }

  var scopeRoot = classDefinition.scope;
  _recast2.default.visit(scopeRoot.node, {
    visitFunction: ignore,
    visitClassDeclaration: ignore,
    visitClassExpression: ignore,
    visitForInStatement: ignore,
    visitForStatement: ignore,
    visitAssignmentExpression: function visitAssignmentExpression(path) {
      if (types.MemberExpression.check(path.node.left)) {
        var first = (0, _getMemberExpressionRoot2.default)(path.get('left'));
        if (types.Identifier.check(first.node) && first.node.name === variableName) {
          var _getMembers = (0, _getMembers4.default)(path.get('left')),
              _getMembers2 = (0, _slicedToArray3.default)(_getMembers, 1),
              member = _getMembers2[0];

          if (member && !member.path.node.computed) {
            var classProperty = builders.classProperty(member.path.node, path.node.right, null, true);
            classDefinition.get('body', 'body').value.push(classProperty);
            return false;
          }
        }
        this.traverse(path);
      } else {
        return false;
      }
    }
  });
}