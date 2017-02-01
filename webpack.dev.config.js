var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'inline-source-map',
	context: path.resolve(__dirname, 'src'),
	entry: [
		'react-hot-loader/patch',
		'webpack/hot/dev-server',
		'webpack-hot-middleware/client',
		'./js/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
		publicPath: '/assets'
	},
	devServer: {
		historyApiFallback: true,
		// enable HMR on the server
		hot: true,
		// match the output path
		contentBase: path.resolve(__dirname, 'dist'),
		// match the output `publicPath`
		publicPath: '/'
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
				exclude: /node_modules/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				use: [
					'file-loader'
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
		// enable HMR globally
		new webpack.HotModuleReplacementPlugin(),
		// prints more readable module names in the browser console on HMR updates
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
};
