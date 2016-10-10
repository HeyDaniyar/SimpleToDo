// set up ======================================================================
var express  = require('express');
var app      = express(); 								// create our app w/ express
var mongoose = require('mongoose'); 					// mongoose for mongodb
var port  	 = process.env.PORT || 8080; 				// set the port
var database = require('./config/database'); 			// load the database config
var morgan   = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var routes = require('./app/routes.js');
var path = require('path');
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
routes(app);
app.use(express.static(__dirname + '/public'));
// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
