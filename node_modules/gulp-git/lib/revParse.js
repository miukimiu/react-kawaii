'use strict';

var gutil = require('gulp-util');
var exec = require('child_process').exec;

/*
great examples:
`git rev-parse HEAD`: get current git hash
`git rev-parse --short HEAD`: get short git hash
`git rev-parse --abbrev-ref HEAD`: get current branch name
`git rev-parse --show-toplevel`: working directory path
see https://www.kernel.org/pub/software/scm/git/docs/git-rev-parse.html
*/

module.exports = function (opt, cb) {
  if (!cb && typeof opt === 'function') {
    // optional options
    cb = opt;
    opt = {};
  }
  if (!cb || typeof cb !== 'function') cb = function () {};
  if (!opt) opt = {};
  if (!opt.args) opt.args = ' '; // it will likely not give you what you want
  if (!opt.cwd) opt.cwd = process.cwd();

  var maxBuffer = opt.maxBuffer || 200*1024;

  var cmd = 'git rev-parse ' + opt.args;
  return exec(cmd, {cwd: opt.cwd, maxBuffer: maxBuffer}, function(err, stdout, stderr){
    if (err) return cb(err);
    if (stdout) stdout = stdout.trim(); // Trim trailing cr-lf
    if (!opt.quiet) gutil.log(stdout, stderr);
    cb(err, stdout); // return stdout to the user
  });
};
