import angular from 'angular';
import flagOptionTemplate from './flagOption.html';

class flagOptionCtrl {
  constructor() {}


}
export default angular
  .module('optionBox.flagOption', [])
  .component('flagOption', {
    controller: flagOptionCtrl,
    template: flagOptionTemplate,
    bindings: {
      newTask: '<',
      showBox: '<',
      hideBox: '&',
    },
  });
