import angular from 'angular';
import TaskFormTemplate from './taskForm.html';

class TaskFormCtrl {
  constructor() {}

  $onInit() {
    this.newTask = {
      content: '',
      tag: '',
      level: '',
      status: 'going',
    }
    this.showTagBox = false;
    this.showFlagBox = false;
  }

  adjustColor(level) {
    //handle the color with different task level
    if (level === "2") {
      return "highLevel";
    }
    if (level === "1") {
      return "midleLevel";
    }
    if (level === "0") {
      return "normal";
    }
  }

  createTask() {
    if (this.newTask.content) {
      this.showRemark = false;
      console.log('this.newTask', this.newTask);
      this.tasks.push(this.newTask);
      console.log('this tasks', this.tasks);
      this.tasksUpdate({
        newTasks: this.tasks
      });
      this.newTask = {};
    } else {
      alert('please input the task first')
    }
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
