'use strict';

var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');
var should = require('should');
var gutil = require('gulp-util');

module.exports = function(git, util){

  it('should git.exec log', function(done){
    var opt = {args: 'log', cwd: 'test/repo'};
    git.exec(opt, function(err, stdout){
      should(stdout.match(/commit|Author|Date/g))
        .have.property('length');
        done();
    });
  });
};
