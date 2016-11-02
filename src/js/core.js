angular.module('daniTodo', ['ngRoute'])
	.config(function($routeProvider) {
		'use strict'
		 $routeProvider
	      .when('/', {
	        templateUrl: 'main.html',
	      })
	      .otherwise({
        	redirectTo: '/'
      	  });
})
