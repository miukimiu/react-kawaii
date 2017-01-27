var gulp = require('gulp'),
	webpack = require("webpack"),
	webpackDevServer = require("webpack-dev-server"),
	webpackDevConfig = require("./webpack.dev.config.js"),
	webpackStagingConfig = require("./webpack.staging.config.js"),
	webpackProductionConfig = require("./webpack.production.config.js"),
	gutil = require('gulp-util'),
	babel = require('babel-core/register'),
	mocha = require('gulp-mocha'),
	spawn = require('child_process').spawn,
	port = 3000,
	open = require('open'),
	git = require('gulp-git'),
	config = require('./config'),
	chalk = require('chalk'),
	figlet = require('figlet'),
	clean = require('gulp-clean'),
	nullCompiler = require('./nullCompiler');


gulp.task('html', function () {
	var n = (['production', 'staging'].indexOf(process.argv[4]) > -1 && process.argv[4]) || 'staging';
	return gulp.src('src/index.html')
				.pipe(gulp.dest('dist/' + n));
});

gulp.task('build', ['clean', 'test', 'html'], function () {
	var n = (['production', 'staging'].indexOf(process.argv[4]) > -1 && process.argv[4]) || 'staging';
	gulp.start('build-' + n);
});

gulp.task("build-staging", function () {
    // run webpack
    webpack(webpackStagingConfig, function (err, stats) {
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
gulp.task("build-production", function () {
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
				.once('error', function () {
					process.exit(1);
				})
				.once('end', function () {

				});
});

// gulp.task('end2end_test', function () {
// 	return gulp.src('./test/end2end_tests/**/*.spec.js', { read: false })
// 				.pipe(mocha({
// 					timeout: 5000,
// 					compilers: {
// 						js: babel,
// 						png: nullCompiler,
// 						jpg: nullCompiler,
// 						gif: nullCompiler,
// 						svg: nullCompiler,
// 						sass: nullCompiler,
// 						css: nullCompiler
// 					}
// 				}))
// 				.once('end', function () {
// 					process.exit();
// 				});
// });

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

gulp.task('node-server', function (cb) {
	var cmd = spawn('node', ['server.js'], { stdio: 'inherit' });
	cmd.on('close', function (code) {
		console.log('my-task exited with code ' + code);
		cb(code);
	});
});

gulp.task('preview', function (cb) {

	var n = (['production', 'staging'].indexOf(process.argv[4]) > -1 && process.argv[4]) || false;

	if (n) {
		process.env.NODE_ENV = n;

		var cmd = spawn('node', ['server.js'], { stdio: 'inherit' });

		cmd.on('close', function (code) {
			console.log('my-task exited with code ' + code);
			cb(code);
		});

		setTimeout(function () {
			open('http://localhost:' + port, function (err) {
				if (err) throw err;
			});
		}, 1800);

	} else {
		console.log('Error: use the command `gulp preview --env [ENVIRONMENT]` to preview!')
	}


});

gulp.task('set-dev-env', function () {
	return process.env.NODE_ENV = 'development';
});

gulp.task('set-prod-env', function () {
	return process.env.NODE_ENV = 'production';
});

gulp.task('banner', function () {
	spawn('clear', [null], { stdio: 'inherit' });
	console.log(
		chalk.magenta(
			figlet.textSync('Reactatouille', { horizontalLayout: 'full' })
		),
		chalk.yellow.bold('\n' + ' ' + 'Boilerplate'),
		chalk.yellow('by Punkbit'),
		'\n',
		'\n'
	);
});

gulp.task('clean', function () {
	var n = (['production', 'staging'].indexOf(process.argv[4]) > -1 && process.argv[4]) || false;
	return gulp.src('./dist/' + n, { read: false })
			.pipe(clean());
});

gulp.task('default', ['banner', 'set-dev-env', 'node-server', 'watch']);
