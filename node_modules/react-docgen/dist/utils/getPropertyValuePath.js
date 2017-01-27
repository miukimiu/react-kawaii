'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPropertyValuePath;

var _getPropertyName = require('./getPropertyName');

var _getPropertyName2 = _interopRequireDefault(_getPropertyName);

var _recast = require('recast');

var _recast2 = _interopRequireDefault(_recast);

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

/**
 * Given an ObjectExpression, this function returns the path of the value of
 * the property with name `propertyName`.
 */

function getPropertyValuePath(path, propertyName) {
  types.ObjectExpression.assert(path.node);

  return path.get('properties').filter(function (propertyPath) {
    return (0, _getPropertyName2.default)(propertyPath) === propertyName;
  }).map(function (propertyPath) {
    return propertyPath.get('value');
  })[0];
}