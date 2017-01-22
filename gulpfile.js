var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	webpack = require("webpack"),
	webpackDevServer = require("webpack-dev-server"),
	webpackDevConfig = require("./webpack.dev.config.js"),
	webpackProductionConfig = require("./webpack.production.config.js"),
	gutil = require('gulp-util'),
	babel = require('babel-core/register'),
	mocha = require('gulp-mocha'),
	spawn = require('child_process').spawn,
	port = 3000,
	open = require('open'),
	git = require('gulp-git'),
	config = require('./config');

gulp.task('html', function () {
    return gulp.src('src/index.html')
				.pipe(gulp.dest('dist'));
});

gulp.task("webpack:server", function(callback) {

	// modify some webpack config options
	var myConfig = Object.create(webpackDevConfig);
	myConfig.devtool = "eval";
	myConfig.debug = true;

	// Start a webpack-dev-server
	var server = new webpackDevServer(webpack(myConfig), {
		//noInfo: true,
		//watch: true,
		historyApiFallback: true,
		contentBase: './dist',
		hot: true,
		progress: true,
		open: true,
		stats: {
			colors: true
		},
		noInfo: true //  will disable informational messages unless there's an error.
	});

	server.listen(port, "0.0.0.0", function(err) {
		if(err) throw new gutil.PluginError("webpack-dev-server", err);
		gutil.log("[webpack-dev-server]", "http://localhost:" + port);
		gulp.start('openBrowser');
	});

});

gulp.task("build", ['test', 'html'], function () {
    // run webpack
    webpack(webpackProductionConfig, function (err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
		gutil.log("[webpack:errors]", stats.compilation.errors.toString({
			colors: true
		}));
		gutil.log("[webpack:warnings]", stats.compilation.warnings.toString({
			colors: true
		}));
		console.log('webpack compile success.');
    });
});

gulp.task('preview', function (cb) {
	var cmd = spawn('node', ['server.js'], { stdio: 'inherit' });
	open('http://localhost:8080', function (err) {
		if (err) throw err;
	});
	cmd.on('close', function (code) {
		console.log('my-task exited with code ' + code);
		cb(code);
	});
});

// todo: decide if called push or remote
// so far I decided to call it deploy (because the boilerplate, hopes the dev 
// sitcks with a PaaS / Heroku kind of)
gulp.task('deploy', function(){
	config.git.remoteList.forEach(function (v, k) {
		git.push(v, ['master'], null, function (err) {
			if (err) throw err;
		});
	});
});

gulp.task('unit_test', function () {
	return gulp.src('./test/unit_tests/**/*.spec.js', { read: false })
				.pipe(mocha({
					compilers: {
						js: babel
					}
				}))
				.once('end', function () {
					gulp.start('end2end_test');
				});
});

gulp.task('end2end_test', function () {
	return gulp.src('./test/end2end_tests/**/*.spec.js', { read: false })
				.pipe(mocha({
					timeout: 5000,
					compilers: {
						js: babel
					}
				}));
});

gulp.task('test', ['unit_test']);

gulp.task('openBrowser', function () {
  open('http://localhost:' + port, function (err) {
  	if (err) throw err;
  });
});

gulp.task('watch', function () {
	gulp.watch('./src/index.html', ['html']);
	gulp.watch('./src/js/**/*.js', ['test']);
});

gulp.task('dev', ['default']);

gulp.task('default', ['webpack:server', 'watch']);