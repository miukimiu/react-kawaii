var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'./src/js/index.js'
	],
	output: {
		path: __dirname + '/dist',
	    filename: 'bundle-[hash].js',
		publicPath: '/'
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"] },
            { test: /\.scss$/, loader: 'style!css!sass' },
			{ test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader' },
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: "file?name=[path][name].[ext]"
			},
		]
	},
	plugins: [
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
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			sourceMap: false,
			output: {
				comments: false
			},
			compress: {
				warnings: false
			}
		})
	]
};
