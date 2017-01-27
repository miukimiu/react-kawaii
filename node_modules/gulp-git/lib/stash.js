'use strict';

var gutil = require('gulp-util');
var exec = require('child_process').exec;
var escape = require('any-shell-escape');

module.exports = function(opt, cb) {

  if (!cb && typeof opt === 'function') {
    // optional options
    cb = opt;
    opt = {};
  }

  if (!cb || typeof cb !== 'function') cb = function () {};
  if (!opt) opt = {};
  if (!opt.args) opt.args = 'save --include-untracked "gulp-stash"';
  if (!opt.cwd) opt.cwd = process.cwd();

  var maxBuffer = opt.maxBuffer || 200*1024;

  var cmd = 'git stash ' + opt.args;
  exec(cmd, {cwd: opt.cwd, maxBuffer: maxBuffer}, function(err, stdout, stderr) {
    if (err) return cb(err);
    if (!opt.quiet) gutil.log(stdout, stderr);
    cb(null);
  });

};
