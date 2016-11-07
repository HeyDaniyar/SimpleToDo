import angular from 'angular';
import tagOptionTemplate from './tagOption.html';

class tagOptionCtrl {
  constructor() {}

  $onInit() {}

}
export default angular
  .module('optionBox.tagOption', [])
  .component('tagOption', {
    controller: tagOptionCtrl,
    template: tagOptionTemplate,
    bindings: {
      newTask: '<',
      showBox: '<',
      hideBox: '&',
    },
  });
