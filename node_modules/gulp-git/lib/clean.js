'use strict';

var gutil = require('gulp-util');
var exec = require('child_process').exec;
var escape = require('any-shell-escape');

module.exports = function (paths, opt, cb) {
  if(!cb) {
    if(typeof opt === 'function') {
      // passed in 2 arguments
      cb = opt;
      if(typeof paths === 'object') {
        opt = paths;
        paths = '';
      }
      else opt = {};
    }
    else {
      // passed in only cb
      cb = paths;
      paths = '';
      opt = {};
    }
  }

  if(!opt.cwd) opt.cwd = process.cwd();
  if(!opt.args) opt.args = ' ';

  var cmd = 'git clean ' + opt.args + ' ' + (paths.trim() ? (' -- ' + escape(paths)) : '');

  var maxBuffer = opt.maxBuffer || 200*1024;

  return exec(cmd, { cwd: opt.cwd, maxBuffer: maxBuffer }, function (err, stdout, stderr) {
    if(err)
      return cb(err);
    if(!opt.quiet)
      gutil.log(stdout, stderr);
    cb();
  });
};
