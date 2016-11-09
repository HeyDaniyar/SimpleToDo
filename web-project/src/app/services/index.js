import angular from 'angular';
import UserApiService from './LeancloudApi/UserApiService';
import TaskApiService from './LeancloudApi/TaskApiService';
export default angular.module('services', [
  UserApiService.name,
  TaskApiService.name,
]);
