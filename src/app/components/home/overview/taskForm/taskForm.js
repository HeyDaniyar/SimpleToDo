import angular from 'angular';
import TaskFormTemplate from './taskForm.html';

class TaskFormCtrl {
  constructor() {}

  $onInit() {
    this.newTask = {
      content: '',
      tag: '',
      level: '',
      status: '',
    }
  }

  adjustColor(level) {
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
    }
    // $onChanges(changes) {
    //   if (changes.tasks) {
    //     this.tasks = changes.tasks.currentValue;
    //     console.log('this.tasks',this.tasks);
    //   }
    // }
  createTask() {
    if (this.newTask.content) {
      this.showRemark = false;
      this.tasks.push(this.newTask);
      this.tasksUpdate({
        newTasks: this.tasks
      });
      this.newTask = {};
    } else {
      alert('please input the task first')
    }
  }

  newTaskHandler() {
    // var inputArray = taskInput.split('#');
    // var content = inputArray[0];
    // var tags = inputArray[1],
    //   level = inputArray[2];
    // if (!level) {
    //   level = this.newTask.level;
    // }
    // if (!tags) {
    //   tags = vm.newTask.tag;
    // }
    // return {
    //   content: content,
    //   level: level,
    //   tags: tags,
    //   status: "going"
    // }
    // }
  }

}
export default angular
  .module('overview.taskForm', [])
  .component('taskForm', {
    controller: TaskFormCtrl,
    template: TaskFormTemplate,
    bindings: {
      tasks: '<',
      tasksUpdate: '&'
    },
  });
