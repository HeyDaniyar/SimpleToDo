import AV from 'leancloud-storage';
import angular from 'angular';

class UserApiService {
  constructor($state) {
    // this.userApiPostProcessor = userApiPostProcessor;
    this.$state = $state;
  }

  login({ username,  password}) {
    return AV.User.logIn(username, password)
    .then( (loginUser)=> {
      console.log('succefully login in');
      return loginUser;
    }, (error)=>{
      console.log('login error', error);
    });
  }

  logoff() {
    AV.User.logOut();
    this.$state.go('gate.login');
  }
}


export default angular
  .module('services.user', [])
  .service('userApiService', UserApiService);
