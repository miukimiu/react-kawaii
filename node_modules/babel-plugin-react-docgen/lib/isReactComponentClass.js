'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isReactComponentClass;

var _babelTypes = require('babel-types');

var types = _interopRequireWildcard(_babelTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function isRenderMethod(node) {
  return types.isClassMethod(node) && !node.computed && !node.static && (node.kind === '' || node.kind === 'method') && node.key.name === 'render';
}

function isReactComponentClass(path) {
  var node = path.node;
  if (!types.isClassDeclaration(node) && !types.isClassExpression(node)) {
    return false;
  }

  // render method
  if (node.body.body.some(isRenderMethod)) {
    return true;
  }

  // extends ReactComponent?
  if (!node.superClass) {
    return false;
  }
  var superClass = path.get('superClass');
  if (types.isMemberExpression(superClass.node) && superClass.get('property').node.name != 'Component' || superClass.node.name != 'Component') {
    return false;
  }
  return true;
}