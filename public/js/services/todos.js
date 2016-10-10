angular.module('daniTodo').factory('Todo', ['$http',function($http)  {
 return {
			getTodayTasks : function() {
				return $http.get('/todos');
			},
			create : function(reqBody) {
				return $http.post('/todos', reqBody);
			}
		}
}])
