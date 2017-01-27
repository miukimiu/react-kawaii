'use strict';

var through = require('through2');
var gutil = require('gulp-util');
var exec = require('child_process').exec;
var escape = require('any-shell-escape');
var path = require('path');

// want to get the current git hash instead?
// git.revParse({args:'--short HEAD'})

module.exports = function(message, opt) {
  if (!opt) opt = {};
  if (!message || message.length === 0) {
    if (opt.args.indexOf('--amend') === -1 && opt.disableMessageRequirement !== true) {
      throw new Error('gulp-git: Commit message is required git.commit("commit message") or --amend arg must be given');
    }
  }
  if (!opt.cwd) opt.cwd = process.cwd();
  if (!opt.maxBuffer) opt.maxBuffer = 200 * 1024; //Default buffer value for child_process.exec
  if (!opt.args) opt.args = ' ';

  var files = [];
  var paths = [];

  var write = function(file, enc, cb){
    files.push(file);
    paths.push(path.relative(opt.cwd, file.path).replace('\\','/'));
    cb();
  };

  var messageEntry = function(entry) {
    return '-m "' + entry + '" ';
  };

  var flush = function(cb){
    var writeStdin = false;
    var cmd = 'git commit ';

    if (message && opt.args.indexOf('--amend') === -1) {

      // Check if the message is multiline
      if (message && message instanceof Array) {

        if (opt.multiline) {
          writeStdin = true;
          message = message.join('\n');
        } else {
          var messageExpanded = '';

          // repeat -m as needed
          for (var i = 0; i < message.length; i++) {
            messageExpanded += messageEntry(message[i]);
          }
          cmd += messageExpanded + opt.args;
        }
        if(!opt.disableAppendPaths) {
          cmd += ' ' + escape(paths);
        }
      } else {
        if (~message.indexOf('\n')) {
          writeStdin = true;
        } else {
          cmd += '-m "' + message + '" ' + opt.args;
        }
        if(!opt.disableAppendPaths) {
          cmd += ' ' + escape(paths);
        }
      }
    } else if (opt.disableMessageRequirement === true) {
      cmd += opt.args;
    } else {
      // When amending, just add the file automatically and do not include the message not the file.
      // Also, add all the files and avoid lauching the editor (even if --no-editor was added)
      cmd += '-a ' + opt.args + (opt.args.indexOf('--no-edit') === -1 ? ' --no-edit' : '');
    }
    var self = this;

    // If `message` was an array and `opt.multiline` was true
    // or was a string containing newlines, we append '-F -'
    if (writeStdin) {
      cmd += ' -F -';
    }

    var execChildProcess = exec(cmd, opt, function(err, stdout, stderr) {
      if (err) return cb(err);
      if (!opt.quiet) gutil.log(stdout, stderr);
      files.forEach(self.push.bind(self));
      self.emit('end');
      return cb();
    });

    if (writeStdin) {
      execChildProcess.stdin.write(message);
      execChildProcess.stdin.end();
    }

    // If the user wants, we'll emit data events during exec
    // they can listen to them with .on('data',function(data){ });
    // in their task
    if(opt.emitData) {
      execChildProcess.stdout.on('data',function(data) {
        self.emit('data', data);
      });
      execChildProcess.stderr.on('data',function(data) {
        self.emit('data', data);
      });
    }
  };

  return through.obj(write, flush);
};
