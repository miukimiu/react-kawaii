module.exports = function (wallaby) {
	return {
		files: [
			'source/**/*.js',
      'tests/**/*.js',
			'!source/**/*.spec.js',
		],

		tests: [
			'source/**/*.spec.js',
		],

		env: {
			type: 'node',
		},

		compilers: {
			'**/*.js': wallaby.compilers.babel(),
		},

		testFramework: 'ava',

		setup: function () {
			require('babel-polyfill');
		},

		debug: true,
	};
};
