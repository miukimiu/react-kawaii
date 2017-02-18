"use strict";
var test = require("tape");
var commonSequence = require("../");

test(".commonSequence()", function(t){
    var arr1 = [ 1,2,3,4 ];
    var arr2 = [ 1,2,4,5 ];
    var expected = [ 1, 2 ];
    var result = commonSequence(arr1, arr2);
    t.deepEqual(result, expected);
    t.end();
});

test(".commonSequence() 2", function(t){
    var arr1 = [ 1,2,3,4 ];
    var arr2 = [ 0,2,3,4 ];
    var expected = [ ];
    var result = commonSequence(arr1, arr2);
    t.deepEqual(result, expected);
    t.end();
});
