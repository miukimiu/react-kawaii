'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = componentMethodsHandler;

var _recast = require('recast');

var _recast2 = _interopRequireDefault(_recast);

var _getMemberValuePath = require('../utils/getMemberValuePath');

var _getMemberValuePath2 = _interopRequireDefault(_getMemberValuePath);

var _getMethodDocumentation = require('../utils/getMethodDocumentation');

var _getMethodDocumentation2 = _interopRequireDefault(_getMethodDocumentation);

var _isReactComponentClass = require('../utils/isReactComponentClass');

var _isReactComponentClass2 = _interopRequireDefault(_isReactComponentClass);

var _isReactComponentMethod = require('../utils/isReactComponentMethod');

var _isReactComponentMethod2 = _interopRequireDefault(_isReactComponentMethod);

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

function getMethodsDoc(methodPaths) {
  var methods = [];

  methodPaths.forEach(function (methodPath) {
    if ((0, _isReactComponentMethod2.default)(methodPath)) {
      return;
    }

    methods.push((0, _getMethodDocumentation2.default)(methodPath));
  });

  return methods;
}

function isFunctionExpression(path) {
  return types.FunctionExpression.check(path.get('value').node);
}

/**
 * Extract all flow types for the methods of a react component. Doesn't
 * return any react specific lifecycle methods.
 */
function componentMethodsHandler(documentation, path) {
  // Extract all methods from the class or object.
  var methodPaths = [];
  if ((0, _isReactComponentClass2.default)(path)) {
    methodPaths = path.get('body', 'body').filter(function (p) {
      return types.MethodDefinition.check(p.node) && p.node.kind !== 'constructor';
    });
  } else if (types.ObjectExpression.check(path.node)) {
    methodPaths = path.get('properties').filter(isFunctionExpression);

    // Add the statics object properties.
    var statics = (0, _getMemberValuePath2.default)(path, 'statics');
    if (statics) {
      statics.get('properties').each(function (p) {
        if (isFunctionExpression(p)) {
          p.node.static = true;
          methodPaths.push(p);
        }
      });
    }
  }

  var methods = getMethodsDoc(methodPaths);
  documentation.set('methods', methods);
}