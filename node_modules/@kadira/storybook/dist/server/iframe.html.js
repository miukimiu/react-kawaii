'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data) {
  var assets = data.assets,
      headHtml = data.headHtml,
      publicPath = data.publicPath;


  var previewUrls = previewUrlsFromAssets(assets);

  var previewCssTag = '';
  if (previewUrls.css) {
    previewCssTag = '<link rel=\'stylesheet\' type=\'text/css\' href=\'' + _url2.default.resolve(publicPath, previewUrls.css) + '\'>';
  }

  return '\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset="utf-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        <script>\n          if (window.parent !== window) {\n            window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__;\n          }\n        </script>\n        <title>React Storybook</title>\n        ' + headHtml + '\n        ' + previewCssTag + '\n      </head>\n      <body>\n        <div id="root"></div>\n        <div id="error-display"></div>\n        <script src="' + _url2.default.resolve(publicPath, previewUrls.js) + '"></script>\n      </body>\n    </html>\n  ';
};

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// assets.preview will be:
// - undefined
// - string e.g. 'static/preview.9adbb5ef965106be1cc3.bundle.js'
// - array of strings e.g.
// [ 'static/preview.9adbb5ef965106be1cc3.bundle.js',
//   'preview.0d2d3d845f78399fd6d5e859daa152a9.css',
//   'static/preview.9adbb5ef965106be1cc3.bundle.js.map',
//   'preview.0d2d3d845f78399fd6d5e859daa152a9.css.map' ]
var previewUrlsFromAssets = function previewUrlsFromAssets(assets) {
  if (!assets) {
    return {
      js: 'static/preview.bundle.js'
    };
  }

  if (typeof assets.preview === 'string') {
    return {
      js: assets.preview
    };
  }

  return {
    js: assets.preview.find(function (filename) {
      return filename.match(/\.js$/);
    }),
    css: assets.preview.find(function (filename) {
      return filename.match(/\.css$/);
    })
  };
};