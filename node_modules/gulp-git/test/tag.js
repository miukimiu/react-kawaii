'use strict';

var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');
var should = require('should');
var gutil = require('gulp-util');

module.exports = function(git, testFiles, testCommit){

  // These must be run on a system which has git installed
  // no pull delay, and has git configured.

  it('should tag a version of the repo', function(done) {
    git.tag('v1.2.3', 'message', {cwd: './test/repo/'}, function() {
      fs.stat('test/repo/.git/refs/tags/v1.2.3', function(err, stats) {
        should.not.exist(err);
        done();
      });
    });
  });

  it('should not throw an error on success', function(done) {
    git.tag('v2', 'message', {cwd: './test/repo/'}, function(err) {
      should.not.exist(err);
      done();
    });
  });

  it('should tag a version with an empty message', function(done) {
    git.tag('v3', '', {cwd: './test/repo/'}, function(err) {
      should.not.exist(err);
      fs.stat('test/repo/.git/refs/tags/v3', function(err, stats) {
        should.not.exist(err);
        done();
      });
    });
  });
};
