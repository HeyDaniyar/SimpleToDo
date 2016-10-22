var Todo = require('../models/todo');
var Root = require('../models/root');

module.exports = function(app) {
	app.get("/", Root.root);
	app.get('/login',Root.getLogin);
	app.get("/logout", Root.logout);
	app.get("/signup", Root.getSignUp);
	app.post('/singup',Root.signup);
	app.post('/login',Root.login);
	app.get("/todos", Todo.getTodayTask);
	app.post('/todos',Todo.postTodo);
};
