const webpack = require('webpack');
const open = require('open');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.dev');

new WebpackDevServer(webpack(config), config.devServer)
  .listen(config.port, '0.0.0.0', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:' + config.port);
    console.log('Opening your system browser...');
    open("http://localhost:" + config.port + '/webpack-dev-server/');
  });
