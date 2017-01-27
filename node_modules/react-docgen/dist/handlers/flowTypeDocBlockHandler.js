'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flowTypeDocBlockHandler;

var _setPropDescription = require('../utils/setPropDescription');

var _setPropDescription2 = _interopRequireDefault(_setPropDescription);

var _getFlowTypeFromReactComponent = require('../utils/getFlowTypeFromReactComponent');

var _getFlowTypeFromReactComponent2 = _interopRequireDefault(_getFlowTypeFromReactComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This handler tries to find flow Type annotated react components and extract
 * its types to the documentation. It also extracts docblock comments which are
 * inlined in the type definition.
 */
function flowTypeDocBlockHandler(documentation, path) {
  var flowTypesPath = (0, _getFlowTypeFromReactComponent2.default)(path);

  if (!flowTypesPath) {
    return;
  }

  (0, _getFlowTypeFromReactComponent.applyToFlowTypeProperties)(flowTypesPath, function (propertyPath) {
    return (0, _setPropDescription2.default)(documentation, propertyPath);
  });
} /*
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