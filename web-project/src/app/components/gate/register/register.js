import angular from 'angular';

import registerTemplate from './register.html';

import './../login/login.css';

class RegisterCtrl {
  constructor($state) {
    'ngInject';

    this.$state = $state;
  }

  $onInit() {
    this.user = {
      username: '',
      password: '',
      repeatPassword: '',
    };

    this.loginFailedMsg = '';
    this.isLoginPendeng = false;
  }

  loginClickHandler(form) {
    form.$setSubmitted();

    // if (form.$valid) {
    //   this.isLoginPending = true;
    //   this.userApiService
    //     .login({
    //       username: this.user.username,
    //       password: this.user.pwd,
    //     })
    //     .then((data) => {
    //       this.isLoginPending = false;
    //       this.$state.go('home.overview');
    //     })
    //     .catch((data) => {
    //       this.isLoginPending = false;
    //       this.loginFailedMsg = 'Sorry, Login Failded';
    //     })
    // }
  }
}
export default angular
  .module('gate.register', [])
  .component('register', {
    controller: RegisterCtrl,
    template: registerTemplate,
    bindings: {},
  })
