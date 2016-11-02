import angular from 'angular';
import TasksListTemplate from './tasksList.html';

class TasksListCtrl {
  constructor() {}
  $onInit() {
    this.showRemark = true;
    this.loading = false;
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
