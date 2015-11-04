var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.coffee'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.coffee', '.css', '.scss', '.hbs']
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
      loader: ExtractTextPlugin.extract('style', 'css?importLoaders=2&sourceMap!autoprefixer!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true')
    }, {
      test: /\.hbs$/,
      loader: 'handlebars-loader'
    }]
  }
};
