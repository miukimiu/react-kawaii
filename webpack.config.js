const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
     library: ["react-kawaii"],
     libraryTarget: 'umd',
     publicPath: '/lib/',
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
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
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
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
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [
          autoprefixer,
        ],
      },
    }),
  ]
};
