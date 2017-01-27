var assert = require('assert');
var requireDir = require('..');

// first test without recursing *or* duplicates:
assert.deepEqual(requireDir('./duplicates'), {
    a: 'a.js',
    b: 'b.json',
    d: 'd.js',
});

// then test with duplicates but without recursing:
assert.deepEqual(requireDir('./duplicates', {duplicates: true}), {
    a: 'a.js',
    'a.js': 'a.js',
    b: 'b.json',
    'b.json': 'b.json',
    d: 'd.js',
    'd.js': 'd.js',
    'd.json': 'd.json',
});

// finally, test with duplicates while recursing:
assert.deepEqual(requireDir('./duplicates', {duplicates: true, recurse: true}), {
    a: 'a.js',
    'a.js': 'a.js',
    b: {
        '1': '1.js',
        '1.js': '1.js',
        '2': '2.js',
        '2.js': '2.js',
        '2.json': '2.json',
    },
    'b.json': 'b.json',
    c: {
        '3': '3.json',
        '3.json': '3.json',
    },
    d: 'd.js',
    'd.js': 'd.js',
    'd.json': 'd.json',
});

console.log('Duplicate tests passed.');
