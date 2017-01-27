# gulp-gh-pages

[![NPM version](http://img.shields.io/npm/v/gulp-gh-pages.svg)](https://www.npmjs.com/package/gulp-gh-pages)
[![Build Status](https://travis-ci.org/shinnn/gulp-gh-pages.svg?branch=master)](https://travis-ci.org/shinnn/gulp-gh-pages)
[![Build status](https://ci.appveyor.com/api/projects/status/iskj8sml9luhkm21?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/gulp-gh-pages)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/gulp-gh-pages.svg)](https://coveralls.io/r/shinnn/gulp-gh-pages)
[![Dependency Status](https://img.shields.io/david/shinnn/gulp-gh-pages.svg?label=deps)](https://david-dm.org/shinnn/gulp-gh-pages)
[![devDependency Status](https://img.shields.io/david/dev/shinnn/gulp-gh-pages.svg?label=devDeps)](https://david-dm.org/shinnn/gulp-gh-pages#info=devDependencies)

[gulp](http://gulpjs.com/) plugin to publish contents to [Github pages](https://pages.github.com/)

## Installation

[Use npm](https://docs.npmjs.com/cli/install).

```sh
npm install --save-dev gulp-gh-pages
```

## Usage

Define a `deploy` task in your `gulpfile.js` (as below) which can be used to push to `gh-pages` going forward.

```javascript
var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
```

Now, you should be able to call your task by doing:

```she
gulp deploy
```

## API

```javascript
var ghPages = require('gulp-gh-pages');
```

### ghPages([*options*])

*options*: `Object`  
Return: `Object` ([stream.Transform](https://nodejs.org/api/stream.html#stream_class_stream_transform_1))

#### options.remoteUrl

Type: `String`  
Default: URL for the remote of the current dir (assumes a git repository)

By default `gulp-gh-pages` assumes the current working directory is a git repository and uses its remote url. If your `gulpfile.js` is not in a git repository, or if you want to push to a different remote url, you can specify it. Ensure you have write access to the repository.

#### options.origin

Type: `String`  
Default: `"origin"`

Git remote.

#### options.branch

Type: `String`  
Default: `"gh-pages"`

The branch where deploy will by done. Change to "master" for `username.github.io` projects.

#### options.cacheDir

Type: `String`  
Default: `.publish`

Set the directory path to keep a cache of the repository. If it doesn't exist, gulp-gh-pages automatically create it.

#### options.push

Type: `Boolean`  
Default: `true`

Allow you to make a build on the defined branch without pushing it to master. Useful for dry  run.

#### options.force

Type: `Boolean`  
Default: `false`

Force adding files to the `gh-pages` branch, even if they are ignored by `.gitignore` or `.gitignore_global`.

#### options.message

Type: `String`  
Default: `"Update [timestamp]"`

Edit commit message.

## License

Copyright (c) 2014 [Micheal Benedict](https://github.com/rowoot), 2015 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
