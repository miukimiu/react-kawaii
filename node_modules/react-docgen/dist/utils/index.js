'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveToValue = exports.resolveToModule = exports.resolveExportDeclaration = exports.printValue = exports.normalizeClassDefiniton = exports.normalizeClassDefinition = exports.match = exports.isStatelessComponent = exports.isReactModuleName = exports.isReactCreateClassCall = exports.isReactComponentMethod = exports.isReactComponentClass = exports.isExportsOrModuleAssignment = exports.getTypeAnnotation = exports.getPropType = exports.getPropertyValuePath = exports.getPropertyName = exports.getParameterName = exports.getNameOrValue = exports.getMethodDocumentation = exports.getMemberValuePath = exports.getMembers = exports.getMemberExpressionRoot = exports.getFlowTypeFromReactComponent = exports.getFlowType = exports.getClassMemberValuePath = exports.docblock = undefined;

var _getClassMemberValuePath = require('./getClassMemberValuePath');

Object.defineProperty(exports, 'getClassMemberValuePath', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getClassMemberValuePath).default;
  }
});

var _getFlowType = require('./getFlowType');

Object.defineProperty(exports, 'getFlowType', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getFlowType).default;
  }
});

var _getFlowTypeFromReactComponent = require('./getFlowTypeFromReactComponent');

Object.defineProperty(exports, 'getFlowTypeFromReactComponent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getFlowTypeFromReactComponent).default;
  }
});

var _getMemberExpressionRoot = require('./getMemberExpressionRoot');

Object.defineProperty(exports, 'getMemberExpressionRoot', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getMemberExpressionRoot).default;
  }
});

var _getMembers = require('./getMembers');

Object.defineProperty(exports, 'getMembers', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getMembers).default;
  }
});

var _getMemberValuePath = require('./getMemberValuePath');

Object.defineProperty(exports, 'getMemberValuePath', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getMemberValuePath).default;
  }
});

var _getMethodDocumentation = require('./getMethodDocumentation');

Object.defineProperty(exports, 'getMethodDocumentation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getMethodDocumentation).default;
  }
});

var _getNameOrValue = require('./getNameOrValue');

Object.defineProperty(exports, 'getNameOrValue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getNameOrValue).default;
  }
});

var _getParameterName = require('./getParameterName');

Object.defineProperty(exports, 'getParameterName', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getParameterName).default;
  }
});

var _getPropertyName = require('./getPropertyName');

Object.defineProperty(exports, 'getPropertyName', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getPropertyName).default;
  }
});

var _getPropertyValuePath = require('./getPropertyValuePath');

Object.defineProperty(exports, 'getPropertyValuePath', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getPropertyValuePath).default;
  }
});

var _getPropType = require('./getPropType');

Object.defineProperty(exports, 'getPropType', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getPropType).default;
  }
});

var _getTypeAnnotation = require('./getTypeAnnotation');

Object.defineProperty(exports, 'getTypeAnnotation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getTypeAnnotation).default;
  }
});

var _isExportsOrModuleAssignment = require('./isExportsOrModuleAssignment');

Object.defineProperty(exports, 'isExportsOrModuleAssignment', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isExportsOrModuleAssignment).default;
  }
});

var _isReactComponentClass = require('./isReactComponentClass');

Object.defineProperty(exports, 'isReactComponentClass', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isReactComponentClass).default;
  }
});

var _isReactComponentMethod = require('./isReactComponentMethod');

Object.defineProperty(exports, 'isReactComponentMethod', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isReactComponentMethod).default;
  }
});

var _isReactCreateClassCall = require('./isReactCreateClassCall');

Object.defineProperty(exports, 'isReactCreateClassCall', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isReactCreateClassCall).default;
  }
});

var _isReactModuleName = require('./isReactModuleName');

Object.defineProperty(exports, 'isReactModuleName', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isReactModuleName).default;
  }
});

var _isStatelessComponent = require('./isStatelessComponent');

Object.defineProperty(exports, 'isStatelessComponent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isStatelessComponent).default;
  }
});

var _match = require('./match');

Object.defineProperty(exports, 'match', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_match).default;
  }
});

var _normalizeClassDefinition = require('./normalizeClassDefinition');

Object.defineProperty(exports, 'normalizeClassDefinition', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_normalizeClassDefinition).default;
  }
});
Object.defineProperty(exports, 'normalizeClassDefiniton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_normalizeClassDefinition).default;
  }
});

var _printValue = require('./printValue');

Object.defineProperty(exports, 'printValue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_printValue).default;
  }
});

var _resolveExportDeclaration = require('./resolveExportDeclaration');

Object.defineProperty(exports, 'resolveExportDeclaration', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_resolveExportDeclaration).default;
  }
});

var _resolveToModule = require('./resolveToModule');

Object.defineProperty(exports, 'resolveToModule', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_resolveToModule).default;
  }
});

var _resolveToValue = require('./resolveToValue');

Object.defineProperty(exports, 'resolveToValue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_resolveToValue).default;
  }
});

var _docblock = require('./docblock');

var docblock = _interopRequireWildcard(_docblock);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.docblock = docblock; /*
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