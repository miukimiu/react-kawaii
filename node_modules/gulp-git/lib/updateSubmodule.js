'use strict';

var gutil = require('gulp-util');
var exec = require('child_process').exec;

module.exports = function(opt, cb){
  if (!cb || typeof cb !== 'function') cb = function () {};
  if (!opt) opt = {};
  if (!opt.cwd) opt.cwd = process.cwd();
  if (!opt.args) opt.args = ' ';

  var maxBuffer = opt.maxBuffer || 200*1024;

  var cmd = 'git submodule update ' + opt.args;
  return exec(cmd, {cwd: opt.cwd, maxBuffer: maxBuffer}, function(err, stdout, stderr){
    if (err && cb) cb(err);
    if (!opt.quiet) gutil.log(stdout, stderr);
    if (cb) cb();
  });
};
