'use strict'

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// //get the envirornment
// var env ='dev';
// process.env.NODE_ENV = env;
//
// const generateConfigs = (env) => {
//     let config = null;
//     config = require(path.join(__dirname,'cfg/base'));
//     return config;
// }
//
// /**
//  * Build the webpack configuration
//  * @param  {String} wantedEnv The wanted environment
//  * @return {Object} Webpack config
//  */
//
//  function buildConfig(wantedEnv) {
//     let vaildeEnv = 'dev';
//     return generateConfigs(validEnv);
//  }
//
//  module.exports = buildConfig(env)

const PATHS = {
  app: __dirname + '/app',
  bower: __dirname + '/app/bower_components'
};

module.exports = {
  entry:['./src/index.js'],
  output:{
    path:path.join(PATH.app,'dist'),
    filename:'app.js'
  },
  plugins:[new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({template:'./src/index.html'})
  ],
  module:{
    loaders:[{
      test:/\.css$/,
      loaders:['style','css']
    },{
      test:/\/.scss$/,
      loader:['style','css','sass']
    }]
  },
  devServer:{
    contentBase:'./dist',
    hot:true
  }
}
