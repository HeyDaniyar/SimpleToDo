import angular from 'angular';

import registerTemplate from './register.html';

import './../login/login.css';

class RegisterCtrl {
  constructor(userApiService) {
    'ngInject';

    this.userApiService = userApiService;
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

  registerClickHandler(form) {
    form.$setSubmitted();
    if (form.$valid) {
      this.userApiService
        .signup({
          username: this.user.username,
          password: this.user.password,
        })
        .then((data) => {
          console.log('data==', data);
          console.log('Welcome,Successlly registered');
          this.userApiService.createUserScheme({
            username: this.user.username
          });
        })
        .catch((data) => {
          this.isLoginPending = false;
          this.loginFailedMsg = 'Sorry, Register Failded';
        })
    }
  }
}
export default angular
  .module('gate.register', [])
  .component('register', {
    controller: RegisterCtrl,
    template: registerTemplate,
    bindings: {},
  })
