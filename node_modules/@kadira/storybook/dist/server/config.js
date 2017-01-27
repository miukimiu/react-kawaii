'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.addJsonLoaderIfNotAvailable = addJsonLoaderIfNotAvailable;

exports.default = function (configType, baseConfig, configDir) {
  var config = baseConfig;

  var babelConfig = (0, _babel_config2.default)(configDir);
  config.module.loaders[0].query = babelConfig;

  // Check whether a config.js file exists inside the storybook
  // config directory and throw an error if it's not.
  var storybookConfigPath = _path2.default.resolve(configDir, 'config.js');
  if (!_fs2.default.existsSync(storybookConfigPath)) {
    var err = new Error('=> Create a storybook config file in "' + configDir + '/config.js".');
    throw err;
  }
  config.entry.preview.push(require.resolve(storybookConfigPath));

  // Check whether addons.js file exists inside the storybook.
  // Load the default addons.js file if it's missing.
  var storybookDefaultAddonsPath = _path2.default.resolve(__dirname, 'addons.js');
  var storybookCustomAddonsPath = _path2.default.resolve(configDir, 'addons.js');
  if (_fs2.default.existsSync(storybookCustomAddonsPath)) {
    logger.info('=> Loading custom addons config.');
    config.entry.manager.unshift(storybookCustomAddonsPath);
  } else {
    config.entry.manager.unshift(storybookDefaultAddonsPath);
  }

  // Check whether user has a custom webpack config file and
  // return the (extended) base configuration if it's not available.
  var customConfigPath = _path2.default.resolve(configDir, 'webpack.config.js');
  if (!_fs2.default.existsSync(customConfigPath)) {
    logger.info('=> Using default webpack setup based on "Create React App".');
    customConfigPath = _path2.default.resolve(__dirname, './config/defaults/webpack.config.js');
  }

  var customConfig = require(customConfigPath);

  if (typeof customConfig === 'function') {
    logger.info('=> Loading custom webpack config (full-control mode).');
    return customConfig(config, configType);
  }

  logger.info('=> Loading custom webpack config.');

  customConfig.module = customConfig.module || {};

  var newConfig = (0, _extends3.default)({}, customConfig, config, {
    // Override with custom devtool if provided
    devtool: customConfig.devtool || config.devtool,
    // We need to use our and custom plugins.
    plugins: [].concat((0, _toConsumableArray3.default)(config.plugins), (0, _toConsumableArray3.default)(customConfig.plugins || [])),
    module: (0, _extends3.default)({}, config.module, customConfig.module, {
      loaders: [].concat((0, _toConsumableArray3.default)(config.module.loaders), (0, _toConsumableArray3.default)(customConfig.module.loaders || []))
    }),
    resolve: (0, _extends3.default)({}, config.resolve, customConfig.resolve, {
      alias: (0, _extends3.default)({}, config.alias, customConfig.resolve && customConfig.resolve.alias)
    })
  });

  addJsonLoaderIfNotAvailable(newConfig);

  return newConfig;
};

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _babel_config = require('./babel_config');

var _babel_config2 = _interopRequireDefault(_babel_config);

var _utils = require('./config/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// avoid ESLint errors
/* eslint global-require: 0 */

var logger = console;

function addJsonLoaderIfNotAvailable(config) {
  var jsonLoaderExists = config.module.loaders.reduce(function (value, loader) {
    return value || [].concat(loader.test).some(function (matcher) {
      var isRegex = matcher instanceof RegExp;
      var testString = 'my_package.json';
      if (isRegex) {
        return matcher.test(testString);
      }
      if (typeof matcher === 'function') {
        return matcher(testString);
      }
      return false;
    });
  }, false);

  if (!jsonLoaderExists) {
    config.module.loaders.push({
      test: /\.json$/,
      include: _utils.includePaths,
      loader: require.resolve('json-loader')
    });
  }
}

// `baseConfig` is a webpack configuration bundled with storybook.
// React Storybook will look in the `configDir` directory
// (inside working directory) if a config path is not provided.