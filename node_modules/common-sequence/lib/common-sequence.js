"use strict";

/**
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
@module common-sequence
*/
module.exports = commonSequence;

/**
Returns the initial elements which both input arrays have in common
@param {Array} - first array to compare
@param {Array} - second array to compare
@returns {Array}
@alias module:common-sequence
*/
function commonSequence(a, b){
    var result = [];
    for (var i = 0; i < Math.min(a.length, b.length); i++){
        if (a[i] === b[i]){
            result.push(a[i]);
        } else {
            break;
        }
    }
    return result;
}
