const path = require('path');

module.exports = {
  title: 'react kawaii',
  components: './src/components/**/*.jsx',

  updateWebpackConfig(webpackConfig) {
    const dirs = [
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'styleguide'),
  ];

  // Supply your own renderers and styles below
  webpackConfig.resolve.alias[
    'rsg-components/StyleGuide/StyleGuideRenderer'
  ] = path.join(
        __dirname, 'styleguide/components/StyleGuide'
      );

  webpackConfig.resolve.alias[
    'rsg-components/ReactComponent/ReactComponentRenderer'
  ] = path.join(
    __dirname, 'styleguide/components/ReactComponent'
  );

  webpackConfig.resolve.alias[
    'rsg-components/Playground/PlaygroundRenderer'
  ] = path.join(
    __dirname, 'styleguide/components/Playground'
  );

  webpackConfig.module.loaders.push(
    // Babel loader will use your project’s .babelrc
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      include: dirs,
      use: [
         'babel-loader'
      ]
    },
    {
      test: /\.css$/,
      include: dirs,
      loader: 'style!css?modules&importLoaders=1'
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
     test: /\.(jpg|png|gif|svg)$/i,
     include: dirs,
     use: [
       'file-loader?name=[name].[ext]?[hash]/'
     ]
   }
 );
   return webpackConfig;
 },
};
