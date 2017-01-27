#gulp-git
[![Build Status](https://travis-ci.org/stevelacy/gulp-git.png?branch=master)](https://travis-ci.org/stevelacy/gulp-git)
[![NPM version](https://badge.fury.io/js/gulp-git.png)](http://badge.fury.io/js/gulp-git)

<table>
<tr>
<td>Package</td><td>gulp-git</td>
</tr>
<tr>
<td>Description</td>
<td>Git plugin for gulp (gulpjs.com)</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.9</td>
</tr>
<tr>
<td>Gulp Version</td>
<td>3.x</td>
</tr>
</table>

## Usage
### Install
    npm install gulp-git --save

#### 0.4.0 introduced Breaking Changes!
Git actions which did not require a [Vinyl](https://github.com/wearefractal/vinyl) file were refactored.
Please review the following docs for changes:
##Example

```javascript
var gulp = require('gulp');
var git = require('gulp-git');

// Run git init
// src is the root folder for git to initialize
gulp.task('init', function(){
  git.init(function (err) {
    if (err) throw err;
  });
});

// Run git init with options
gulp.task('init', function(){
  git.init({args: '--quiet --bare'}, function (err) {
    if (err) throw err;
  });
});

// Run git add
// src is the file(s) to add (or ./*)
gulp.task('add', function(){
  return gulp.src('./git-test/*')
    .pipe(git.add());
});

// Run git add with options
gulp.task('add', function(){
  return gulp.src('./git-test/*')
    .pipe(git.add({args: '-f -i -p'}));
});

// Run git commit
// src are the files to commit (or ./*)
gulp.task('commit', function(){
  return gulp.src('./git-test/*')
    .pipe(git.commit('initial commit'));
});

// Run git commit with options
gulp.task('commit', function(){
  return gulp.src('./git-test/*')
    .pipe(git.commit('initial commit', {args: '-A --amend -s'}));
});

// Run git commit without checking for a message using raw arguments
gulp.task('commit', function(){
  return gulp.src('./git-test/*')
    .pipe(git.commit(undefined, {
      args: '-m "initial commit"',
      disableMessageRequirement: true
    }));
});

// Run git commit without appending a path to the commits
gulp.task('commit', function(){
  return gulp.src('./git-test/*')
    .pipe(git.commit('initial commit', {
      disableAppendPaths: true
    }));
});

// Run git commit, passing multiple messages as if calling
// git commit -m "initial commit" -m "additional message"
gulp.task('commit', function(){
  return gulp.src('./git-test/*')
    .pipe(git.commit(['initial commit', 'additional message']));
});

// Run git commit, emiting 'data' event during progress
// This is useful when you have long running githooks
// and want to show progress to your users on screen
gulp.task('commit', function(){
  return gulp.src('./git-test/*')
    .pipe(git.commit('initial commit', {emitData:true}))
    .on('data',function(data) {
      console.log(data);
    });
});

// Run git remote add
// remote is the remote repo
// repo is the https url of the repo
gulp.task('addremote', function(){
  git.addRemote('origin', 'https://github.com/stevelacy/git-test', function (err) {
    if (err) throw err;
  });
});

// Run git remote remove
// remote is the remote repo
gulp.task('removeremote', function(){
  git.removeRemote('origin', function (err) {
    if (err) throw err;
  });
});

// Run git push
// remote is the remote repo
// branch is the remote branch to push to
gulp.task('push', function(){
  git.push('origin', 'master', function (err) {
    if (err) throw err;
  });
});

// Run git push with options
// branch is the remote branch to push to
gulp.task('push', function(){
  git.push('origin', 'master', {args: " -f"}, function (err) {
    if (err) throw err;
  });
});

// Run git push with multiple branches and tags
gulp.task('push', function(){
  git.push('origin', ['master', 'develop'], {args: " --tags"}, function (err) {
    if (err) throw err;
  });
});

// Run git pull
// remote is the remote repo
// branch is the remote branch to pull from
gulp.task('pull', function(){
  git.pull('origin', 'master', {args: '--rebase'}, function (err) {
    if (err) throw err;
  });
});

// Run git pull from multiple branches
gulp.task('pull', function(){
  git.pull('origin', ['master', 'develop'], function (err) {
    if (err) throw err;
  });
});

// Run git fetch
// Fetch refs from all remotes
gulp.task('fetch', function(){
  git.fetch('', '', {args: '--all'}, function (err) {
    if (err) throw err;
  });
});

// Run git fetch
// Fetch refs from origin
gulp.task('fetch', function(){
  git.fetch('origin', '', function (err) {
    if (err) throw err;
  });
});

// Clone a remote repo
gulp.task('clone', function(){
  git.clone('https://github.com/stevelacy/gulp-git', function (err) {
    if (err) throw err;
  });
});

// Clone remote repo to sub folder ($CWD/sub/folder/git-test)
gulp.task('clonesub', function() {
  git.clone('https://github.com/stevelacy/git-test', {args: './sub/folder'}, function(err) {
    // handle err
  });
});

// Tag the repo with a version
gulp.task('tag', function(){
  git.tag('v1.1.1', 'Version message', function (err) {
    if (err) throw err;
  });
});

// Tag the repo with a version and empty message
gulp.task('tag', function(){
  git.tag('v1.1.1', '', function (err) {
    if (err) throw err;
  });
});

// Tag the repo With signed key
gulp.task('tagsec', function(){
  git.tag('v1.1.1', 'Version message with signed key', {signed: true}, function (err) {
    if (err) throw err;
  });
});

// Create a git branch
gulp.task('branch', function(){
  git.branch('newBranch', function (err) {
    if (err) throw err;
  });
});

// Checkout a git branch
gulp.task('checkout', function(){
  git.checkout('branchName', function (err) {
    if (err) throw err;
  });
});

// Create and switch to a git branch
gulp.task('checkout', function(){
  git.checkout('branchName', {args:'-b'}, function (err) {
    if (err) throw err;
  });
});

// Merge branches to master
gulp.task('merge', function(){
  git.merge('branchName', function (err) {
    if (err) throw err;
  });
});

// Reset a commit
gulp.task('reset', function(){
  git.reset('SHA', function (err) {
    if (err) throw err;
  });
});

// Git rm a file or folder
gulp.task('rm', function(){
  return gulp.src('./gruntfile.js')
    .pipe(git.rm());
});

gulp.task('addSubmodule', function(){
  git.addSubmodule('https://github.com/stevelacy/git-test', 'git-test', { args: '-b master'});
});

gulp.task('updateSubmodules', function(){
  git.updateSubmodule({ args: '--init' });
});

// Working tree status
gulp.task('status', function(){
  git.status({args: '--porcelain'}, function (err, stdout) {
    if (err) throw err;
  });
});

// Other actions that do not require a Vinyl
gulp.task('log', function(){
  git.exec({args : 'log --follow index.js'}, function (err, stdout) {
    if (err) throw err;
  });
});

// Git clean files
gulp.task('clean', function() {
  git.clean({ args: '-f' }, function (err) {
    if(err) throw err;
  });
});

// Run gulp's default task
gulp.task('default',['add']);
```

##API

### git.init(opt, cb)
`git init`

Creates an empty git repo

`opt`: Object (optional) `{args: 'options', cwd: '/cwd/path', quiet: true, maxBuffer: 200 * 1024}`

`cb`: function, passed err if any

```js
git.init({args:'options'}, function (err) {
  //if (err) ...
});
```

### git.clone(remote, opt, cb)
`git clone <remote> <options>`

Clones a remote repo for the first time

`remote`: String, remote url

`opt`: Object (optional) `{args: 'options', cwd: '/cwd/path', quiet: true, maxBuffer: 200 * 1024}`

`cb`: function, passed err if any

```js
git.clone('https://remote.git', function (err) {
  //if (err) ...
});
```
A desination folder or subfolder can be set with `args: '<destination>'`
```
git.clone('https://remote.git', {args: './sub/folder'}, function (err) {
  //if (err) ...
});
```

### git.add(opt)
`git add <files>`

Adds files to repo

`opt`: Object (optional) `{args: 'options', quiet: true, maxBuffer: 200 * 1024}`

```js
gulp.src('./*')
  .pipe(git.add());
});
```

### git.commit(message, opt)
`git commit -m <message> <files>`

Commits changes to repo

`message`: String, commit message

`opt`: Object (optional) `{args: 'options', cwd: '/cwd/path', maxBuffer: 200 * 1024, quiet: true, disableMessageRequirement: false, disableAppendPaths: false, multiline: false}`

```js
gulp.src('./*')
  .pipe(git.commit('commit message'));
});
```

### git.addRemote(remote, url, opt, cb)
`git remote add <remote> <repo https url>`

Adds remote repo url

`remote`: String, name of remote, default: `origin`

`url`: String, url of remote

`opt`: Object (optional) `{args: 'options', cwd: '/cwd/path', quiet: true, maxBuffer: 200 * 1024}`

`cb`: function, passed err if any

```js
git.addRemote('origin', 'git-repo-url', function (err) {
  //if (err) ...
});
```

### git.removeRemote(remote, opt, cb)
`git remote remove <remote>`

Removes remote repo

`remote`: String, name of remote

`opt`: Object (optional) `{args: 'options', cwd: '/cwd/path', quiet: true, maxBuffer: 200 * 1024}`

`cb`: function, passed err if any

```js
git.removeRemote('origin', function (err) {
  //if (err) ...
});
```

### git.fetch(remote, branch, opt, cb)
`git fetch <remote> <branch>`

Fetches refs and objects from remote repo

`remote`: String, name of remote, default: `origin`

`branch`: String, branch, default: ``

`opt`: Object (optional) `{args: 'options', cwd: '/cwd/path', quiet: true, maxBuffer: 200 * 1024}`

`cb`: function, passed err if any

```js
git.fetch('origin', '', function (err) {
  //if (err) ...
});
```

### git.pull(remote, branch, opt, cb)
`git pull <remote> <branch>`

Pulls changes from remote repo

`remote`: String, name of remote, default: `undefined`

`branch`: String || Array, branch, default: `undefined`

`opt`: Object (optional) `{args: 'options', cwd: '/cwd/path', quiet: true, maxBuffer: 200 * 1024}`

`cb`: function, passed err if any

```js
git.pull('origin', 'master', function (err) {
  //if (err) ...
});

// without any remote or branches
git.pull(function(err){
  //if (err) ...
});

// with only a remote
git.pull('upstream', function(err){
  //if (err) ...
});

// with remote and an array of branches
git.pull('upstream' ['dev', 'master'], function(err){
  //if (err) ...
});
```

### git.push(remote, branch, opt, cb)
`git push <remote> <branch>`

Pushes changes to remote repo

`remote`: String, name of remote, default: `origin`

`branch`: String (may be `null`), branch, default: `master`

`opt`: Object (optional) `{args: 'options', cwd: '/cwd/path', quiet: true}`

`cb`: function, passed err if any

```js
git.push('origin', 'master', function (err) {
  //if (err) ...
});
```

### git.tag(version, message, opt, cb)
`git tag -a/s <version> -m <message>`

Tags repo with release version, returns all tags when used without arguments

`version`: String (optional), tag name

`message`: String (optional), tag message

`opt`: Object (optional) `{args: 'options', cwd: '/cwd/path', quiet: true, maxBuffer: 200 * 1024}`

`cb`: function, passed err if any

```js
git.tag('v1.1.1', 'Version message', function (err) {
  //if (err) ...
});
```

if options.signed is set to true, the tag will use the git secure key:
`git.tag('v1.1.1', 'Version message with signed key', {signed: true});`

### git.branch(branch, opt, cb)
`git branch <new branch name>`

Creates a new branch but doesn't switch to it

(Want to switch as you create? Use `git.checkout({args:'-b'})`.)

`branch`: String, branch

`opt`: Object (optional) `{args: 'options', cwd: '/cwd/path', quiet: true, maxBuffer: 200 * 1024}`

`cb`: function, passed err if any

```js
git.branch('development', function (err) {
  //if (err) ...
});
```

### git.checkout(branch, opt, cb)
`git checkout <new branch name>`

Checkout a new branch with files

`branch`: String, branch

`opt`: Object (optional) `{args: 'options', cwd: '/cwd/path', quiet: true, maxBuffer: 200 * 1024}`

`cb`: function, passed err if any

```js
git.checkout('development', function (err) {
  //if (err) ...
});
```

If you want to create a branch and switch to it:

```js
git.checkout('development', {args:'-b'}, function (err) {
  //if (err) ...
});
```

If you want to checkout files (e.g. revert them) use git.checkoutFiles:

```js
gulp.src('./*')
  .pipe(git.checkoutFiles());
```

### git.checkoutFiles(opt)
`git checkout <list of files>`

Checkout (e.g. reset) files

`opt`: Object (optional) `{args: 'options', quiet: true, maxBuffer: 200 * 1024}`

```js
gulp.src('./*')
  .pipe(git.checkoutFiles());
```

### git.merge(branch, opt, cb)
`git merge <branch name> <options>`

Merges a branch into the current branch

`branch`: String, source branch

`opt`: Object (optional) `{args: 'options', cwd: '/cwd/path', quiet: true, maxBuffer: 200 * 1024}`

`cb`: function, passed err if any

```js
git.merge('development', function (err) {
  //if (err) ...
});
```

### git.rm()
`git rm <file> <options>`

Removes a file from git and deletes it

`opt`: Object (optional) `{args: 'options', quiet: true, maxBuffer: 200 * 1024}`

```js
gulp.src('./*')
  .pipe(git.commit('commit message'));
});
```

### git.reset(commit, opt, cb)
`git reset <SHA> <options>`

Resets working directory to specified commit hash

`commit`: String, commit hash or reference

`opt`: Object (optional) `{args: 'options', cwd: '/cwd/path', quiet: true, maxBuffer: 200 * 1024}`

`cb`: function, passed err if any

```js
git.reset('HEAD' {args:'--hard'}, function (err) {
  //if (err) ...
});
```

### git.revParse(opt, cb)
`git rev-parse <options>`

Get details about the repository

`opt`: Object (optional) `{args: 'options', cwd: '/cwd/path', quiet: true, maxBuffer: 200 * 1024}`

`cb`: function, passed err if any and command stdout


```js
git.revParse({args:'--short HEAD'}, function (err, hash) {
  //if (err) ...
  console.log('current git hash: '+hash);
});
```

### git.addSubmodule()
`git submodule add <options> <repository> <path>`

Options: Object

`.addSubmodule('https://repository.git', 'path', {args: "options", quiet: true})`

### git.updateSubmodule()
`git submodule update <options>`

Options: Object

`.updateSubmodule({args: "options", quiet: true})`


### git.status(opt, cb)
`git status <options>`

Show the working tree status

`opt`: Object (optional) `{args: 'options', cwd: '/cwd/path', maxBuffer: 200 * 1024, quiet: true}`

`cb`: function (optional), passed err and command stdout

```js
git.status({args : '--porcelain'}, function (err, stdout) {
  // if (err) ...
});
```

### git.exec(opt, cb)
`git <options>`

Run other git actions that do not require a Vinyl.

`opt`: Object (optional) `{args: 'options', cwd: '/cwd/path', maxBuffer: 200 * 1024, quiet: true}`

`cb`: function (optional), passed err and command stdout

```js
git.exec({args : 'log --follow index.js'}, function (err, stdout) {
  //if (err) ...
});
```

### git.clean(paths, opt, cb)
`git clean <options>`

Remove untracked files from the working tree

`paths`: String (optional), paths to be affected by clean operation

`opt`: Object (optional), `{args: 'options', cwd: '/cwd/path', quiet: true, maxBuffer: 200 * 1024}`

`cb`: function (optional), passed err if any

#### You can view more examples in the [example folder.](https://github.com/stevelacy/gulp-git/tree/master/examples)

<br/>
<br/>

### Possible errors:

#### stdout maxBuffer exceeded

Reported [here](https://github.com/stevelacy/gulp-git/issues/68).

If you get this error it means that the git process doesn't have enough memory.

Every function has an additional option: `maxBuffer`.

```js
gulp.task('pull', function(){
  git.pull('origin', 'master', {args: '--rebase', maxBuffer: Infinity}, function (err) {
    if (err) throw err;
  });
});
```



## LICENSE

(MIT License)

Copyright (c) 2015 Steve Lacy <me@slacy.me> slacy.me - Fractal <contact@wearefractal.com> wearefractal.com

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
