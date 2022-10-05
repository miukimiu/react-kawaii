const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.ts',
  context: path.resolve(__dirname, 'src'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: ['react-kawaii'],
    libraryTarget: 'umd',
    publicPath: '/lib/',
    globalObject: 'this'
  }
};

// module.exports = {
//   context: path.resolve(__dirname, 'src'),
//   entry: './index.js',
//   output: {
//     path: path.resolve(__dirname, 'lib'),
//     filename: 'index.js',
//     library: ['react-kawaii'],
//     libraryTarget: 'umd',
//     publicPath: '/lib/',
//     globalObject: `typeof self !== 'undefined' ? self : this`,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: ['babel-loader']
//       },
//       {
//         test: /\.css$/,
//         loader: 'style-loader!css-loader?modules',
//         include: /flexboxgrid/
//       },
//       {
//         test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
//         use: ['file-loader']
//       },
//       {
//         test: /\.svg$/,
//         use: ['file-loader']
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['.js', '.jsx']
//   },
//   plugins: [
//     new webpack.LoaderOptionsPlugin({
//       options: {
//         context: __dirname,
//         postcss: [autoprefixer]
//       }
//     })
//   ]
// };
