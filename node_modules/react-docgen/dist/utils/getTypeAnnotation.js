'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getTypeAnnotation;

var _recast = require('recast');

var _recast2 = _interopRequireDefault(_recast);

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

function hasTypeAnnotation(path) {
  return !!path.node.typeAnnotation;
}

/**
 * Gets the most inner valuable TypeAnnotation from path. If no TypeAnnotation
 * can be found nothing is returned
 */
function getTypeAnnotation(path) {
  if (!hasTypeAnnotation(path)) return null;

  var resultPath = path;
  do {
    resultPath = resultPath.get('typeAnnotation');
  } while (hasTypeAnnotation(resultPath) && !types.Type.check(resultPath.node));

  return resultPath;
}