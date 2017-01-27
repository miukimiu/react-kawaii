'use strict';

var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');
var should = require('should');
var gutil = require('gulp-util');

module.exports = function(git, util){

  it('should add files to the git repo', function(done) {
    var fakeFile = new gutil.File(util.testFiles[0]);
    var gitS = git.add();
    gitS.on('data', function(newFile){
      should.exist(newFile);
      fs.stat('test/repo/.git/objects/', function(err, stats){
        should.not.exist(err);
        done();
      });
    });
    gitS.write(fakeFile);
    gitS.end();
  });

  it('should add multiple files to the git repo', function(done) {
    var fakeFiles = [];
    util.testFiles.forEach(function(name){
      fakeFiles.push( new gutil.File(name) );
    });
    var gitS = git.add();
    gitS.on('data', function(newFile){
      should.exist(newFile);
      fs.stat('test/repo/.git/objects/', function(err, stats){
        should.not.exist(err);
      });
    });
    fakeFiles.forEach(function(file){
      gitS.write(file);
    });
    gitS.end(done);
  });

  it('should fire an end event', function(done) {
    var fakeFile = new gutil.File(util.testFiles[0]);
    var gitS = git.add();

    gitS.on('end', function() {
      done();
    });

    gitS.write(fakeFile);
    gitS.end();
  });

};
