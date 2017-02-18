[![view on npm](http://img.shields.io/npm/v/common-dir.svg)](https://www.npmjs.org/package/common-dir)
[![npm module downloads per month](http://img.shields.io/npm/dm/common-dir.svg)](https://www.npmjs.org/package/common-dir)
[![Build Status](https://travis-ci.org/75lb/common-dir.svg?branch=master)](https://travis-ci.org/75lb/common-dir)
[![Dependency Status](https://david-dm.org/75lb/common-dir.svg)](https://david-dm.org/75lb/common-dir)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

<a name="module_common-dir"></a>

## common-dir
<a name="exp_module_common-dir--commonDir"></a>

### commonDir(files) ⇒ <code>string</code> ⏏
commonDir returns the parent directory common to each path in the list

**Kind**: Exported function  
**Returns**: <code>string</code> - A single path ending with the path separator, e.g. '/user/some/folder/'  

| Param | Type | Description |
| --- | --- | --- |
| files | <code>Array</code> | An array of file paths to inspect |

**Example**  
```js
> var commonDir = require('common-dir')
> files = [
  '/Users/75lb/one/package.json',
  '/Users/75lb/one/test',
  '/Users/75lb/two/test/main.js'
]
> commonDir(files)
'/Users/75lb/'
```

* * *

&copy; 2014-16 Lloyd Brookes <75pound@gmail.com>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
