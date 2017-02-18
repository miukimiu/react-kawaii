'use strict';

var has = require('has');

module.exports = stringify;

function stringify(value) {
  /* Nothing. */
  if (!value || typeof value !== 'object') {
    return null;
  }

  /* Node. */
  if (has(value, 'position') || has(value, 'type')) {
    return location(value.position);
  }

  /* Location. */
  if (has(value, 'start') || has(value, 'end')) {
    return location(value);
  }

  /* Position. */
  if (has(value, 'line') || has(value, 'column')) {
    return position(value);
  }

  /* ? */
  return null;
}

function position(pos) {
  if (!pos || typeof pos !== 'object') {
    pos = {};
  }

  return index(pos.line) + ':' + index(pos.column);
}

function location(loc) {
  if (!loc || typeof loc !== 'object') {
    loc = {};
  }

  return position(loc.start) + '-' + position(loc.end);
}

function index(value) {
  return value && typeof value === 'number' ? value : 1;
}
