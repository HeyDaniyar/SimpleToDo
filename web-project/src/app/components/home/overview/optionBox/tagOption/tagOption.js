import angular from 'angular';
import tagOptionTemplate from './tagOption.html';

class tagOptionCtrl {
  constructor() {}

  $onInit() {}

  addTag(name) {
    this.newTask.tag = name;
    this.hideBox();
    this.tasksUpdate({
      newTasks: this.tasks
    });
  }
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
      tasksUpdate: "&",
    },
  });
