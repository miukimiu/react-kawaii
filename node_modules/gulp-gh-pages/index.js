'use strict';

var git = require('./lib/git');
var gutil = require('gulp-util');
var Transform = require('readable-stream/transform');
var vinylFs = require('vinyl-fs');
var wrapPromise = require('wrap-promise');

/*
 * Public: Push to gh-pages branch for github
 *
 * options - {Object} that contains all the options of the plugin
 *   - remoteUrl: The {String} remote url (github repository) of the project,
 *   - origin: The {String} origin of the git repository (default to `"origin"`),
 *   - branch: The {String} branch where deploy will by done (default to `"gh-pages"`),
 *   - cacheDir: {String} where the git repo will be located. (default to a temporary folder)
 *   - push: {Boolean} to know whether or not the branch should be pushed (default to `true`)
 *   - message: {String} commit message (default to `"Update [timestamp]"`)
 *
 * Returns `Stream`.
**/
module.exports = function gulpGhPages(options) {
  options = options || {};
  var origin = options.origin || 'origin';
  var branch = options.branch || 'gh-pages';
  var message = options.message || 'Update ' + new Date().toISOString();

  var files = [];
  var TAG;
  if (branch !== 'gh-pages') {
    TAG = '[gh-pages (' + branch + ')]';
  } else {
    TAG = '[gh-pages]';
  }

  return new Transform({
    objectMode: true,
    transform: function collectFiles(file, enc, cb) {
      if (file.isNull()) {
        cb(null, file);
        return;
      }

      if (file.isStream()) {
        cb(new gutil.PluginError('gulp-gh-pages', 'Stream content is not supported'));
        return;
      }

      files.push(file);
      cb(null, file);
    },
    flush: function publish(cb) {
      if (files.length === 0) {
        gutil.log(TAG, 'No files in the stream.');
        cb();
        return;
      }

      var newBranchCreated = false;

      git.prepareRepo(options.remoteUrl, origin, options.cacheDir || '.publish')
      .then(function(repo) {
        gutil.log(TAG, 'Cloning repo');
        if (repo._localBranches.indexOf(branch) > -1) {
          gutil.log(TAG, 'Checkout branch `' + branch + '`');
          return repo.checkoutBranch(branch);
        }

        if (repo._remoteBranches.indexOf(origin + '/' + branch) > -1) {
          gutil.log(TAG, 'Checkout remote branch `' + branch + '`');
          return repo.checkoutBranch(branch);
        }

        gutil.log(TAG, 'Create branch `' + branch + '` and checkout');
        newBranchCreated = true;
        return repo.createAndCheckoutBranch(branch);
      })
      .then(function(repo) {
        return wrapPromise(function(resolve, reject) {
          if (newBranchCreated) {
            resolve(repo);
            return;
          }

          // updating to avoid having local cache not up to date
          gutil.log(TAG, 'Updating repository');
          repo._repo.git('pull', function(err) {
            if (err) {
              reject(err);
              return;
            }
            resolve(repo);
          });
        });
      })
      .then(function(repo) {
        // remove all files
        return wrapPromise(function(resolve, reject) {
          repo._repo.remove('.', {r: true}, function(err) {
            if (err) {
              reject(err);
              return;
            }
            resolve(repo.status());
          });
        });
      })
      .then(function(repo) {
        gutil.log(TAG, 'Copying files to repository');

        return wrapPromise(function(resolve, reject) {
          var destStream = vinylFs.dest(repo._repo.path)
          .on('error', reject)
          .on('end', function() {
            resolve(repo);
          })
          .resume();

          files.forEach(function(file) {
            destStream.write(file);
          });

          destStream.end();
        });
      })
      .then(function(repo) {
        return repo.addFiles('.', {force: options.force || false});
      })
      .then(function(repo) {
        var filesToBeCommitted = Object.keys(repo._staged).length;
        if (filesToBeCommitted === 0) {
          gutil.log(TAG, 'No files have changed.');
          cb();
          return;
        }

        gutil.log(TAG, 'Adding ' + filesToBeCommitted + ' files.');
        gutil.log(TAG, 'Committing "' + message + '"');
        repo.commit(message).then(function(newRepo) {
          if (options.push === undefined || options.push) {
            gutil.log(TAG, 'Pushing to remote.');
            newRepo._repo.git('push', {
              'set-upstream': true
            }, [origin, newRepo._currentBranch], function(err) {
              if (err) {
                cb(err);
                return;
              }
              cb();
            });
            return;
          }
          cb();
        }, cb);
      })
      .catch(function(err) {
        setImmediate(function() {
          cb(new gutil.PluginError('gulp-gh-pages', err));
        });
      });
    }
  });
};
