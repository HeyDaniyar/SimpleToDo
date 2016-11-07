import angular from 'angular';
import TaskOption from './taskOption/taskOption';
import TagOption from './tagOption/tagOption';
import FlagOption from './flagOption/flagOption';
import './optionBox.scss';

export default angular.module('overview.optionBox', [
  TaskOption.name,
  TagOption.name,
  FlagOption.name,
])
