import angular from 'angular';

export default angular
  .module('daniToDo.directives.formValidator', [])
  .directive('passwordStrong', () => {
    'ngInject';

    return {
      restrict: 'A',
      require: 'ngModel',
      link: ($scope, elm, attr, ngModel) => {
        ngModel.$validators.strong = (modelValue) => {
          return !modelValue ? true : /[1-9]/.test(modelValue);
        };
      }
    };
  })
  .directive('passwordMatch', () => {
    'ngInject';

    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {
        secondPassword: '=passwordMatch'
      },
      link: (scope, elm, attr, ngModel) => {
        ngModel.$validators.passwordMatch = (modelValue) => {
          return modelValue === scope.secondPassword;
        };
        scope.$watch("secondPassword", function() {
          ngModel.$validate();
        });
      },
    };
  })
  // .directive('phoneNumber', () => {
  //   return {
  //     restrict: 'A',
  //     require: 'ngModel',
  //     link($scope, $elm, attr, ngModel) {
  //       ngModel.$validators.phoneNumber = (modelValue) => {
  //         return !/[^0-9]/.test(modelValue);
  //       };
  //     }
  //   };
  // });
