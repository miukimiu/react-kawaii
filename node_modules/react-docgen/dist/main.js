'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utils = exports.resolver = exports.handlers = exports.defaultHandlers = exports.parse = undefined;

var _handlers = require('./handlers');

var handlers = _interopRequireWildcard(_handlers);

var _parse = require('./parse');

var _parse2 = _interopRequireDefault(_parse);

var _resolver = require('./resolver');

var resolver = _interopRequireWildcard(_resolver);

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 *
 */

var defaultResolver = resolver.findExportedComponentDefinition;
var defaultHandlers = [handlers.propTypeHandler, handlers.propTypeCompositionHandler, handlers.propDocBlockHandler, handlers.flowTypeHandler, handlers.flowTypeDocBlockHandler, handlers.defaultPropsHandler, handlers.componentDocblockHandler, handlers.displayNameHandler, handlers.componentMethodsHandler, handlers.componentMethodsJsDocHandler];

/**
 * See `lib/parse.js` for more information about the arguments. This function
 * simply sets default values for convenience.
 *
 * The default resolver looks for *exported* `React.createClass(def)` calls
 * and expected `def` to resolve to an object expression.
 *
 * The default `handlers` look for `propTypes` and `getDefaultProps` in the
 * provided object expression, and extract prop type information, prop
 * documentation (from docblocks), default prop values and component
 * documentation (from a docblock).
 */
function defaultParse( // eslint-disable-line no-unused-vars
src, resolver, // eslint-disable-line no-shadow
handlers // eslint-disable-line no-shadow
) {
  if (!resolver) {
    resolver = defaultResolver;
  }
  if (!handlers) {
    handlers = defaultHandlers;
  }

  return (0, _parse2.default)(src, resolver, handlers);
}

exports.parse = defaultParse;
exports.defaultHandlers = defaultHandlers;
exports.handlers = handlers;
exports.resolver = resolver;
exports.utils = utils;