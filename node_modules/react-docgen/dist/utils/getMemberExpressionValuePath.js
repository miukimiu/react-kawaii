'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMemberExpressionValuePath;

var _getNameOrValue = require('./getNameOrValue');

var _getNameOrValue2 = _interopRequireDefault(_getNameOrValue);

var _expressionTo = require('./expressionTo');

var _recast = require('recast');

var _recast2 = _interopRequireDefault(_recast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var types = _recast2.default.types.namedTypes; /*
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

function resolveName(path) {
  if (types.VariableDeclaration.check(path.node)) {
    var declarations = path.get('declarations');
    if (declarations.value.length && declarations.value.length !== 1) {
      throw new TypeError('Got unsupported VariableDeclaration. VariableDeclaration must only ' + 'have a single VariableDeclarator. Got ' + declarations.value.length + ' declarations.');
    }
    var value = declarations.get(0, 'id', 'name').value;
    return value;
  }

  if (types.FunctionDeclaration.check(path.node)) {
    return path.get('id', 'name').value;
  }

  if (types.FunctionExpression.check(path.node) || types.ArrowFunctionExpression.check(path.node)) {
    if (!types.VariableDeclarator.check(path.parent.node)) {
      return; // eslint-disable-line consistent-return
    }

    return path.parent.get('id', 'name').value;
  }

  throw new TypeError('Attempted to resolveName for an unsupported path. resolveName accepts a ' + 'VariableDeclaration, FunctionDeclaration, or FunctionExpression. Got "' + path.node.type + '".');
}

function getRoot(node) {
  var root = node.parent;
  while (root.parent) {
    root = root.parent;
  }
  return root;
}

function getMemberExpressionValuePath(variableDefinition, memberName) {
  var localName = resolveName(variableDefinition);
  var program = getRoot(variableDefinition);

  if (!localName) {
    // likely an immediately exported and therefore nameless/anonymous node
    // passed in
    return;
  }

  var result;
  _recast2.default.visit(program, {
    visitAssignmentExpression: function visitAssignmentExpression(path) {
      var memberPath = path.get('left');
      if (!types.MemberExpression.check(memberPath.node)) {
        return this.traverse(path);
      }

      if ((!memberPath.node.computed || types.Literal.check(memberPath.node.property)) && (0, _getNameOrValue2.default)(memberPath.get('property')) === memberName && (0, _expressionTo.String)(memberPath.get('object')) === localName) {
        result = path.get('right');
        return false;
      }

      this.traverse(memberPath);
    }
  });

  return result; // eslint-disable-line consistent-return
}