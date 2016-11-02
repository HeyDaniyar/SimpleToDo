import angular from 'angular';
import overviewTemplate from './overview.html';
import HeadInfo from './headInfo/headInfo';
import TaskForm from './taskForm/taskForm';
import TasksList from './tasksList/tasksList';


import './overview.scss';

class OverviewCtrl {
  constructor($scope, $state, taskApiService) {
    'ngInject';
    this.$scope = $scope;
    this.$state = $state;
    this.taskApiService = taskApiService;
  }

  $onInit() {
    this.user = {
      username: '',
      tasksId: '',
      tasksInfo: [],
    }
    this.getUserTasks();
  }

  getUserTasks() {
    this.taskApiService.getUserTaskInfo().then((data) => {
      console.log('data', data);
      this.user = data;
      console.log('this.user', this.user);
      this.$scope.$apply();
    });
  }

  updateUserTasks(newTasks) {
    if (this.user.tasksInfo) {
      this.user.tasksInfo = newTasks;
      this.taskApiService.updateUserTasks(this.user).then((data) => {
        // this.user.tasksId = data.tasksId;
        // this.user.tasksInfo = data.tasksInfo;
      })
    }

  }

}
export default angular
  .module('home.overview', [
    HeadInfo.name,
    TaskForm.name,
    TasksList.name,
  ])
  .component('overview', {
    controller: OverviewCtrl,
    template: overviewTemplate,
    bingding: {},
  })
