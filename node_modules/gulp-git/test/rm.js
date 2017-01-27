'use strict';

var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');
var should = require('should');
var gutil = require('gulp-util');

module.exports = function(git, util){

  it('should rm a file', function(done) {
    var opt = {args: '-f', cwd: 'test/repo'};
    var fakeFile = new gutil.File(util.testFiles[0]);
    var gitS = git.rm(opt);
    gitS.once('data', function (newFile) {
      setTimeout(function(){
        fs.exists('test/repo/'+newFile, function(exists) {
          exists.should.be.false;
        });
        done();
      }, 100);
    });
    gitS.write(fakeFile);
    gitS.end();
  });

  it('should rm multiple files', function(done) {
    var fakeFiles = [];
    util.testFiles.slice(1).forEach(function(file){
      fakeFiles.push(new gutil.File(file));
    });

    var opt = {args: '-f', cwd: 'test/repo'};
    var gitS = git.rm(opt);
    gitS.on('data', function (newFile) {
      fs.exists('test/repo/'+newFile, function(exists) {
        exists.should.be.false;
      });
    });
    gitS.once('end', done);
    fakeFiles.forEach(function(fake){
      gitS.write(fake);
    });
    gitS.end();
  });

};
