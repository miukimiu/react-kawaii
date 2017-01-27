'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = componentDocblockHandler;

var _recast = require('recast');

var _recast2 = _interopRequireDefault(_recast);

var _docblock = require('../utils/docblock');

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

function isClassDefinition(nodePath) {
  var node = nodePath.node;
  return types.ClassDeclaration.check(node) || types.ClassExpression.check(node);
}

/**
 * Finds the nearest block comment before the component definition.
 */
function componentDocblockHandler(documentation, path) {
  var description = null;
  // Find parent statement (e.g. var Component = React.createClass(<path>);)
  var searchPath = path;
  while (searchPath && !types.Statement.check(searchPath.node)) {
    searchPath = searchPath.parent;
  }
  if (searchPath) {
    // If the parent is an export statement, we have to traverse one more up
    if (types.ExportNamedDeclaration.check(searchPath.parentPath.node) || types.ExportDefaultDeclaration.check(searchPath.parentPath.node)) {
      searchPath = searchPath.parentPath;
    }
    description = (0, _docblock.getDocblock)(searchPath);
  }
  if (description == null && isClassDefinition(path)) {
    // If we have a class declaration or expression, then the comment might be
    // attached to the first decorator instead.
    if (path.node.decorators && path.node.decorators.length > 0) {
      description = (0, _docblock.getDocblock)(path.get('decorators', 0));
    }
  }
  if (description == null) {
    // If this is the first statement in the module body, the comment is attached
    // to the program node
    var programPath = searchPath;
    while (programPath && !types.Program.check(programPath.node)) {
      programPath = programPath.parent;
    }
    if (programPath.get('body', 0) === searchPath) {
      description = (0, _docblock.getDocblock)(programPath);
    }
  }
  documentation.set('description', description || '');
}