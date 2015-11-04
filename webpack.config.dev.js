var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
    './src/index.coffee'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('styles.css')
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.coffee', '.css', '.scss', '.hbs']
  },
  node: {
    fs: 'empty'
  },
  module: {
    loaders: [{
      test: /\.coffee$/,
      loaders: ['coffee-loader'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css?importLoaders=1')
    }, {
      test: /\.scss$/,
      loader: 'style!css?importLoaders=2&sourceMap!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap'
    }, {
      test: /\.hbs$/,
      loader: 'handlebars-loader'
    }]
  }
};
