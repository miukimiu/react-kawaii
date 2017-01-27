"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddonStore = exports.AddonStore = function () {
  function AddonStore() {
    _classCallCheck(this, AddonStore);

    this._loaders = {};
    this._panels = {};
    this._channel = null;
    this._preview = null;
    this._database = null;
  }

  _createClass(AddonStore, [{
    key: "getChannel",
    value: function getChannel() {
      return this._channel;
    }
  }, {
    key: "setChannel",
    value: function setChannel(channel) {
      this._channel = channel;
    }
  }, {
    key: "getPreview",
    value: function getPreview() {
      return this._preview;
    }
  }, {
    key: "setPreview",
    value: function setPreview(preview) {
      this._preview = preview;
    }
  }, {
    key: "getDatabase",
    value: function getDatabase() {
      return this._database;
    }
  }, {
    key: "setDatabase",
    value: function setDatabase(database) {
      this._database = database;
    }
  }, {
    key: "getPanels",
    value: function getPanels() {
      return this._panels;
    }
  }, {
    key: "addPanel",
    value: function addPanel(name, panel) {
      this._panels[name] = panel;
    }
  }, {
    key: "register",
    value: function register(name, loader) {
      this._loaders[name] = loader;
    }
  }, {
    key: "loadAddons",
    value: function loadAddons(api) {
      var _this = this;

      Object.keys(this._loaders).map(function (name) {
        return _this._loaders[name];
      }).forEach(function (loader) {
        return loader(api);
      });
    }
  }]);

  return AddonStore;
}();

exports.default = new AddonStore();