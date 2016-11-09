import angular from 'angular';
import Login from './login/Login.js';
import Register from './register/Register';
import gateTemplate from './gate.html';

class GateCtrl {

}

export default angular
  .module('components.gate', [
    Login.name,
    Register.name,
  ])
  .component('gate', {
    template: gateTemplate,
    controller: GateCtrl,
    bindings: {},
  });
