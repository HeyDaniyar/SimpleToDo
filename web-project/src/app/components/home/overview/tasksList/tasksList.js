import angular from 'angular';
import TasksListTemplate from './tasksList.html';

class TasksListCtrl {
  constructor($scope) {
    'ngInject';

    this.$scope = $scope;
  }

  $onInit() {
    this.showRemark = false;
    this.showTaskOption = false;
    this.taskIndex = '';
    //when there is no tasks yet
    if (this.tasks.id === '') {
      this.showRemark = true;
    }
  }

  taskOptionHanlder(index) {
    this.taskIndex = index;
    this.showTaskOption = true;
  }

  finishTask(index) {
    this.tasks[index].status = 'finished';
    this.tasksUpdate({
      newTasks: this.tasks
    });
  }

  adjustColor(level) {
    console.log('level', level);
    //handle the color with different task level
    if (level === 2) {
      return "highLevel"
    }
    if (level === 1) {
      return "midleLevel"
    }
    if (level === 0) {
      return "normal"
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
      tasksUpdate: '&',
    },
  })
