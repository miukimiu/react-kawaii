var config = {
	param1: 'value1',
	git: {
		remoteList: ['origin', 'heroku'] // add any other remotes here
	}
}

// Modified production configuration parameters
if (process.env.NODE_ENV === 'production') {
	config.param1 = 'valueProduction';
}

module.exports = config;