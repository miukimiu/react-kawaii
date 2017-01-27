'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data) {
  var assets = data.assets,
      publicPath = data.publicPath;


  var managerUrls = managerUrlsFromAssets(assets);

  return '\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset="utf-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        <meta name="storybook-version" content="' + _package.version + '">\n        <title>React Storybook</title>\n        <style>\n          /*\n            When resizing panels, the drag event breaks if the cursor\n            moves over the iframe. Add the \'dragging\' class to the body\n            at drag start and remove it when the drag ends.\n           */\n          .dragging iframe {\n            pointer-events: none;\n          }\n\n          /* Styling the fuzzy search box placeholders */\n          .searchBox::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n            color: #ddd;\n            font-size: 16px;\n          }\n\n          .searchBox::-moz-placeholder { /* Firefox 19+ */\n            color: #ddd;\n            font-size: 16px;\n          }\n\n          .searchBox:focus{\n            border-color: #EEE !important;\n          }\n\n          .btn:hover{\n            background-color: #eee\n          }\n        </style>\n      </head>\n      <body style="margin: 0;">\n        <div id="root"></div>\n        <script src="' + _url2.default.resolve(publicPath, managerUrls.js) + '"></script>\n      </body>\n    </html>\n  ';
};

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _package = require('../../package.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// assets.manager will be:
// - undefined
// - string e.g. 'static/manager.9adbb5ef965106be1cc3.bundle.js'
// - array of strings e.g.
// assets.manager will be something like:
// [ 'static/manager.c6e6350b6eb01fff8bad.bundle.js',
//   'static/manager.c6e6350b6eb01fff8bad.bundle.js.map' ]
var managerUrlsFromAssets = function managerUrlsFromAssets(assets) {
  if (!assets || !assets.manager) {
    return {
      js: 'static/manager.bundle.js'
    };
  }

  if (typeof assets.manager === 'string') {
    return {
      js: assets.manager
    };
  }

  return {
    js: assets.manager.find(function (filename) {
      return filename.match(/\.js$/);
    }),
    css: assets.manager.find(function (filename) {
      return filename.match(/\.css$/);
    })
  };
};