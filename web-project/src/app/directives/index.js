import angular from 'angular';
import formValidator from './formValidator';
import optionBox from './optionBox';

export default angular.module('daniToDo.directives', [
  formValidator.name,
  optionBox.name,
])
