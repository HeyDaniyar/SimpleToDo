var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var database = require('./config/database');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var routes = require('./route/routes.js');
var path = require('path');
var log4js = require('log4js');
var session = require('express-session');
var open = require('open');
var AV = require('leancloud-storage');
var APP_ID = '9WeebXiqJ76O4rezX4nFKnis-gzGzoHsz';
var APP_KEY = 'y9ipgiiPTEyiHoo3FNTzGjRb';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

//for pass the object in http post
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.listen(port);
console.log("App listening on port " + port);
open('http://localhost:' + port);
//add log
var log = log4js.getLogger("app");
app.use(log4js.connectLogger(log4js.getLogger("http"), {
  level: 'auto'
}));
// add session and cookie
app.use(cookieParser());

app.use(session({
  secret: 'SimpleTodo',
  cookie: {
    maxAge: 1000 * 3600 * 24 * 365,
  },
  resave: false,
  saveUninitialized: true
}));
routes(app);
