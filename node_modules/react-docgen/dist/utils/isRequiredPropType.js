'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isRequiredPropType;

var _getMembers = require('../utils/getMembers');

var _getMembers2 = _interopRequireDefault(_getMembers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns true of the prop is required, according to its type defintion
 */
function isRequiredPropType(path) {
  return (0, _getMembers2.default)(path).some(function (member) {
    return !member.computed && member.path.node.name === 'isRequired' || member.computed && member.path.node.value === 'isRequired';
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
   */