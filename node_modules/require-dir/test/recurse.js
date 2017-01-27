var assert = require('assert');
var requireDir = require('..');

// first test without recursing:
assert.deepEqual(requireDir('./recurse'), {
    a: 'a',
});

// then test with recursing:
assert.deepEqual(requireDir('./recurse', {recurse: true}), {
    a: 'a',
    b: {
        '1': {
            foo: 'foo',
            bar: 'bar',
        },
        '2': {}     // note how the directory is always returned
    },
    c: {
        '3': 3
    },
});

console.log('Recurse tests passed.');
