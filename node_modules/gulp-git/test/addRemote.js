'use strict';

var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');
var should = require('should');
var gutil = require('gulp-util');

module.exports = function(git, util){

  it('should add a Remote to the git repo', function(done) {
    var opt = {cwd: './test/repo/'};
    var origin = 'https://github.com/stevelacy/git-test';
    git.addRemote('origin', origin, opt, function(){
      fs.statSync('./test/repo/.git/');
      fs.readFileSync('./test/repo/.git/config')
        .toString('utf8')
        .should.match(/https:\/\/github.com\/stevelacy\/git-test/);
      done();
    });
  });

};
