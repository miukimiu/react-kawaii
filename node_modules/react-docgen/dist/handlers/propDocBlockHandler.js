'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = propDocBlockHandler;

var _getMemberValuePath = require('../utils/getMemberValuePath');

var _getMemberValuePath2 = _interopRequireDefault(_getMemberValuePath);

var _recast = require('recast');

var _recast2 = _interopRequireDefault(_recast);

var _resolveToValue = require('../utils/resolveToValue');

var _resolveToValue2 = _interopRequireDefault(_resolveToValue);

var _setPropDescription = require('../utils/setPropDescription');

var _setPropDescription2 = _interopRequireDefault(_setPropDescription);

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

function propDocBlockHandler(documentation, path) {
  var propTypesPath = (0, _getMemberValuePath2.default)(path, 'propTypes');
  if (!propTypesPath) {
    return;
  }
  propTypesPath = (0, _resolveToValue2.default)(propTypesPath);
  if (!propTypesPath || !types.ObjectExpression.check(propTypesPath.node)) {
    return;
  }

  propTypesPath.get('properties').each(function (propertyPath) {
    // we only support documentation of actual properties, not spread
    if (types.Property.check(propertyPath.node)) {
      (0, _setPropDescription2.default)(documentation, propertyPath);
    }
  });
}