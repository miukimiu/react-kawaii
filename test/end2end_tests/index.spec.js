// const Browser = require('zombie');

// Browser.localhost('localhost', 3000);

// describe('User visits the page', () => {

// 	const browser = new Browser();

// 	before(function (done) {
// 		return browser.visit('/', () => {

// 			browser.wait(() => {
// 				return document.querySelector('.app h1').getAttribute('style').indexOf('translateX') > -1;
// 			}, () => {
// 				console.log('Browser waited enought time for Tween animations to finish!');
// 				done();
// 			});

// 		});
// 	});

// 	describe('the content', () => {

// 		it ('should have the correct title', (done) => {

// 			browser.assert.evaluate('browser.querySelector(\'.app h1\').innerHTML', 'Reaclux Boilerplate');

// 			done();

// 		});

// 	});

// });