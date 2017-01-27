'use strict';

var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');
var should = require('should');
var gutil = require('gulp-util');

module.exports = function(git, util){

  it('should checkout a branch', function(done) {
    var opt = {cwd: 'test/repo'};
    var fakeFile = new gutil.File(util.testFiles[0]);
    git.checkout('testBranch', opt, function() {
      fs.readFileSync('test/repo/.git/HEAD')
        .toString('utf8')
        .should.match(/ref\: refs\/heads\/testBranch/);

      done();
    });
  });
};
