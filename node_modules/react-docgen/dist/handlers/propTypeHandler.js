'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = propTypeHandler;

var _getPropType = require('../utils/getPropType');

var _getPropType2 = _interopRequireDefault(_getPropType);

var _getPropertyName = require('../utils/getPropertyName');

var _getPropertyName2 = _interopRequireDefault(_getPropertyName);

var _getMemberValuePath = require('../utils/getMemberValuePath');

var _getMemberValuePath2 = _interopRequireDefault(_getMemberValuePath);

var _isReactModuleName = require('../utils/isReactModuleName');

var _isReactModuleName2 = _interopRequireDefault(_isReactModuleName);

var _isRequiredPropType = require('../utils/isRequiredPropType');

var _isRequiredPropType2 = _interopRequireDefault(_isRequiredPropType);

var _printValue = require('../utils/printValue');

var _printValue2 = _interopRequireDefault(_printValue);

var _recast = require('recast');

var _recast2 = _interopRequireDefault(_recast);

var _resolveToModule = require('../utils/resolveToModule');

var _resolveToModule2 = _interopRequireDefault(_resolveToModule);

var _resolveToValue = require('../utils/resolveToValue');

var _resolveToValue2 = _interopRequireDefault(_resolveToValue);

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


function isPropTypesExpression(path) {
  var moduleName = (0, _resolveToModule2.default)(path);
  if (moduleName) {
    return (0, _isReactModuleName2.default)(moduleName) || moduleName === 'ReactPropTypes';
  }
  return false;
}

function amendPropTypes(documentation, path) {
  if (!types.ObjectExpression.check(path.node)) {
    return;
  }

  path.get('properties').each(function (propertyPath) {
    switch (propertyPath.node.type) {
      case types.Property.name:
        var propDescriptor = documentation.getPropDescriptor((0, _getPropertyName2.default)(propertyPath));
        var valuePath = propertyPath.get('value');
        var type = isPropTypesExpression(valuePath) ? (0, _getPropType2.default)(valuePath) : { name: 'custom', raw: (0, _printValue2.default)(valuePath) };

        if (type) {
          propDescriptor.type = type;
          propDescriptor.required = type.name !== 'custom' && (0, _isRequiredPropType2.default)(valuePath);
        }
        break;
      case types.SpreadProperty.name:
        var resolvedValuePath = (0, _resolveToValue2.default)(propertyPath.get('argument'));
        switch (resolvedValuePath.node.type) {
          case types.ObjectExpression.name:
            // normal object literal
            amendPropTypes(documentation, resolvedValuePath);
            break;
        }
        break;
    }
  });
}

function propTypeHandler(documentation, path) {
  var propTypesPath = (0, _getMemberValuePath2.default)(path, 'propTypes');
  if (!propTypesPath) {
    return;
  }
  propTypesPath = (0, _resolveToValue2.default)(propTypesPath);
  if (!propTypesPath) {
    return;
  }
  amendPropTypes(documentation, propTypesPath);
}