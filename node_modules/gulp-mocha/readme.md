# gulp-mocha [![Build Status](https://travis-ci.org/sindresorhus/gulp-mocha.svg?branch=master)](https://travis-ci.org/sindresorhus/gulp-mocha)

> Run [Mocha](https://github.com/mochajs/mocha) tests

*Keep in mind that this is just a thin wrapper around Mocha and your issue is most likely with Mocha.*

**[Maintainer needed](https://github.com/sindresorhus/gulp-mocha/issues/128)**

---

<p align="center"><b>🔥 Want to strengthen your core JavaScript skills and master ES6?</b><br>I would personally recommend this awesome <a href="https://ES6.io/friend/AWESOME">ES6 course</a> by Wes Bos.</p>

---


## Install

```
$ npm install --save-dev gulp-mocha
```


## Usage

```js
const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('default', () => 
	gulp.src('test.js', {read: false})
		// gulp-mocha needs filepaths so you can't have any plugins before it
		.pipe(mocha({reporter: 'nyan'}))
);
```

> If you are writing a watch task to run your tests as you modify your `.js` files, be aware that you might run into issues. This plugin runs your Mocha tests within the same process as your watch task and state isn't reset between runs. If your tests eventually fail within the watch task but pass when run in a standalone task or with `mocha test`, then you need to use the [`gulp-spawn-mocha`](https://github.com/KenPowers/gulp-spawn-mocha) plugin.


## API

### mocha([options])

#### options

##### ui

Type: `string`<br>
Default: `bdd`<br>
Values: `bdd` `tdd` `qunit` `exports`

Interface to use.

##### reporter

Type: `string`<br>
Default: `spec`
Values: [Reporters](https://github.com/mochajs/mocha/tree/master/lib/reporters)

Reporter that will be used.

This option can also be used to utilize third-party reporters. For example, if you `npm install mocha-lcov-reporter` you can then do use `mocha-lcov-reporter` as value.

##### globals

Type: `Array`

List of accepted global variable names, example `['YUI']`. Accepts wildcards to match multiple global variables, e.g. `['gulp*']` or even `['*']`. See [Mocha globals option](http://mochajs.org/#globals-option).

##### timeout

Type: `number`<br>
Default: `2000`

Test-case timeout in milliseconds.

##### bail

Type: `boolean`<br>
Default: `false`

Bail on the first test failure.

##### ignoreLeaks

Type: `boolean`<br>
Default: `false`

Ignore global leaks.

##### grep

Type: `string`

Only run tests matching the given pattern which is internally compiled to a RegExp.

##### require

Type: `Array`

Require custom modules before tests are run.


## FAQ

### Test suite not exiting

If your test suite is not exiting it might be because you still have a lingering callback, most often caused by an open database connection. You should close this connection or do the following:

```js
gulp.task('default', () => 
	gulp.src('test.js')
		.pipe(mocha())
		.once('error', () => {
			process.exit(1);
		})
		.once('end', () => {
			process.exit();
		})
);
```

### Babel

Add `require('babel-core/register');` to the top of your `gulpfile.js`. Make sure to read the [Babel docs](https://babeljs.io/docs/usage/require/).


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
