'use strict';

var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');
var should = require('should');
var gutil = require('gulp-util');
var exec = require('child_process').exec;

module.exports = function(git, util){

  it('should commit a file to the repo', function(done) {
    var fakeFile = util.testFiles[0];
    var opt = {cwd: './test/repo/'};
    var gitS = git.commit('initial commit', opt);
    gitS.once('finish', function(){
      setTimeout(function(){
        fs.readFileSync(util.testCommit)
          .toString('utf8')
          .should.match(/initial commit/);
        done();
      }, 100);
    });
    gitS.write(fakeFile);
    gitS.end();
  });

  it('should fire an end event', function(done) {
    var fakeFile = util.testFiles[2];
    var opt = {cwd: './test/repo/'};
    var gitS = git.commit('initial commit', opt);

    gitS.on('end', function() {
      done();
    });

    gitS.write(fakeFile);
    gitS.end();
  });

  it('should commit a file to the repo using raw arguments only', function(done) {
    var fakeFile = util.testFiles[3];
    var opt = {cwd: './test/repo/', args:'-m "initial commit"', disableMessageRequirement: true};
    var gitS = git.commit(undefined, opt);
    gitS.once('finish', function(){
      setTimeout(function(){
        fs.readFileSync(util.testCommit)
          .toString('utf8')
          .should.match(/initial commit/);
        done();
      }, 100);
    });
    gitS.write(fakeFile);
    gitS.end();
  });

  it('should commit a file to the repo when appending paths is disabled', function(done) {
    var fakeFile = util.testOptionsFiles[4];
    exec('git add ' + fakeFile.path, {cwd: './test/repo/'},
      function (error, stdout, stderr) {
        var opt = {cwd: './test/repo/', disableAppendPaths: true};
        var gitS = git.commit('initial commit', opt);
        gitS.on('end', function(err) {
          if(err) {console.error(err); }
          setTimeout(function(){
            fs.readFileSync(util.testCommit)
              .toString('utf8')
              .should.match(/initial commit/);
            done();
          }, 100);
        });
        gitS.write(fakeFile);
        gitS.end();
    });
  });

  it('should commit a file to the repo when passing multiple messages', function(done) {
    var fakeFile = util.testOptionsFiles[5];
    exec('git add ' + fakeFile.path, {cwd: './test/repo/'},
      function (error, stdout, stderr) {
        var opt = {cwd: './test/repo/', disableAppendPaths: true};
        var gitS = git.commit(['initial commit', 'additional message'], opt);
        gitS.on('end', function(err) {
          if(err) {console.error(err); }
          setTimeout(function(){
            var result = fs.readFileSync(util.testCommit)
              .toString('utf8');
            result.should.match(/initial commit/);
            result.should.match(/additional message/);
            done();
          }, 100);
        });
        gitS.write(fakeFile);
        gitS.end();
    });
  });

  it('should commit a file to the repo when passing a message with newlines', function(done) {
    var fakeFile = util.testOptionsFiles[10];
    exec('git add ' + fakeFile.path, {cwd: './test/repo/'},
      function (error, stdout, stderr) {
        var opt = {cwd: './test/repo/', disableAppendPaths: true};
        var gitS = git.commit('initial commit\nadditional message', opt);
        gitS.on('end', function(err) {
          if(err) {console.error(err); }
          setTimeout(function(){
            var result = fs.readFileSync(util.testCommit)
              .toString('utf8');
            result.should.match(/initial commit\nadditional message/);
            done();
          }, 300);
        });
        gitS.write(fakeFile);
        gitS.end();
    });
  });

  it('should commit a file to the repo when passing multiple messages and multiline option', function(done) {
    var fakeFile = util.testOptionsFiles[11];
    exec('git add ' + fakeFile.path, {cwd: './test/repo/'},
      function (error, stdout, stderr) {
        var opt = {cwd: './test/repo/', disableAppendPaths: true, multiline: true};
        var gitS = git.commit(['initial commit', 'additional message'], opt);
        gitS.on('end', function(err) {
          if(err) {console.error(err); }
          setTimeout(function(){
            var result = fs.readFileSync(util.testCommit)
              .toString('utf8');
            result.should.match(/initial commit\nadditional message/);
            done();
          }, 300);
        });
        gitS.write(fakeFile);
        gitS.end();
    });
  });

  it('should not fire a data event by default', function(done) {
    var fakeFile = util.testOptionsFiles[9];
    exec('git add ' + fakeFile.path, {cwd: './test/repo/'},
      function (error, stdout, stderr) {
        var opt = {cwd: './test/repo/'};
        var gitS = git.commit('initial commit', opt);
        var gotData = false;
        var wasDone = false;

        gitS.on('data', function(data) {
          gotData = true;
        });

        gitS.on('end', function() {
          gotData.should.be.false;
          if(!wasDone) {
            done();
            wasDone=true;
          }
        });

        gitS.write(fakeFile);
        gitS.end();
    });
  });

  it('should fire a data event if emitData is true', function(done) {
    var fakeFile = util.testOptionsFiles[6];
    exec('git add ' + fakeFile.path, {cwd: './test/repo/'},
      function (error, stdout, stderr) {
        var opt = {cwd: './test/repo/', emitData: true};
        var gitS = git.commit('initial commit', opt);
        gitS.once('data', function(data) {
          if (data) {
            done();
          }
        });
        gitS.write(fakeFile);
        gitS.end();
    });
  });
};
