var babel = require('babel-polyfill'),
	express = require('express'),
	path = require('path'),
	app = express(),
	router = express.Router(),
	port = process.env.PORT ? process.env.PORT : 3000,
	dist = path.join(__dirname, ('dist' + (process.env.NODE_ENV ? '/' + process.env.NODE_ENV : 'staging'))),
	superagent = require('superagent'),
	config = require('./config'),
	serverInstance = null,
	webpack = require('webpack'),
	webpackDevMiddleware = require('webpack-dev-middleware'),
	webpackHotMiddleware = require('webpack-hot-middleware'),
	webpackDevConfig = require('./webpack.dev.config'),
	compiler = webpack(webpackDevConfig),
	_ = require('lodash'),
	chalk = require('chalk')

process.on('uncaughtException', function (err) {
	throw err;
})

process.on('SIGINT', function () {
	serverInstance.close();
	process.exit(0);
})

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

/**
 * Healthcheck
 */
app.use('/healthcheck', function (req, res) {
	res.json({
		'env': {
			'NODE_ENV': process.env.NODE_ENV
		}
	});
	res.end();
});

router.use('/api/test', function (req, res) {
	superagent
		.get('https://jsonip.com/')
		.end(function (err, response) {
			res.send(response.body);
		});
});

// router order matters

// HMR only in development
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'staging') {
    console.log('Development environment: Starting webPack middleware...');

	var devMiddleware = webpackDevMiddleware(compiler, {
		noInfo: true,
		publicPath: webpackDevConfig.output.publicPath,
		stats: {
			colors: true,
			hash: false,
			version: true,
			timings: false,
			assets: false,
			chunks: false,
			modules: false,
			reasons: false,
			children: false,
			source: false,
			errors: true,
			errorDetails: true,
			warnings: true,
			publicPath: false
		}
	});

	router.use(devMiddleware);

	router.use(webpackHotMiddleware(compiler, {
		log: console.log
	}));

	router.use(function (req, res, next) {
		const reqPath = req.url
		// find the file that the browser is looking for
		const file = _.last(reqPath.split('/'))
		if ([webpackDevConfig.output.filename, 'index.html'].indexOf(file) !== -1) {
			res.end(devMiddleware.fileSystem.readFileSync(path.join(webpackDevConfig.output.path, file)));
		} else if (file.indexOf('.') === -1) {
			// if the url does not have an extension, assume they've navigated to something like /home and want index.html
			res.end(devMiddleware.fileSystem.readFileSync(path.join(webpackDevConfig.output.path, 'index.html')));
		} else {
			next();
		}
	});

} else {

    //Production needs physical files! (built via separate process)
	router.use('/assets', express.static(dist));


	// any other is mapped here
	router.get('*', function(req, res, next) {
		
		// Catch-all route after the ones you want to exclude like the example before '/' 
		// or exclude it here (this has the advantage of ordering however you'd like)
		if (req.url === '/foo' || req.url === '/bar') {
			return next()
		};

		res.sendFile(path.join(dist, 'index.html'));
	});
}

app.disable('x-powered-by');

app.use('/', router);

serverInstance = app.listen(port, function (error) {
	if (error) {
		console.log(error); // eslint-disable-line no-console
	}
	console.log(chalk.green('[' + config.app_name + ' | ' + process.env.NODE_ENV + ' | ' + config.build_name + '] listening on port ' + port + '!'));
});
