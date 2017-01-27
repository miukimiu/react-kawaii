'use strict';

var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');
var should = require('should');
var gutil = require('gulp-util');

module.exports = function(git, testFiles, testCommit){

  before(function(done){
    git.init({cwd: './test/repo/'}, done);
  });

  it('should initialize a empty git repo', function(done) {
    fs.stat('test/repo/.git/', function(err, stats) {
      should.not.exist(err);
      done();
    });
  });

};
