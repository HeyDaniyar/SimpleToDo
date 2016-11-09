const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const srcPath = path.join(__dirname, './src');

console.log('__dirname', __dirname);
module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    filename: 'app.js'
  },
  cache: false,
  devtool: false,
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      title: 'index',
      filename: '../dist/index.html',
      template: path.join(__dirname, './src/index.tmpl.ejs'),
      inject: 'body',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css']
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"],
    }, {
      test: /\.js$/,
      loader: 'ng-annotate',
      include: [srcPath],
      exclude: [path.join(__dirname, '../dist')]
    }, {
      test: /\.js$/,
      loaders: ['babel'],
      presets: [
        'es2015',
        'stage-2'
      ],
      include: path.join(__dirname, './src')
    }, {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream'
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml'
    }, ]
  },
}
