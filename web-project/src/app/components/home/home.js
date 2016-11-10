import angular from 'angular';
import Overview from './overview/overview';
import Footer from './footer/footer';
import './home.scss';
import homeTemplate from './home.html';

class HomeCtrl {

}

export default angular
  .module('components.home', [
    Overview.name,
    Footer.name,
  ])
  .component('home', {
    template: homeTemplate,
    controller: HomeCtrl,
    bindings: {},
  });
