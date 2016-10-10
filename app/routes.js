var Todo = require('./models/todo');
var Root = require('./models/root');

module.exports = function(app) {
	app.get("/", Root.root);
	app.get("/todos", Todo.getTodayTask);
	app.post('/todos',Todo.postTodo);
};
