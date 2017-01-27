'use strict';

var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');
var should = require('should');
var gutil = require('gulp-util');

var repo = path.join(__dirname, 'repo');

var fileContents = function(){
  if (fs.existsSync(repo)){
    return fs.readFileSync('test/repo/testContents.js');
  }
  else{
    fs.mkdirSync(repo);
    fs.openSync(path.join(repo, 'testContents.js'), 'w');
    return fs.readFileSync('test/repo/testContents.js');
  }

};

var testFiles = (function(){
  var testFiles = [];
  for (var i = 0; i < 10; i++) {
    testFiles[i] = {
      base: 'test/repo',
      cwd: 'test/repo',
      path: __dirname + '/repo/test.' + i + '.js',
      contents: new Buffer(fileContents())
    };
    fs.openSync(testFiles[i].path, 'w');
  }
  return testFiles;
}).call(this);

var testOptionsFiles = (function(){
  var testFiles = [];
  for (var i = 0; i < 12; i++) {
    testFiles[i] = {
      base: 'test/repo',
      cwd: 'test/repo',
      path: __dirname + '/repo/test.options.' + i + '.js',
      contents: new Buffer(fileContents())
    };
    fs.openSync(testFiles[i].path, 'w');
  }
  return testFiles;
}).call(this);


module.exports = {
  repo: repo,
  fileContents: fileContents(),
  testCommit: path.join(repo, '.git', 'COMMIT_EDITMSG'),
  testFiles: testFiles,
  testOptionsFiles: testOptionsFiles,
  testSuite: function(){
    var testSuite = fs.readdirSync(__dirname);
    var testFirst = [
      'clone.js', 'init.js', 'add.js', 'commit.js', 'stash.js'
    ];

    // use it also to omit _main & _util files
    testFirst.concat('main.js', '_util.js', 'repo').forEach(function(file){
      testSuite.splice(testSuite.indexOf(file), 1);
    });
    testSuite.unshift.apply(testSuite, testFirst);
    return testSuite;
  }
};
