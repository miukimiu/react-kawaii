'use strict';

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _autoprefixer = require('autoprefixer');

var _autoprefixer2 = _interopRequireDefault(_autoprefixer);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Add a default custom config which is similar to what React Create App does.
module.exports = function (storybookBaseConfig) {
  var newConfig = (0, _extends3.default)({}, storybookBaseConfig);
  newConfig.module.loaders = [].concat((0, _toConsumableArray3.default)(storybookBaseConfig.module.loaders), [{
    test: /\.css?$/,
    include: _utils.includePaths,
    loaders: [require.resolve('style-loader'), require.resolve('css-loader') + '?importLoaders=1', require.resolve('postcss-loader')]
  }, {
    test: /\.json$/,
    include: _utils.includePaths,
    loader: require.resolve('json-loader')
  }, {
    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
    include: _utils.includePaths,
    loader: require.resolve('file-loader'),
    query: {
      name: 'static/media/[name].[hash:8].[ext]'
    }
  }, {
    test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
    include: _utils.includePaths,
    loader: require.resolve('url-loader'),
    query: {
      limit: 10000,
      name: 'static/media/[name].[hash:8].[ext]'
    }
  }]);

  newConfig.postcss = function () {
    return [(0, _autoprefixer2.default)({
      browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
    })];
  };

  newConfig.resolve.alias = (0, _extends3.default)({}, storybookBaseConfig.resolve.alias, {
    // This is to support NPM2
    'babel-runtime/regenerator': require.resolve('babel-runtime/regenerator')
  });

  // Return the altered config
  return newConfig;
};