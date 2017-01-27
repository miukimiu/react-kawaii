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
		path: __dirname + '/dist/staging',
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
				'NODE_ENV': JSON.stringify('staging')
			}
		})
	]
};
