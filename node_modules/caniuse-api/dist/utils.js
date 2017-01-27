"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

exports.contains = contains;
exports.parseCaniuseData = parseCaniuseData;
exports.cleanBrowsersList = cleanBrowsersList;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var uniq = _interopRequire(require("lodash.uniq"));

var browserslist = _interopRequire(require("browserslist"));

function contains(str, substr) {
  return !! ~str.indexOf(substr);
}

function parseCaniuseData(feature, browsers) {
  var support = {};
  var letters;
  var letter;

  browsers.forEach(function (browser) {
    support[browser] = {};
    for (var info in feature.stats[browser]) {
      letters = feature.stats[browser][info].split(" ");
      info = parseFloat(info.split("-")[0]); //if info is a range, take the left
      if (isNaN(info)) continue;
      for (var i = 0; i < letters.length; i++) {
        letter = letters[i];
        if (letter === "y") {
          // min support asked, need to find the min value
          if (typeof support[browser][letter] === "undefined" || info < support[browser][letter]) {
            support[browser][letter] = info;
          }
        } else {
          // any other support, need to find the max value
          if (typeof support[browser][letter] === "undefined" || info > support[browser][letter]) {
            support[browser][letter] = info;
          }
        }
      }
    }
  });

  return support;
}

function cleanBrowsersList(browserList) {
  return uniq(browserslist(browserList).map(function (browser) {
    return browser.split(" ")[0];
  }));
}