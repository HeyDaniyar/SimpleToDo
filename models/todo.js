var AV = require('leancloud-storage');
var fs = require('fs');
var request = require("request");

//get current date
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
var date = year + '-' + month + '-' + day;

exports.getTodayTask = function(req, res, nex) {
  var query = new AV.Query('Todo');
  //check out if there is any today task existed
  query.equalTo('date', date);
  query.find().then(function(results) {
    console.log('successfully get task', results);
    res.send(results);
  }, function(error) {
    console.log('there is no any task today');
    res.send(null);
  });
}

exports.postTodo = function(req, res, next) {
  var tasksData = req.body.data;
  var objectId = req.body.id;
  // the first param is className，the second is  objectId
  //when there is no object id ,the lean cloud will automatically create new Todo
  var todo = AV.Object.createWithoutData('Todo', objectId);
  //uplate the taks
  todo.set('tasks', tasksData);
  todo.set('date',date)
  // save to leancloud
  todo.save().then(function(todo) {
      console.log('New Object created with objectId:', todo.id);
      res.send(todo.id)
    }, function(err) {
      console.log('Failed to create new object', err.message);
    })
}
