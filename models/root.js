var AV = require('leancloud-storage');
var log = require("log4js").getLogger("app");

exports.root = function(req, res) {
  //use AV user way
  var currentUser = AV.User.current();
  if (currentUser) {
    res.sendfile('./public/home.html');
  } else {
    //currentUser is null, open the login page
    res.redirect('/login');
  }
}

exports.getLogin = function(req, res) {
  res.sendfile('./public/login.html');
}

exports.login = function(req, res) {
  console.log('this is login post');
  console.log('req', req.body);
  var name = req.body.username;
  var pwd = req.body.pwd;
  AV.User.logIn(name, pwd).then(function(loginUser) {
    console.log('successfully log in');
    res.send({
      "status": 200,
      'data': loginUser
    })
  }, function(error) {
    console.log(error);
    if (error.code === 211) {
      res.status(error.code).send({
        "status": error.code,
        "msg": "cant not find the user"
      })
    }
    if (error.code === 210) {
      res.status(error.code).send({
        "status": error.code,
        "msg": "user name and password didn't match"
      })
    }
  });
}

exports.getSignUp= function(req, res) {
  res.sendfile('./public/signup.html')
}

exports.logout = function(req, res, next) {
  AV.User.logOut();
  res.redirect('/login');
}

exports.signup = function(req, res) {
  var user = new AV.User();
  var name = req.body.username,
    pwd = req.body.pwd;
  user.setUsername(name);
  user.setPassword(pwd);
  user.signUp().then(function(loginedUser) {
    console.log('succesffly sign up');
    res.redirect("/");
  })
}
