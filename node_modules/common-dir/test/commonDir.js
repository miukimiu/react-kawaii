var TestRunner = require('test-runner')
var os = require('os')
var commonDir = require('../')
var a = require('core-assert')

var runner = new TestRunner()

if (os.platform() === 'win32') {
  runner.test('commonDir: simple (win)', function (t) {
    var input = [
      'C:\\Users\\IEUser\\Documents\\GitHub\\wodge',
      'C:\\Users\\IEUser\\Documents\\GitHub\\wodge\\folder',
      'C:\\Users\\IEUser\\Documents\\GitHub\\wodge\\folder\\five',
      'C:\\Users\\IEUser\\Documents\\GitHub\\wodge\\folder\\four',
    ]
    a.strictEqual(commonDir(input), 'C:\\Users\\IEUser\\Documents\\GitHub\\')
  })

  runner.test('commonDir: wildly diff folders (win)', function (t) {
    var input = [
      'C:\\this\\that',
      'C:\\another\\something',
      'C:\\andagain\\different'
    ]
    a.strictEqual(commonDir(input), 'C:\\')
  })

  runner.test('commonDir: just one (win)', function (t) {
    var input = [
      'C:\\Users\\Lloyd\\Documents\\LEGO Creations\\MINDSTORMS EV3 Projects\\Randomness.ev3'
    ]
    a.strictEqual(commonDir(input), 'C:\\Users\\Lloyd\\Documents\\LEGO Creations\\MINDSTORMS EV3 Projects\\')
  })

} else {
  runner.test('commonDir: simple', function (t) {
    var input = [
      '/Users/Lloyd/Documents/Kunai/renamer/one',
      '/Users/Lloyd/Documents/Kunai/renamer/folder/folder/five',
      '/Users/Lloyd/Documents/Kunai/renamer/folder/four',
      '/Users/Lloyd/Documents/Kunai/another',
      '/Users/Lloyd/Documents/Kunai/renamer/two',
      '/Users/Lloyd/Documents/Kunai/renamer/folder/three',
      '/Users/Lloyd/Documents/Kunai/renamer'
    ]
    a.strictEqual(commonDir(input), '/Users/Lloyd/Documents/Kunai/')
  })

  runner.test('commonDir: wildly diff folders', function (t) {
    var input = [ '/this/that', '/another/something', '/andagain/different' ]
    a.strictEqual(commonDir(input), '/')
  })

  runner.test('commonDir: another', function (t) {
    var input = [
      '/Users/Lloyd/Documents/LEGO Creations/MINDSTORMS EV3 Projects/Randomness.ev3',
      '/Users/Lloyd/Desktop/Screen Shot 2014-03-27 at 10.00.12.png'
    ]
    a.strictEqual(commonDir(input), '/Users/Lloyd/')
  })

  runner.test('commonDir: just one', function (t) {
    var input = [
      '/Users/Lloyd/Documents/LEGO Creations/MINDSTORMS EV3 Projects/Randomness.ev3'
    ]
    a.strictEqual(commonDir(input), '/Users/Lloyd/Documents/LEGO Creations/MINDSTORMS EV3 Projects/')
  })

  runner.test('commonDir: all same folder', function (t) {
    var input = [
      '/Users/Lloyd/Documents/Kunai/renamer/one',
      '/Users/Lloyd/Documents/Kunai/renamer/two',
      '/Users/Lloyd/Documents/Kunai/renamer/three'
    ]
    a.strictEqual(commonDir(input), '/Users/Lloyd/Documents/Kunai/renamer/')
  })

  runner.test('commonDir: hangs', function (t) {
    var input = [
      'file1.txt',
      'file1.txt'
    ]
    a.strictEqual(commonDir(input), './')
  })

  runner.test('commonDir: file and parent folder', function (t) {
    var input = [
      '/Users/Lloyd/Documents/Kunai/renamer/one',
      '/Users/Lloyd/Documents/Kunai/renamer'
    ]
    a.strictEqual(commonDir(input), '/Users/Lloyd/Documents/Kunai/')
  })
}
