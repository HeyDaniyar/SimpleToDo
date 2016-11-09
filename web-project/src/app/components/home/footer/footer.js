import angular from 'angular';
import footerTemplate from './footer.html';

class FooterCtrl {
  constructor(userApiService) {
    'ngInject';

    this.userApiService = userApiService;
  }

  logoff() {
    this.userApiService.logoff();
  }
}

export default angular
  .module('components.footer', [])
  .component('footer', {
    template: footerTemplate,
    controller: FooterCtrl,
    bindings: {},
  });
