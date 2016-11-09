import angular from 'angular';
import TaskOptionTemplate from './taskOption.html';

class TaskOptionCtrl {
  constructor() {}

  $onInit() {
    console.log('this is TaskOptionCtrl()');
    console.log('this is tasks', this.tasks[this.taskIndex]);
  }

  undoFinish() {
    this.tasks[this.taskIndex].status = 'going';
    this.hideBox();
    this.tasksUpdate({
      newTasks: this.tasks
    });
  }

  deleteTask() {
    this.tasks.splice(this.taskIndex, 1);
    this.hideBox();
    this.tasksUpdate({
      newTasks: this.tasks
    });
  }

  setTaskLevel(level) {
    this.tasks[this.taskIndex].level = level;
    this.hideBox();
    this.tasksUpdate({
      newTasks: this.tasks
    });
  }
}
export default angular
  .module('optionBox.taskOption', [])
  .component('taskOption', {
    controller: TaskOptionCtrl,
    template: TaskOptionTemplate,
    bindings: {
      tasks: '<',
      taskIndex: '<',
      showBox: '<',
      hideBox: '&',
      tasksUpdate: '&'
    },
  });
