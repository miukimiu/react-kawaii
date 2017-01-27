'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = propTypeCompositionHandler;

var _getMemberValuePath = require('../utils/getMemberValuePath');

var _getMemberValuePath2 = _interopRequireDefault(_getMemberValuePath);

var _recast = require('recast');

var _recast2 = _interopRequireDefault(_recast);

var _resolveToModule = require('../utils/resolveToModule');

var _resolveToModule2 = _interopRequireDefault(_resolveToModule);

var _resolveToValue = require('../utils/resolveToValue');

var _resolveToValue2 = _interopRequireDefault(_resolveToValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var types = _recast2.default.types.namedTypes;

/**
 * It resolves the path to its module name and adds it to the "composes" entry
 * in the documentation.
 */
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

function amendComposes(documentation, path) {
  var moduleName = (0, _resolveToModule2.default)(path);
  if (moduleName) {
    documentation.addComposes(moduleName);
  }
}

function processObjectExpression(documentation, path) {
  path.get('properties').each(function (propertyPath) {
    switch (propertyPath.node.type) {
      case types.SpreadProperty.name:
        var resolvedValuePath = (0, _resolveToValue2.default)(propertyPath.get('argument'));
        amendComposes(documentation, resolvedValuePath);
        break;
    }
  });
}

function propTypeCompositionHandler(documentation, path) {
  var propTypesPath = (0, _getMemberValuePath2.default)(path, 'propTypes');
  if (!propTypesPath) {
    return;
  }
  propTypesPath = (0, _resolveToValue2.default)(propTypesPath);
  if (!propTypesPath) {
    return;
  }

  switch (propTypesPath.node.type) {
    case types.ObjectExpression.name:
      processObjectExpression(documentation, propTypesPath);
      break;
    default:
      amendComposes(documentation, propTypesPath);
      break;
  }
}