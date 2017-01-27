var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: '#source-map',
	historyApiFallback: true,
	entry: [
		'react-hot-loader/patch',
		'webpack/hot/dev-server',
		'webpack-hot-middleware/client',
		'./src/js/index.js'
	],
	output: {
		path: __dirname + '/static',
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader"] },
            { test: /\.scss$/, loader: 'style!css!sass' },
			{ test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader' },
			{ test: /\.(jpg|png|gif|svg)$/i, loader: 'file-loader?name=[name].[ext]'}
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
				'NODE_ENV': JSON.stringify('development')
			}
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};
