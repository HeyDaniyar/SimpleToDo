import AV from 'leancloud-storage';
import angular from 'angular';

class TaskApiService {
  constructor() {
    const dateObj = new Date();
    const dateSeparate = {
      month: dateObj.getUTCMonth() + 1,
      day: dateObj.getUTCDate(),
      year: dateObj.getUTCFullYear(),
    }
    this.date = dateSeparate.year + '-' + dateSeparate.month + '-' + dateSeparate.day;
    this.currentUser = AV.User.current();
    this.username = this.currentUser.attributes.username;
  }

  getUserTaskInfo() {
    const query = new AV.Query(this.username);
    // check out if there is any today task existed
    query.equalTo('date', this.date);
    return query.find().then((results) => {
      console.log('getUserTaskInfo result:', results);
      if (results.length > 0) {
        return ({
          username: this.username,
          tasksInfo: results.attributes.tasks,
          tasksId: results.id,
        })
      }
      //if there is no tasks yet, the taskInfo will return undefined
      return ({
        username: this.username,
        tasksInfo: [],
        tasksId: '',
      });
    }, (error) => {
      console.log('Faild to get User Info', error.message);
    });
  }

  updateUserTasks(userTasksInfo) {
    const tasks = userTasksInfo.tasksInfo;
    const objectId = userTasksInfo.tasksId;
    const username = userTasksInfo.username;
    // when there is no object id ,
    // the lean cloud will automatically create new Todo
    console.log('the updateUserTasks', userTasksInfo);
    var todo = AV.Object.createWithoutData(username, objectId);
    console.log('todo', todo);
    todo.set('tasks', tasks);
    todo.set('date', this.date);
    // save to leancloud
    return todo.save().then(function(data) {
      console.log('data', data);
      // userTasksInfo.tasksId = data.id;
      // userTasksInfo.tasksInfo = data.attributes.tasks;
      // return userTasksInfo;
    }, (err) => {
      console.log('Failed to create new object', err.message);
    })
  }
}


export default angular
  .module('services.task', [])
  .service('taskApiService', TaskApiService);
