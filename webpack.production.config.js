var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: [
		'./src/js/index.js'
	],
	output: {
		path: __dirname + '/dist/production',
	    filename: 'js/bundle-[hash].js',
	    publicPath: '/assets'
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract('style','css!sass') },
			{ test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader?name=/fonts/[name].[ext]' },
			{ test: /\.(jpg|png|gif|svg)$/i, loader: 'file-loader?name=/images/[name].[ext]'}
		]
	},
	plugins: [
		new ExtractTextPlugin("css/[name]-[hash].min.css"),
		new HtmlWebpackPlugin({
			inject: true,
			template: __dirname + '/src/' + 'index.html',
			filename: 'index.html'
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.AggressiveMergingPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			mangle: true,
			compress: {
				warnings: false, // Suppress uglification warnings
				pure_getters: true,
				unsafe: true,
				unsafe_comps: true,
				screw_ie8: true,
				drop_console: true
			},
			output: {
				comments: false,
			},
			exclude: [/\.min\.js$/gi] // skip pre-minified libs
		}),
		new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0.8
		})
	]
};
