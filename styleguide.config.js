const path = require('path');

module.exports = {
 title: 'My Great Style Guide',
 components: './src/js/components/*.js',

 updateWebpackConfig(webpackConfig) {
   // Your source files folder or array of folders, should not include node_modules
   const dir = path.join(__dirname, 'src');
   webpackConfig.module.loaders.push(
     // Babel loader will use your project’s .babelrc
     {
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         use: [
             'babel-loader'
         ]
     },
     // Other loaders that are needed for your components
     {
       test: /\.css$/,
       include: dir,
       loader: 'style!css?modules&importLoaders=1'
     }
   );
   return webpackConfig;
 },
};
