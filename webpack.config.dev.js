var path = require('path');
var webpack = require('webpack');

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
    ],
    resolve: {
        extensions: ['', '.js', '.json', '.coffee', '.css', '.scss']
    },
    module: {
        loaders: [{
            test: /\.coffee$/,
            loaders: ['coffee-loader'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.css$/,
            loader: "style!css?importLoaders=1"
        }, {
            test: /\.scss$/,
            loader: "style!css!autoprefixer!sass"
        }, {
            test: /\.handlebars$/,
            loader: "handlebars-loader"
        }]
    }
};
