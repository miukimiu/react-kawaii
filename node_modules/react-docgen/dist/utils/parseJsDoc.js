'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseJsDoc;

var _doctrine = require('doctrine');

var _doctrine2 = _interopRequireDefault(_doctrine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getType(tag) {
  if (!tag.type) {
    return null;
  } else if (tag.type.type === 'UnionType') {
    // union type
    return { name: 'union', value: tag.type.elements.map(function (element) {
        return element.name;
      }) };
  } else if (tag.type.type === 'AllLiteral') {
    // return {*}
    return { name: 'mixed' };
  }
  return { name: tag.type.name ? tag.type.name : tag.type.expression.name };
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

function getOptional(tag) {
  if (tag.type && tag.type.type && tag.type.type === 'OptionalType') {
    return true;
  }
  return;
}

// Add jsdoc @return description.
function getReturnsJsDoc(jsDoc) {
  var returnTag = jsDoc.tags.find(function (tag) {
    return tag.title === 'return' || tag.title === 'returns';
  });
  if (returnTag) {
    return {
      description: returnTag.description,
      type: getType(returnTag)
    };
  }
  return null;
}

// Add jsdoc @param descriptions.
function getParamsJsDoc(jsDoc) {
  if (!jsDoc.tags) {
    return [];
  }
  return jsDoc.tags.filter(function (tag) {
    return tag.title === 'param';
  }).map(function (tag) {
    return {
      name: tag.name,
      description: tag.description,
      type: getType(tag),
      optional: getOptional(tag)
    };
  });
}

function parseJsDoc(docblock) {
  var jsDoc = _doctrine2.default.parse(docblock);

  return {
    description: jsDoc.description || null,
    params: getParamsJsDoc(jsDoc),
    returns: getReturnsJsDoc(jsDoc)
  };
}