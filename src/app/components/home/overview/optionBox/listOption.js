import angular from 'angular';
import ListOptionTemplate from './taskForm.html';

class ListOptionCtrl {
  constructor() {}

  $onInit() {

  }

}
export default angular
  .module('optionBoxt.listOption', [])
  .component('listOption', {
    controller: ListOptionCtrl,
    template: ListOptionTemplate,
    bindings: {
      tasks: '<',
    },
  });
