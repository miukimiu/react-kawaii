'use strict';

/* global describe, it, after, before, afterEach, beforeEach */

var fs = require('fs');
var rimraf = require('rimraf');
var should = require('should');
var exec = require('child_process').exec;

module.exports = function(git, util){


  beforeEach(function(done){
    var repo = 'git://github.com/stevelacy/git-test';
    git.clone(repo, {args: './test/tmp'}, function(){
      exec('git update-ref -d refs/tags/v1.1.1', {cwd: './test/tmp'}, function(err){
        if (err) return done(err);
        done();
      });
    });
  });

  it('should fetch a tag from remote origin', function(done){
    git.fetch('origin', '', {cwd: './test/tmp'}, function(){
      fs.open('./test/tmp/.git/refs/tags/v1.1.1', 'r', function(err, fd) {
        should.not.exist(err);
        fs.close(fd, function() {
          done();
        });
      });
    });
  });

  afterEach(function(done){
    rimraf('./test/tmp', function(err){
      if(err) return done(err);
      done();
    });
  });
};
