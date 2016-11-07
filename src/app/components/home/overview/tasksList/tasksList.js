import angular from 'angular';
import TasksListTemplate from './tasksList.html';

class TasksListCtrl {
  constructor() {}
  $onInit() {
    this.showRemark = false;
    //when there is no tasks yet
    if (this.tasks.id === '') {
      this.showRemark = true;
    }
  }
}
export default angular
  .module('overview.tasksList', [])
  .component('tasksList', {
    controller: TasksListCtrl,
    template: TasksListTemplate,
    bindings: {
      tasks: '<',
    },
  })
