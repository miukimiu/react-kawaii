'use strict';

var gutil = require('gulp-util');
var exec = require('child_process').exec;

module.exports = function (opt, cb) {
  if (!cb && typeof opt === 'function') {
    // optional options
    cb = opt;
    opt = {};
  }
  if (!cb || typeof cb !== 'function') cb = function () {};
  if (!opt) opt = { };
  if (!opt.log) opt.log = !cb;
  if (!opt.cwd) opt.cwd = process.cwd();
  if (!opt.maxBuffer) opt.maxBuffer = 200 * 1024; //Default buffer value for child_process.exec

  if (!opt.args) opt.args = ' ';

  var cmd = 'git ' + opt.args;
  return exec(cmd, {cwd : opt.cwd, maxBuffer: opt.maxBuffer}, function(err, stdout, stderr){
    if (err) return cb(err, stderr);
    if (opt.log && !opt.quiet) gutil.log(cmd + '\n' + stdout, stderr);
    else {
      if (!opt.quiet) gutil.log(cmd + ' (log : false)', stderr);
    }
    cb(err, stdout);
  });
};
