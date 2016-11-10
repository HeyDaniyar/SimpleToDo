import AV from 'leancloud-storage';
import angular from 'angular';

class UserApiService {
  constructor($state) {
    'ngInject';

    this.$state = $state;
  }

  login({
    username,
    password
  }) {
    return AV.User.logIn(username, password)
      .then((loginUser) => {
        console.log('loginUser', loginUser);
        if (loginUser) {
          console.log('succefully login in');
          this.$state.go('home.overview');
        }
      }, (error) => {
        console.log('login error', error.message);
        return error
      });
  }

  signup({
    username,
    password,
  }) {
    let user = new AV.User();
    user.setUsername(username);
    user.setPassword(password);
    return user.signUp().then((loginUser) => {
      console.log('successfully register');
      return loginUser;
    }, (error) => {
      console.log('register Error', error);
    })
  }

  logoff() {
    AV.User.logOut();
    this.$state.go('gate.login');
  }

  createUserScheme({
    username
  }) {
    let UserTask = AV.Object.extend(username);
    let newObject = new UserTask()
    newObject.save().then((object) => {
      console.log('objectId', object.id);
      this.$state.go('home.overview');
    }, (err) => {
      console.log('some err', err.message);
    })
  }

}


export default angular
  .module('services.user', [])
  .service('userApiService', UserApiService);
