import angular from 'angular';
import Gate from './gate/Gate';
import Home from './home/Home';

export default angular.module('components', [
  Gate.name,
  Home.name,
]);
