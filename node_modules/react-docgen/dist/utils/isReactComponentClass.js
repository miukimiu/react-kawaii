'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isReactComponentClass;

var _isReactModuleName = require('./isReactModuleName');

var _isReactModuleName2 = _interopRequireDefault(_isReactModuleName);

var _match = require('./match');

var _match2 = _interopRequireDefault(_match);

var _recast = require('recast');

var _recast2 = _interopRequireDefault(_recast);

var _resolveToModule = require('./resolveToModule');

var _resolveToModule2 = _interopRequireDefault(_resolveToModule);

var _resolveToValue = require('./resolveToValue');

var _resolveToValue2 = _interopRequireDefault(_resolveToValue);

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
                                                */

function isRenderMethod(node) {
  return types.MethodDefinition.check(node) && !node.computed && !node.static && (node.kind === '' || node.kind === 'method') && node.key.name === 'render';
}

/**
 * Returns `true` of the path represents a class definition which either extends
 * `React.Component` or implements a `render()` method.
 */
function isReactComponentClass(path) {
  var node = path.node;
  if (!types.ClassDeclaration.check(node) && !types.ClassExpression.check(node)) {
    return false;
  }

  // render method
  if (node.body.body.some(isRenderMethod)) {
    return true;
  }

  // extends ReactComponent?
  if (!node.superClass) {
    return false;
  }
  var superClass = (0, _resolveToValue2.default)(path.get('superClass'));
  if (!(0, _match2.default)(superClass.node, { property: { name: 'Component' } })) {
    return false;
  }
  var module = (0, _resolveToModule2.default)(superClass);
  return !!module && (0, _isReactModuleName2.default)(module);
}