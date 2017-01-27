'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMembers;

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

/*eslint no-labels: 0*/

/**
 * Helper methods for dealing with MemberExpressions (and CallExpressions).
 */

var types = _recast2.default.types.namedTypes;

/**
 * Given a "nested" Member/CallExpression, e.g.
 *
 * foo.bar()[baz][42]
 *
 * this returns a list of "members". In this example it would be something like
 * [
 *   {path: NodePath<bar>, arguments: NodePath<empty>, computed: false},
 *   {path: NodePath<baz>, arguments: null, computed: true},
 *   {path: NodePath<42>, arguments: null, computed: false}
 * ]
 */

function getMembers(path) {
  var includeRoot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var result = [];
  var argumentsPath = null;
  loop: while (true) {
    // eslint-disable-line no-constant-condition
    switch (true) {
      case types.MemberExpression.check(path.node):
        result.push({
          path: path.get('property'),
          computed: path.node.computed,
          argumentsPath: argumentsPath
        });
        argumentsPath = null;
        path = path.get('object');
        break;
      case types.CallExpression.check(path.node):
        argumentsPath = path.get('arguments');
        path = path.get('callee');
        break;
      default:
        break loop;
    }
  }
  if (includeRoot && result.length > 0) {
    result.push({
      path: path,
      computed: false,
      argumentsPath: argumentsPath
    });
  }
  return result.reverse();
}