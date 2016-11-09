'use strict';
var express = require('express');
var timeout = require('connect-timeout');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var apiRouter = require('./server/api-router');
var AV = require('leanengine');

var app = express();
// 设置模板引擎
app.use(express.static(path.join(__dirname, './dist')))
app.set('view engine', 'ejs');

// 设置默认超时时间
app.use(timeout('15s'));

// 加载云函数定义
require('./server/cloud');
// 加载云引擎中间件
app.use(AV.express());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

// 可以将一类的路由单独保存在一个文件中
// app.use('/api', apiRouter);

app.use(function(req, res, next) {
  // 如果任何一个路由都没有返回响应，则抛出一个 404 异常给后续的异常处理器
  if (!res.headersSent) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  }
});

module.exports = app
