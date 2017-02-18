[![view on npm](http://img.shields.io/npm/v/common-sequence.svg)](https://www.npmjs.org/package/common-sequence)
[![npm module downloads per month](http://img.shields.io/npm/dm/common-sequence.svg)](https://www.npmjs.org/package/common-sequence)
[![Build Status](https://travis-ci.org/75lb/common-sequence.svg?branch=master)](https://travis-ci.org/75lb/common-sequence)
[![Dependency Status](https://david-dm.org/75lb/common-sequence.svg)](https://david-dm.org/75lb/common-sequence)

<a name="module_common-sequence"></a>
## common-sequence
Returns an array containing the initial elements which both input arrays have in common.

A common use-case for this is discovering common ancestors between two file paths. 

```js
> commonSequence = require("common-sequence");

> pathA = "/Users/lloyd/Documents/75lb/dmd".split("/");
> pathB = "/Users/lloyd/Documents/75lb/array-tools".split("/");

> commonSequence(pathA, pathB).join("/");
'/Users/lloyd/Documents/75lb'
```

or a more trivial example:
```js
> a.commonSequence([ 1, 2, 3 ], [ 1, 2, 4 ])
[ 1, 2 ]
```

<a name="exp_module_common-sequence--commonSequence"></a>
### commonSequence(a, b) ⇒ <code>Array</code> ⏏
Returns the initial elements which both input arrays have in common

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Array</code> | first array to compare |
| b | <code>Array</code> | second array to compare |


* * *

&copy; 2015 Lloyd Brookes \<75pound@gmail.com\>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
