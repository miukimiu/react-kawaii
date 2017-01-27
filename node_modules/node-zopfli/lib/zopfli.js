'use strict';

var binary = require('node-pre-gyp');
var path = require('path');
var defaults = require('defaults');
var binding_path = binary.find(path.join(__dirname, '../package.json'));
var zopfli = require(binding_path);

var util = require('util');
var Transform = require('stream').Transform;

/* Streaming part */
var defaultOptions = {
  verbose: false,
  verbose_more: false,
  numiterations: 15,
  blocksplitting: true,
  blocksplittinglast: false,
  blocksplittingmax: 15
};

function Zopfli(format, options) {
  this.first = true;
  this.adler = 0x01;
  this.crc = null;
  this.format = format || 'deflate';
  this.options = defaults(options, defaultOptions);
  this.in = new Buffer(0);
  Transform.prototype.constructor.apply(this, arguments);
}

util.inherits(Zopfli, Transform);

Zopfli.prototype._transform = function(chunk, encoding, done) {
  this.in = Buffer.concat([this.in, chunk]);
  done();
};

Zopfli.prototype._flush = function(done) {
  var transform = this;
  var inBuffer = new Buffer(this.in);
  zopfli.deflate(inBuffer, this.format, this.options, function(err, outbuf) {
    if (err) {
      done(err);
    } else {
      transform.push(outbuf);
      done();
    }
  });
};

/* Stream */
Zopfli.createGzip = function(options) {
  return new Zopfli('gzip', options);
};

Zopfli.createZlib = function(options) {
  return new Zopfli('zlib', options);
};

Zopfli.createDeflate = function(options) {
  return new Zopfli('deflate', options);
};

/* Buffer */
Zopfli.compress = function(buffer, type, options, callback) {
  if (typeof callback === 'undefined' && typeof options === 'function') {
    callback = options;
    options = {};
  }
  options = options || {};
  if (typeof callback === 'function') {
    zopfli.deflate(buffer, type, options, callback);
  } else {
    return new Promise(function(resolve, reject) {
      zopfli.deflate(buffer, type, options, function(err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
};

Zopfli.gzip = function(buffer, options, callback) {
  return Zopfli.compress(buffer, 'gzip', options, callback);
};

Zopfli.zlib = function(buffer, options, callback) {
  return Zopfli.compress(buffer, 'zlib', options, callback);
};

Zopfli.deflate = function(buffer, options, callback) {
  return Zopfli.compress(buffer, 'deflate', options, callback);
};

/* Sync buffer */
Zopfli.gzipSync = function(buffer, options) {
  return zopfli.deflateSync(buffer, 'gzip', options);
};

Zopfli.zlibSync = function(buffer, options) {
  return zopfli.deflateSync(buffer, 'zlib', options);
};

Zopfli.deflateSync = function(buffer, options) {
  return zopfli.deflateSync(buffer, 'deflate', options);
};

module.exports = Zopfli;
