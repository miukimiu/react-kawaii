# requireDir()

Node helper to `require()` directories. The directory's files are examined,
and each one that can be `require()`'d is `require()`'d and returned as part
of a hash from that file's basename to its exported contents.

## Example

Given this directory structure:

```
dir
+ a.js
+ b.json
+ c.coffee
+ d.txt
```

`requireDir('./dir')` will return the equivalent of:

```js
{ a: require('./dir/a.js')
, b: require('./dir/b.json')
}
```

And if CoffeeScript was registered, `c.coffee` will also be returned.

## Installation

```
npm install require-dir
```

Note that this package is *not* `requireDir` — turns out that's already
[taken](https://github.com/JamesEggers1/node-requiredir)! ;)

## Usage

Basic usage that examines only directories' immediate files:

```js
var requireDir = require('require-dir');
var dir = requireDir('./path/to/dir');
```

You can optionally customize the behavior by passing an extra options object:

```js
var dir = requireDir('./path/to/dir', {recurse: true});
```

## Options

`recurse`: Whether to recursively `require()` subdirectories too.
Default is false.

`duplicates`: By default, if multiple files share the same basename, only the
highest priority one is `require()`'d and returned. (Priority is determined by
the order of `require.extensions` keys, with directories taking precedence
over files if `recurse` is true.) Specifying this option `require()`'s all
files and returns full filename keys in addition to basename keys.
Default is false.

E.g. in the example above, if there were also an `a.json`, the behavior would
be the same by default, but specifying `duplicates: true` would yield:

```js
{ a: require('./dir/a.js')
, 'a.js': require('./dir/a.js')
, 'a.json': require('./dir/a.json')
, b: require('./dir/b.json')
, 'b.json': require('./dir/b.json')
}
```

There might be more options in the future. ;)

## Tips

If you want to `require()` the same directory in multiple places, you can do
this in the directory itself! Just make an `index.js` file with the following:

```js
module.exports = require('require-dir')();   // defaults to '.'
```

And don't worry, the calling file is always ignored to prevent infinite loops.

## TODO

It'd be awesome if this could work with the regular `require()`, e.g. like a
regular `require()` hook. Not sure that's possible though; directories are
already special-cased to look for an `index` file or `package.json`.

An `ignore` option would be nice: a string or regex, or an array of either or
both, of paths, relative to the directory, to ignore. String paths can be
extensionless to ignore all extensions for that path. Supporting shell-style
globs in string paths would be nice.

Currently, basenames are derived for directories too — e.g. a directory named
`a.txt` will be returned as `a` when recursing — but should that be the case?
Maybe directories should always be returned by their full name, and/or maybe
this behavior should be customizable. This is hopefully an edge case.

## License

MIT. &copy; 2012 Aseem Kishore.
