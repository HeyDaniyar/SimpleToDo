import angular from 'angular';
import 'angular-animate';
import 'angular-ui-router';
import 'angular-local-storage';
import 'angular-messages';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/scss/font-awesome.scss';
import AV from 'leancloud-storage';

import './common-styles';
import directive from './directives';
import components from './components';
import services from './services';


export default angular
  .module('daniToDo', [
    'ui.router',
    'ngMessages',
    'ngAnimate',
    components.name,
    services.name,
    directive.name,
  ])
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('gate', {
        url: '',
        abstract: true,
        template: '<gate></gate>',
      })
      .state('gate.login', {
        url: '/login',
        template: '<login></login>',
      })
      .state('gate.register', {
        url: '/register',
        template: '<register></register>',
      })
      .state('home', {
        url: '',
        abstract: true,
        template: '<home></home>',
      })
      .state('home.overview', {
        url: '/home',
        template: '<overview></overview>',
      });
  })
  .run(($rootScope, $state) => {
    'ngInject';

    const currentUser = AV.User.current();
    if (currentUser) {
      //  if login go to homepage,
      $state.go('home.overview');
    } else {
      //  currentUser is null, open the login page
      $state.go('gate.login');
    }
  });
