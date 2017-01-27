'use strict';
/*jshint asi:true */

var test = require('trap').test
  , parse = require('..')

function inspect(obj, depth) {
  return require('util').inspect(obj, false, depth || 5, true);
}

function assert(t, s, key) {
  t.deepEqual(parse(s), key, 'parsing ' + s + ' returns ' + inspect(key))
}

test('keys without modifiers', function (t) {
  assert(t ,  's'      ,  { name: 's'      ,  ctrl: false ,  meta: false ,  shift: false ,  alt: false ,  sequence: 's'})
  assert(t ,  'c'      ,  { name: 'c'      ,  ctrl: false ,  meta: false ,  shift: false ,  alt: false ,  sequence: 'c'})
  assert(t ,  'space'  ,  { name: 'space'  ,  ctrl: false ,  meta: false ,  shift: false ,  alt: false ,  sequence: ' ' })
  assert(t ,  'escape' ,  { name: 'escape' ,  ctrl: false ,  meta: false ,  shift: false ,  alt: false ,  sequence: '\u001b' })
})

test('keys with one modifier', function (t) {
  assert(t, 'ctrl-c'  ,  { name:'c' ,  ctrl: true  ,  meta: false ,  shift: false ,  alt: false, sequence: '\u0003' })
  assert(t, 'meta-c'  ,  { name:'c' ,  ctrl: false ,  meta: true  ,  shift: false ,  alt: false, sequence: 'c' })
  assert(t, 'shift-c' ,  { name:'c' ,  ctrl: false ,  meta: false ,  shift: true  ,  alt: false, sequence: 'C' })
  assert(t, 'alt-c'   ,  { name:'c' ,  ctrl: false ,  meta: false ,  shift: false ,  alt: true, sequence: 'c' })

  assert(t, 'ctrl-space', { name: 'space', ctrl: true, meta: false, shift: false, alt: false, sequence: '\u0000' })
})

test('keys with one modifier with mixed casing', function (t) {
  assert(t ,  'Ctrl-c'  ,  { name:'c' ,  ctrl: true  ,  meta: false ,  shift: false ,  alt: false ,  sequence: '\u0003' })
  assert(t ,  'meta-C'  ,  { name:'c' ,  ctrl: false ,  meta: true  ,  shift: false ,  alt: false ,  sequence: 'c' })
  assert(t ,  'Shift-c' ,  { name:'c' ,  ctrl: false ,  meta: false ,  shift: true  ,  alt: false ,  sequence: 'C' })
  assert(t ,  'ALT-c'   ,  { name:'c' ,  ctrl: false ,  meta: false ,  shift: false ,  alt: true  ,  sequence: 'c' })
})

test('keys with multiple modifiers', function (t) {
  assert(t ,  'shift-ctrl-c'          ,  { name:'c'       ,  ctrl: true  ,  meta: false ,  shift: true  ,  alt: false ,  sequence: '\u0003' })
  assert(t ,  'alt-meta-c'            ,  { name:'c'       ,  ctrl: false ,  meta: true  ,  shift: false ,  alt: true  ,  sequence: 'c' })
  assert(t ,  'shift-ctrl-meta-c'     ,  { name:'c'       ,  ctrl: true  ,  meta: true  ,  shift: true  ,  alt: false ,  sequence: '\u0003' })
  assert(t ,  'alt-shift-ctrl-meta-c' ,  { name:'c'       ,  ctrl: true  ,  meta: true  ,  shift: true  ,  alt: true  ,  sequence: '\u0003' })
  assert(t ,  'shift-ctrl-escape'     ,  { name: 'escape' ,  ctrl: true  ,  meta: false ,  shift: true  ,  alt: false ,  sequence: 'escape' })
})
