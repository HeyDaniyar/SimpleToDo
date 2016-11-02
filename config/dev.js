'ust strict'

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');
let HtmlWebpackPlugin = require('html-webpack-plugin');


let config = Object.assign({},baseConfig,{
  context:
  entry: {
    app:['webpack/hot/dev-server', './index.js']
  },
  cache:true,
  devtool:'eval-cheap-module-source-map',
  module:defaultSettings.getDefaultModule(),
  output:{
    publicPath = ""
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = config;
