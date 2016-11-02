import angular from 'angular';
import HeadInfoTemplate from './headInfo.html';
import './headInfo.scss'

class HeadInfoCtrl {
  constructor() {
    'ngInject';

  }
  $onInit() {
    // console.log('hey this change');
  }
}

export default angular
  .module('overview.headInfo', [])
  .component('headInfo', {
    controller: HeadInfoCtrl,
    template: HeadInfoTemplate,
    bindings: {
      name: '<',
      tasks: '<',
    },
  })
