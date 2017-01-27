var config = {
	param1: '', // example
	param2: process.env.NODE_ENV === 'development' ? 'foo' : 'bar', // example
	git: {
		remoteList: ['origin', 'heroku'] // add any other remotes here
	},
	app_name: 'reactatouille Boilerplate', // your app name here
	build_name: 'v0.5b' // name your build here for referencing
}

// Modified production configuration parameters
if (process.env.NODE_ENV === 'production') {
	config.param1 = 'valueProduction';
}

module.exports = config;
