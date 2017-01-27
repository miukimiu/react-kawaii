'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBase16Theme = exports.createStyling = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _lodash = require('lodash.curry');

var _lodash2 = _interopRequireDefault(_lodash);

var _base = require('base16');

var base16 = _interopRequireWildcard(_base);

var _rgb2hex = require('pure-color/convert/rgb2hex');

var _rgb2hex2 = _interopRequireDefault(_rgb2hex);

var _parse = require('pure-color/parse');

var _parse2 = _interopRequireDefault(_parse);

var _lodash3 = require('lodash.flow');

var _lodash4 = _interopRequireDefault(_lodash3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rgb = require('color-space/rgb');
var yuv = require('color-space/yuv');

var truthy = function truthy(x) {
  return x;
};
var DEFAULT_BASE16 = base16.default;

var BASE16_KEYS = (0, _keys2.default)(DEFAULT_BASE16);

// we need a correcting factor, so that a dark, but not black background color
// converts to bright enough inversed color
var flip = function flip(x) {
  return x < 0.25 ? 1 : x < 0.5 ? 0.9 - x : 1.1 - x;
};

var invertColor = (0, _lodash4.default)(_parse2.default, rgb.yuv, function (_ref) {
  var _ref2 = (0, _slicedToArray3.default)(_ref, 3);

  var y = _ref2[0];
  var u = _ref2[1];
  var v = _ref2[2];
  return [flip(y), u, v];
}, yuv.rgb, _rgb2hex2.default);

var invertThemeColors = function invertThemeColors(theme) {
  return (0, _keys2.default)(theme).reduce(function (t, key) {
    return (/^base/.test(key) ? (t[key] = invertColor(theme[key]), t) : t
    );
  }, {});
};

var getStylingByKeys = function getStylingByKeys(customStyling, defaultStyling, keys) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  if (keys === null) {
    return defaultStyling;
  }

  if (!Array.isArray(keys)) {
    keys = [keys];
  }

  var styles = keys.reduce(function (s, key) {
    return [].concat((0, _toConsumableArray3.default)(s), [defaultStyling[key], customStyling[key]]);
  }, []).filter(truthy);

  var props = styles.reduce(function (obj, s) {
    if (typeof s === 'string') {
      obj.className = [obj.className, s].filter(function (c) {
        return c;
      }).join(' ');
    } else if ((typeof s === 'undefined' ? 'undefined' : (0, _typeof3.default)(s)) === 'object') {
      obj.style = (0, _extends3.default)({}, obj.style, s);
    } else if (typeof s === 'function') {
      obj = (0, _extends3.default)({}, obj, s.apply(undefined, [obj].concat(args)));
    }

    return obj;
  }, { className: '', style: {} });

  if (!props.className) {
    delete props.className;
  }

  if ((0, _keys2.default)(props.style).length === 0) {
    delete props.style;
  }

  return props;
};

var createStyling = exports.createStyling = (0, _lodash2.default)(function (getStylingFromBase16) {
  for (var _len2 = arguments.length, args = Array(_len2 > 4 ? _len2 - 4 : 0), _key2 = 4; _key2 < _len2; _key2++) {
    args[_key2 - 4] = arguments[_key2];
  }

  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var themeOrStyling = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
  var invertTheme = arguments[3];
  var _options$defaultBase = options.defaultBase16;
  var defaultBase16 = _options$defaultBase === undefined ? DEFAULT_BASE16 : _options$defaultBase;
  var _options$base16Themes = options.base16Themes;
  var base16Themes = _options$base16Themes === undefined ? null : _options$base16Themes;


  var base16Theme = getBase16Theme(themeOrStyling, base16Themes);
  if (base16Theme) {
    themeOrStyling = (0, _extends3.default)({}, base16Theme, themeOrStyling);
  }

  var theme = BASE16_KEYS.reduce(function (t, key) {
    return t[key] = themeOrStyling[key] || defaultBase16[key], t;
  }, {});

  var customStyling = (0, _keys2.default)(themeOrStyling).reduce(function (s, key) {
    return BASE16_KEYS.indexOf(key) === -1 ? (s[key] = themeOrStyling[key], s) : s;
  }, {});

  var defaultStyling = getStylingFromBase16(invertTheme ? invertThemeColors(theme) : theme);

  return (0, _lodash2.default)(getStylingByKeys, 3).apply(undefined, [customStyling, defaultStyling].concat(args));
}, 4);

var getBase16Theme = exports.getBase16Theme = function getBase16Theme(theme, base16Themes) {
  if (theme && theme.extend) {
    theme = theme.extend;
  }

  if (typeof theme === 'string') {
    theme = (base16Themes || {})[theme] || base16[theme];
  }

  return theme && theme.hasOwnProperty('base00') ? theme : undefined;
};