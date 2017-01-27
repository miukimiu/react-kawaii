var jsdom = require('jsdom').jsdom
var tape = require('tape')

var isDom = require('./index')

tape('is-dom', function (t) {
  global.document = jsdom('<html><body></body></html>')
  global.window = document.parentWindow

  t.test('should check if supplied argument is a dom node', function (t) {
    t.plan(13)
    t.equal(isDom(null), false)
    t.equal(isDom(null), false)
    t.equal(isDom(false), false)
    t.equal(isDom(new Date()), false)
    t.equal(isDom(), false)
    t.equal(isDom([]), false)
    t.equal(isDom(2), false)
    t.equal(isDom('foo'), false)
    t.equal(isDom(/asda/), false)
    t.equal(isDom({}), false)
    t.equal(isDom({nodeType: 1, nodeName: 'BODY'}), true)
    t.equal(isDom(global.window), false)
    t.equal(isDom(global.document), true)
  })
})
