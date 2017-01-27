'use strict';

var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');
var should = require('should');
var gutil = require('gulp-util');

module.exports = function(git, util){

  it('should create a new branch', function(done){
    var opt = {cwd: './test/repo/'};
    git.branch('testBranch', opt, function(){
      fs.stat('test/repo/.git/refs/heads/testBranch', function(err, stats) {
        should.not.exist(err);
        done();
      });
    });
  });

  it('should create new branch, checkout and return its name', function(done){
    var opt = {cwd: './test/repo/'};
    git.branch('anotherBranch', opt, function(){
      fs.stat('test/repo/.git/refs/heads/anotherBranch', function(err, stats) {
        should.not.exist(err);
        git.checkout('anotherBranch', opt, function(){
          opt = {args: '--abbrev-ref HEAD', cwd: opt.cwd};
          git.revParse(opt, function (err, branch) {
            branch.should.equal('anotherBranch');
            should.not.exist(err);
            done();
          });
        });
      });
    });
  });

};
