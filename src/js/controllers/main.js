(function() {
  'use strict'
  angular.module('daniTodo').controller('ToDoController', ToDoController);

  function ToDoController($scope, Todo) {
    var vm = this;
    vm.formData = {
      level: '0',
      tag: ''
    };
    vm.todayTask = [];
    vm.showMenu = false;
    vm.showRemark = false;
    vm.showMenuId;
    vm.taskObjectId;
    vm.loading = true;
    vm.currentTaskIndex;

    var Task = {
        //get today task when first time load
        get: (function() {
          Todo.getTodayTasks().success(function(data) {
            //if there is no any task yet
            var tasks = data.tasks;
            vm.username = data.username;
            if (tasks.length === 0) {
              vm.showRemark = true;
              vm.loading = false;
              return;
            }
            console.log('get today task', data);
            vm.loading = false;
            vm.todayTask = tasks[0].tasks;
            vm.taskObjectId = tasks[0].objectId;
          });
        }()),
        create: function() {
          // if form is empty, nothing willm happen
          if (vm.formData.text !== undefined) {
            vm.showRemark = false;
            var newTask = newTaskHandler(vm.formData.text);
            vm.todayTask.push(newTask);
            console.log('vm.todayTask', vm.todayTask);
            vm.formData = {};
          }
        },
        delete: function(index) {
          console.log('index', index);
          var id = vm.todayTask[index].id;
          vm.todayTask.splice(index, 1);
        },
        undoFinish: function(index) {
          vm.todayTask[index].status = 'going';
        },
        update: function() {
          var reqBody = {
            data: vm.todayTask,
            id: vm.taskObjectId
          }
          Todo.create(reqBody).success(function(newObjId) {
            console.log('newObject Id ==',newObjId);
            //when add the task for first time;
            //we should get the right objectId
            vm.taskObjectId = newObjId;
          })
        },
        adjustColor: function(level) {
          //handle the color with different task level
          if (level === "2") {
            return "highLevel"
          }
          if (level === "1") {
            return "midleLevel"
          }
          if (level === "0") {
            return "normal"
          }
        },
        setLevel: function(level) {
          vm.todayTask[vm.currentTaskIndex].level = level.toString();
        },
        setTag: function(type) {
          vm.formData.tag = type;

        }
      }
      //bind view module with the specificed function
    vm.adjustColor = Task.adjustColor;
    vm.createToDo = Task.create;
    vm.deleteTask = Task.delete;
    vm.undoFinish = Task.undoFinish;
    vm.setTaskLevel = Task.setLevel;
    vm.setTaskTag = Task.setTag;

    //update with the server when todayTask changed
    //include add new taks, delete task and modify the task
    $scope.$watch('vm.todayTask', function(newVal, oldVal) {
      if (newVal === oldVal) return;
      // console.log('successfully update')
      Task.update();
    }, true)

    //handle the new taks
    function newTaskHandler(taskInput) {
      var inputArray = taskInput.split('#');
      var content = inputArray[0];
      var tags = inputArray[1],
        level = inputArray[2];
      if (!level) {
        level = vm.formData.level;
      }
      if (!tags) {
        tags = vm.formData.tag;
      }
      return {
        content: content,
        level: level,
        tags: tags,
        status: "going"
      }
    }
  }
})()
