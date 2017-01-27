"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var memoize = _interopRequire(require("lodash.memoize"));

var browserslist = _interopRequire(require("browserslist"));

var _utils = require("./utils");

var contains = _utils.contains;
var parseCaniuseData = _utils.parseCaniuseData;
var cleanBrowsersList = _utils.cleanBrowsersList;

var db = _interopRequire(require("caniuse-db/data.json"));

var features = db.data;

var featuresList = Object.keys(features);

var browsers;
function setBrowserScope(browserList) {
  browsers = cleanBrowsersList(browserList);
}

function getBrowserScope() {
  return browsers;
}

var parse = memoize(parseCaniuseData, function (feature, browsers) {
  return feature.title + browsers;
});

function getSupport(_x) {
  var _again = true;

  _function: while (_again) {
    _again = false;
    var query = _x;
    feature = res = undefined;

    var feature = undefined;
    try {
      feature = features[query];
    } catch (e) {
      var res = find(query);
      if (res.length === 1) {
        _x = res[0];
        _again = true;
        continue _function;
      }
      throw new ReferenceError("Please provide a proper feature name. Cannot find " + query);
    }
    return parse(feature, browsers);
  }
}

function isSupported(feature, browsers) {
  var data = undefined;
  try {
    data = features[feature];
  } catch (e) {
    var res = find(feature);
    if (res.length === 1) {
      data = features[res[0]];
    } else {
      throw new ReferenceError("Please provide a proper feature name. Cannot find " + feature);
    }
  }

  return browserslist(browsers).map(function (browser) {
    return browser.split(" ");
  }).every(function (browser) {
    return data.stats[browser[0]] && data.stats[browser[0]][browser[1]] === "y";
  });
}

function find(query) {
  if (typeof query !== "string") {
    throw new TypeError("The `query` parameter should be a string.");
  }

  if (~featuresList.indexOf(query)) {
    // exact match
    return query;
  }

  return featuresList.filter(function (file) {
    return contains(file, query);
  });
}

function getLatestStableBrowsers() {
  return browserslist.queries.lastVersions.select(1);
}

setBrowserScope();

exports.getSupport = getSupport;
exports.isSupported = isSupported;
exports.find = find;
exports.getLatestStableBrowsers = getLatestStableBrowsers;
exports.setBrowserScope = setBrowserScope;
exports.getBrowserScope = getBrowserScope;