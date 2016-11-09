import angular from 'angular';

export default angular
  .module('daniToDo.directives.optionBox', [])
  .directive('boxPositionAdjust', () => {
    'ngInject';

    return {
      restrict: 'A',
      link: ($scope, element, attr) => {
        element.on('click', function(event) {
          console.log('hey i am clicked', event);

          var optionBox = angular.element(document.querySelector('.AmiMenu'));
          console.log('optionBox', optionBox);
          optionBox.css({
            'display': 'inline-block',
            'left': event.pageX + 'px',
            'top': event.pageY + 'px',
          });
          console.log('optionBox', optionBox);
        })
      }
    };
  })
