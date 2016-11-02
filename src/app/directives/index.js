import angular from 'angular';
import formValidator from './FormValidator';

export default angular.module('daniToDo.directives', [
  formValidator.name,
])
