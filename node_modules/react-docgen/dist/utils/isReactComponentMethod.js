'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (methodPath) {
  if (!types.MethodDefinition.check(methodPath.node) && !types.Property.check(methodPath.node)) {
    return false;
  }

  var name = (0, _getPropertyName2.default)(methodPath);
  return componentMethods.indexOf(name) !== -1;
};

var _recast = require('recast');

var _recast2 = _interopRequireDefault(_recast);

var _getPropertyName = require('./getPropertyName');

var _getPropertyName2 = _interopRequireDefault(_getPropertyName);

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
 */

var types = _recast2.default.types.namedTypes;


var componentMethods = ['componentDidMount', 'componentDidReceiveProps', 'componentDidUpdate', 'componentWillMount', 'componentWillReceiveProps', 'componentWillUnmount', 'componentWillUpdate', 'getChildContext', 'getDefaultProps', 'getInitialState', 'render', 'shouldComponentUpdate'];

/**
 * Returns if the method path is a Component method.
 */