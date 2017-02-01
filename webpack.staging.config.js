var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: [
		'./js/index.js'
	],
	output: {
		path: __dirname + '/dist/staging',
	    filename: 'js/bundle-[hash].js',
	    publicPath: '/assets'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					'babel-loader'
				]
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallbackLoader: "style-loader",
					loader: ["css-loader", "sass-loader"]
				})
			},
			// { test: /\.scss$/, loader: ExtractTextPlugin.extract('style','css!sass') },
			{
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				use: [
					'file-loader?name=[path][name].[ext]&outputPath=/assets/fonts/&publicPath=/assets/fonts/'
				]
			},
			{
				test: /\.(jpg|png|gif|svg)$/i,
				use: [
					'file-loader?name=[path][name].[ext]?[hash]&outputPath=/assets/&publicPath=/assets/'
				]
			}
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
