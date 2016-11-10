import angular from 'angular';

import loginTemplate from './login.html';

import './login.css';

class LoginCtrl {
  constructor($scope, $state, userApiService) {
    'ngInject';

    this.$scope = $scope;
    this.$state = $state;
    this.userApiService = userApiService;

  }

  $onInit() {
    this.user = {
      username: '',
      password: '',
    };

    this.loginFailedMsg = ""
    this.isLoginPendeng = false;
  }

  loginClickHandler(form) {
    form.$setSubmitted();
    if (form.$valid) {
      this.isLoginPending = true;
      this.userApiService
        .login({
          username: this.user.username,
          password: this.user.password,
        })
        .then((data) => {
          this.isLoginPending = false;
          if (data.code !== 200) {
            this.loginFailedMsg = data.message;
            this.$scope.$apply();
          }
        })
        .catch((data) => {
          this.isLoginPending = false;
          this.loginFailedMsg = 'Sorry, Login Failded';
        })
    }
  }

  registerClickHandler() {
    this.$state.go('gate.register')
  }
}
export default angular
  .module('gate.login', [])
  .component('login', {
    controller: LoginCtrl,
    template: loginTemplate,
    bindings: {},
  })
