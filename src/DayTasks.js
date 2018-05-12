import React, { Component } from 'react';
import './Header.css';
import Task from './task.js';

class DayTasks extends Component {
  constructor(props) {
  	super(props);

    this.state = {
      taskComplete: [],
      taskSum: 0,
      newTask: "",
    }

    this.componentDidMount = this.componentDidMount.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
  }


componentDidMount() {
  let taskComplete = [];
  for (let i in this.props.tasks) {
    taskComplete.push(0);
  }
  this.setState({taskComplete: taskComplete});
}

toggleTask(index) {
  let taskComplete = this.state.taskComplete;
  if (taskComplete[index] === 1){
    taskComplete[index] = 0;
  } else {
    taskComplete[index] = 1;
  }
  let taskSum = taskComplete.reduce(function(num, sum){
    return num + sum;
  });
  console.log('Task Sum: ' + taskSum)
  this.setState({taskComplete: taskComplete, taskSum: taskSum});
}

  render() {
    return (
      <div className="content-time" id="day">
        <div className="content-header">
          <div className = "filler">
          </div>
          <h1>Day</h1>
          <div className="content-stats" id="stats-day">
            <h2>{this.state.taskSum}/{this.state.taskComplete.length}</h2>
          </div>
        </div>
        <p id = 'p-day0'></p>
        {this.props.tasks.map((task, i) => {
          return (
          <Task 
            index = {i}
            task = {task}
            active = {this.state.taskComplete[i]}
            toggleTaskFunc = {this.toggleTask}
          />
          )
        })}
        <input className="add-button" id = "add-day" type="button" value="add"></input>
      </div>
    );
  }
}

export default DayTasks;
