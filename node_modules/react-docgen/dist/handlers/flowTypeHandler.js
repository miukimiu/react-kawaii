'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flowTypeHandler;

var _getFlowType = require('../utils/getFlowType');

var _getFlowType2 = _interopRequireDefault(_getFlowType);

var _getPropertyName = require('../utils/getPropertyName');

var _getPropertyName2 = _interopRequireDefault(_getPropertyName);

var _getFlowTypeFromReactComponent = require('../utils/getFlowTypeFromReactComponent');

var _getFlowTypeFromReactComponent2 = _interopRequireDefault(_getFlowTypeFromReactComponent);

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

function setPropDescriptor(documentation, path) {
  var propDescriptor = documentation.getPropDescriptor((0, _getPropertyName2.default)(path));
  var type = (0, _getFlowType2.default)(path.get('value'));
  if (type) {
    propDescriptor.flowType = type;
    propDescriptor.required = !path.node.optional;
  }
}

/**
 * This handler tries to find flow Type annotated react components and extract
 * its types to the documentation. It also extracts docblock comments which are
 * inlined in the type definition.
 */
function flowTypeHandler(documentation, path) {
  var flowTypesPath = (0, _getFlowTypeFromReactComponent2.default)(path);

  if (!flowTypesPath) {
    return;
  }

  (0, _getFlowTypeFromReactComponent.applyToFlowTypeProperties)(flowTypesPath, function (propertyPath) {
    setPropDescriptor(documentation, propertyPath);
  });
}