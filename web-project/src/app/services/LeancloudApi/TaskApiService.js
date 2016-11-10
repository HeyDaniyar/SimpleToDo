import AV from 'leancloud-storage';
import angular from 'angular';

class TaskApiService {
  constructor() {
    'ngInject';

    const dateObj = new Date();
    const dateSeparate = {
      month: dateObj.getUTCMonth() + 1,
      day: dateObj.getUTCDate(),
      year: dateObj.getUTCFullYear(),
    }
    this.date = dateSeparate.year + '-' + dateSeparate.month + '-' + dateSeparate.day;

  }

  getUserTaskInfo() {
    const username = AV.User.current().attributes.username;
    const query = new AV.Query(username);
    query.first().then((data) => {
      console.log('query data', data);
    }, (error) => {
      //there is no er
    })
    let userTasksInfo = {
        username: username,
        tasksInfo: [],
        tasksId: '',
      }
      // check out if there is any today task existed
    query.equalTo('date', this.date);
    return query.find().then((results) => {
      console.log('getUserTaskInfo result:', results);
      // if there is no any tasks yet
      if (results.length === 0) {
        return userTasksInfo;
      }
      userTasksInfo.tasksId = results[0].id;
      userTasksInfo.tasksInfo = results[0].attributes.tasks;
      return userTasksInfo;
    }, (error) => {
      console.log('Faild to get User Info', error.message);
    });
  }

  updateUserTasks(userTasksInfo) {
    let tasks = userTasksInfo.tasksInfo;
    let objectId = userTasksInfo.tasksId;
    let username = userTasksInfo.username;
    // when there is no object id ,
    // the lean cloud will automatically create new Todo
    var todo = AV.Object.createWithoutData(username, objectId);
    todo.set('tasks', tasks);
    todo.set('date', this.date);
    // save to leancloud
    return todo.save().then((data) => {
      console.log('data', data);
      userTasksInfo.tasksId = data.id;
      userTasksInfo.tasksInfo = data.attributes.tasks;
      return userTasksInfo;
    }, (err) => {
      console.log('Failed to create new object', err.message);
    })
  }
}


export default angular
  .module('services.task', [])
  .service('taskApiService', TaskApiService);
