import angular from 'angular';
import Gate from './gate/gate';
import Home from './home/home';

export default angular.module('components', [
  Gate.name,
  Home.name,
]);
