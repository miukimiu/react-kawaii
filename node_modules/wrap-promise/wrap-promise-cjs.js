/*!
 * wrap-promise | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/wrap-promise
*/
function wrapPromise(fn) {
  'use strict';

  if (typeof fn !== 'function') {
    throw new TypeError(fn + ' is not a function. Argument must be a function.');
  }

  var resolve;
  var reject;

  var promise = new wrapPromise.Promise(function(_resolve, _reject) {
    resolve = _resolve;
    reject = _reject;
  });

  fn(resolve, reject);

  return promise;
}

(module.exports = wrapPromise).Promise = global.Promise || require('es6-promise').Promise;
