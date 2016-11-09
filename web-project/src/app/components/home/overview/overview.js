import angular from 'angular';
import overviewTemplate from './overview.html';
import HeadInfo from './headInfo/headInfo';
import TaskForm from './taskForm/taskForm';
import TasksList from './tasksList/tasksList';
import OptionBox from './optionBox';

import './overview.scss';

class OverviewCtrl {
  constructor($scope, $state, taskApiService) {
    'ngInject';

    this.$scope = $scope;
    this.$state = $state;
    this.taskApiService = taskApiService;
    this.showLoading = false;
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
    this.showLoading = true;
    this.taskApiService.getUserTaskInfo().then((data) => {
      this.showLoading = false;
      this.user = data;
      this.$scope.$apply();
    });
  }

  updateUserTasks(newTasks) {
    console.log('this is updateUserTasks', newTasks);
    this.showLoading = true;
    if (this.user.tasksInfo) {
      this.user.tasksInfo = newTasks;
      this.taskApiService.updateUserTasks(this.user).then((data) => {
        this.showLoading = false;
        if (this.user.tasksId === '') {
          this.user.tasksId = data.tasksId;
        }
      })
    }
  }
}

export default angular
  .module('home.overview', [
    HeadInfo.name,
    TaskForm.name,
    TasksList.name,
    OptionBox.name,
  ])
  .component('overview', {
    controller: OverviewCtrl,
    template: overviewTemplate,
    bingding: {},
  })
