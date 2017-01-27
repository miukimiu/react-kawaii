'use strict';

var path = require('path');
var rimraf = require('rimraf');
var gutil = require('gulp-util');
var git = require('../');

// just so this file is clean
var util = require('./_util');

// omit logging
gutil.log = function(){};


describe('gulp-git', function(){

  var testSuite = util.testSuite();

  testSuite.forEach(function(file){
    var suite = path.basename(file, path.extname(file));
    describe(suite, function(){
      // the actual suite code
      require('./'+file)(git, util);
    });
  });

  // wipe
  after(function(done){
    rimraf('test/repo', function(err){
      if(err) return done(err);
      done();
    });
  });
});
